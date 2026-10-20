
/* =========================================================
   SAJAN KHADKA — ADVANCED PARTICLE NETWORK
   File: particles.js

   FEATURES
   01. Animated glowing particles
   02. Interactive spider-web connections
   03. Smooth connection fade-out
   04. Mouse, pen and touch support
   05. Responsive particle density
   06. High-DPI canvas rendering
   07. Optimized connection calculations
   08. Reduced-motion accessibility
   09. Automatic pause for hidden tabs
   10. Responsive resize handling
   11. Safe canvas initialization
   12. Public start / stop / refresh API
   13. Complete cleanup support
   14. No external libraries required
========================================================= */

(() => {
  "use strict";

  /* Prevent duplicate initialization. */
  if (window.__sajanParticlesInitialized) {
    return;
  }

  const canvas = document.getElementById("particleCanvas");

  if (!canvas) {
    console.warn(
      "Particle network: #particleCanvas was not found."
    );
    return;
  }

  const ctx = canvas.getContext("2d", {
    alpha: true
  });

  if (!ctx) {
    console.warn(
      "Particle network: Canvas 2D is unavailable."
    );
    return;
  }

  window.__sajanParticlesInitialized = true;

  /* =======================================================
     CONFIGURATION
  ======================================================= */

  const CONFIG = Object.freeze({
    particleColor: "0, 190, 255",
    connectionColor: "0, 190, 255",

    
desktopParticles: 120,
tabletParticles: 75,
mobileParticles: 40,


    maxDevicePixelRatio: 1.5,

    particleMinRadius: 0.8,
    particleMaxRadius: 2.2,

    particleSpeed: 0.22,

    interactionRadius: 180,
    connectionDistance: 100,

    maxConnectionsPerParticle: 3,

    connectionWidth: 0.8,
    connectionOpacity: 0.55,

    glowBlur: 3,

    targetFPS: 30,
    resizeDebounce: 160,
    fadeDuration: 1000,

    /* Disable expensive canvas effects on small screens. */
    mobileGlow: false
  });

  const reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const finePointerQuery = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  );

  /* =======================================================
     STATE
  ======================================================= */

  let width = 0;
  let height = 0;
  let dpr = 1;

  let particles = [];

  let animationFrame = null;
  let resizeTimer = null;
  let lastFrameTime = 0;

  let pageVisible = !document.hidden;
  let manuallyPaused = false;
  let destroyed = false;

  let pointer = {
    x: 0,
    y: 0,
    active: false,
    lastInteraction: 0,
    pointerType: "mouse"
  };

  const FRAME_INTERVAL = 1000 / CONFIG.targetFPS;

  const eventController =
    typeof AbortController !== "undefined"
      ? new AbortController()
      : null;

  const listenerOptions = eventController
    ? { signal: eventController.signal }
    : undefined;

  /* =======================================================
     HELPERS
  ======================================================= */

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function reducedMotionEnabled() {
    return reducedMotionQuery.matches;
  }

  function isMobile() {
    return width <= 600;
  }

  function isRunningAllowed() {
    return (
      !destroyed &&
      !manuallyPaused &&
      pageVisible
    );
  }

  function getParticleCount() {
    if (width <= 600) {
      return CONFIG.mobileParticles;
    }

    if (width <= 1024) {
      return CONFIG.tabletParticles;
    }

    return CONFIG.desktopParticles;
  }

  function getEffectiveGlow() {
    if (isMobile() && !CONFIG.mobileGlow) {
      return 0;
    }

    return CONFIG.glowBlur;
  }

  /* =======================================================
     CANVAS SIZE
  ======================================================= */

  function resizeCanvas() {
    if (destroyed) return;

    width = Math.max(1, window.innerWidth);
    height = Math.max(1, window.innerHeight);

    dpr = Math.min(
      window.devicePixelRatio || 1,
      CONFIG.maxDevicePixelRatio
    );

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    createParticles();
    renderFrame();
  }

  /* =======================================================
     PARTICLE CREATION
  ======================================================= */

  function createParticles() {
    const count = getParticleCount();

    particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: random(0, width),
        y: random(0, height),

        vx: random(-1, 1) * CONFIG.particleSpeed,
        vy: random(-1, 1) * CONFIG.particleSpeed,

        radius: random(
          CONFIG.particleMinRadius,
          CONFIG.particleMaxRadius
        ),

        alpha: random(0.35, 0.85),

        phase: random(0, Math.PI * 2),
        twinkleSpeed: random(0.008, 0.02)
      });
    }
  }

  /* =======================================================
     UPDATE PARTICLES
  ======================================================= */

  function updateParticles() {
    /*
      Keep particle positions static when reduced motion
      is enabled, while still allowing a manually requested
      redraw of the canvas.
    */
    if (reducedMotionEnabled()) return;

    for (const particle of particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      particle.phase += particle.twinkleSpeed;

      if (particle.x < -5) {
        particle.x = width + 5;
      } else if (particle.x > width + 5) {
        particle.x = -5;
      }

      if (particle.y < -5) {
        particle.y = height + 5;
      } else if (particle.y > height + 5) {
        particle.y = -5;
      }
    }
  }

  /* =======================================================
     DRAW PARTICLES
  ======================================================= */

  function drawParticles() {
    const glow = getEffectiveGlow();

    for (const particle of particles) {
      const twinkle = reducedMotionEnabled()
        ? 0
        : Math.sin(particle.phase) * 0.15;

      const alpha = Math.max(
        0.15,
        Math.min(1, particle.alpha + twinkle)
      );

      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(${CONFIG.particleColor}, ${alpha})`;

      if (glow > 0) {
        ctx.shadowBlur = glow;
        ctx.shadowColor =
          `rgba(${CONFIG.particleColor}, ${alpha})`;
      }

      ctx.fill();
    }

    ctx.shadowBlur = 0;
  }

  /* =======================================================
     POINTER CONNECTIONS
  ======================================================= */

  function drawConnections() {
    if (!pointer.active) return;

    const idleTime =
      performance.now() - pointer.lastInteraction;

    const fade = reducedMotionEnabled()
      ? 1
      : Math.max(
          0,
          1 - idleTime / CONFIG.fadeDuration
        );

    if (fade <= 0) {
      pointer.active = false;
      return;
    }

    const radius = CONFIG.interactionRadius;
    const radiusSquared = radius * radius;

    const maxDistance = CONFIG.connectionDistance;
    const maxDistanceSquared = maxDistance * maxDistance;

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];

      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;

      const cursorDistanceSquared =
        dx * dx + dy * dy;

      if (cursorDistanceSquared > radiusSquared) {
        continue;
      }

      let connections = 0;

      /*
        Connect nearby particles to form a limited web.
        The maximum connection count controls visual density.
      */

      for (
        let j = i + 1;
        j < particles.length;
        j++
      ) {
        const other = particles[j];

        const dx2 = particle.x - other.x;
        const dy2 = particle.y - other.y;

        const distanceSquared =
          dx2 * dx2 + dy2 * dy2;

        if (distanceSquared > maxDistanceSquared) {
          continue;
        }

        const distance = Math.sqrt(distanceSquared);

        const opacity =
          (1 - distance / maxDistance) *
          CONFIG.connectionOpacity *
          fade;

        if (opacity <= 0.01) continue;

        ctx.beginPath();

        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);

        ctx.strokeStyle =
          `rgba(${CONFIG.connectionColor}, ${opacity})`;

        ctx.lineWidth = CONFIG.connectionWidth;
        ctx.stroke();

        connections++;

        if (
          connections >=
          CONFIG.maxConnectionsPerParticle
        ) {
          break;
        }
      }

      /*
        Connect each nearby particle to the pointer.
      */

      const cursorDistance =
        Math.sqrt(cursorDistanceSquared);

      const cursorOpacity =
        (1 - cursorDistance / radius) *
        CONFIG.connectionOpacity *
        fade;

      if (cursorOpacity > 0.01) {
        ctx.beginPath();

        ctx.moveTo(pointer.x, pointer.y);
        ctx.lineTo(particle.x, particle.y);

        ctx.strokeStyle =
          `rgba(${CONFIG.connectionColor}, ${cursorOpacity})`;

        ctx.lineWidth = CONFIG.connectionWidth;
        ctx.stroke();
      }
    }
  }

  /* =======================================================
     RENDER
  ======================================================= */

  function renderFrame() {
    if (destroyed) return;

    ctx.clearRect(0, 0, width, height);

    drawConnections();
    drawParticles();
  }

  /* =======================================================
     ANIMATION LOOP
  ======================================================= */

  function animate(timestamp) {
    animationFrame = null;

    if (!isRunningAllowed()) return;

    if (reducedMotionEnabled()) {
      renderFrame();
      return;
    }

    if (
      timestamp - lastFrameTime >= FRAME_INTERVAL
    ) {
      lastFrameTime = timestamp;

      updateParticles();
      renderFrame();
    }

    if (isRunningAllowed()) {
      animationFrame = requestAnimationFrame(animate);
    }
  }

  function startAnimation() {
    if (!isRunningAllowed()) return;
    if (reducedMotionEnabled()) {
      renderFrame();
      return;
    }

    if (animationFrame !== null) return;

    lastFrameTime = 0;

    animationFrame = requestAnimationFrame(animate);
  }

  function stopAnimation() {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  }

  /* =======================================================
     POINTER INTERACTION
  ======================================================= */

  function activatePointer(x, y, pointerType = "mouse") {
    if (destroyed) return;

    pointer.x = x;
    pointer.y = y;
    pointer.active = true;
    pointer.lastInteraction = performance.now();
    pointer.pointerType = pointerType;

    /*
      Under reduced motion, show a static connection
      without starting an animation loop.
    */

    if (reducedMotionEnabled()) {
      renderFrame();
      return;
    }

    startAnimation();
  }

  function deactivatePointer() {
    pointer.active = false;
    renderFrame();
  }

  /* =======================================================
     MOUSE AND PEN
  ======================================================= */

  function handlePointerMove(event) {
    if (event.pointerType === "touch") return;

    activatePointer(
      event.clientX,
      event.clientY,
      event.pointerType || "mouse"
    );
  }

  function handlePointerDown(event) {
    activatePointer(
      event.clientX,
      event.clientY,
      event.pointerType || "mouse"
    );
  }

  function handlePointerOut(event) {
    if (!event.relatedTarget) {
      deactivatePointer();
    }
  }

  window.addEventListener(
    "pointermove",
    handlePointerMove,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  window.addEventListener(
    "pointerdown",
    handlePointerDown,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  window.addEventListener(
    "pointerout",
    handlePointerOut,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  /* =======================================================
     TOUCH SUPPORT
  ======================================================= */

  function handleTouchStart(event) {
    const touch = event.touches[0];

    if (!touch) return;

    activatePointer(
      touch.clientX,
      touch.clientY,
      "touch"
    );
  }

  function handleTouchMove(event) {
    const touch = event.touches[0];

    if (!touch) return;

    activatePointer(
      touch.clientX,
      touch.clientY,
      "touch"
    );
  }

  function handleTouchEnd() {
    /*
      Keep the last interaction briefly so the web
      fades naturally instead of disappearing instantly.
    */

    pointer.lastInteraction =
      performance.now() -
      CONFIG.fadeDuration * 0.35;

    if (reducedMotionEnabled()) {
      deactivatePointer();
      return;
    }

    startAnimation();
  }

  window.addEventListener(
    "touchstart",
    handleTouchStart,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  window.addEventListener(
    "touchmove",
    handleTouchMove,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  window.addEventListener(
    "touchend",
    handleTouchEnd,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  window.addEventListener(
    "touchcancel",
    handleTouchEnd,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  /* =======================================================
     RESIZE HANDLING
  ======================================================= */

  function handleResize() {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      if (destroyed) return;

      resizeCanvas();

      if (isRunningAllowed()) {
        startAnimation();
      }
    }, CONFIG.resizeDebounce);
  }

  window.addEventListener(
    "resize",
    handleResize,
    {
      passive: true,
      ...(listenerOptions || {})
    }
  );

  /* =======================================================
     TAB VISIBILITY
  ======================================================= */

  function handleVisibilityChange() {
    pageVisible = !document.hidden;

    if (pageVisible) {
      lastFrameTime = 0;
      renderFrame();
      startAnimation();
    } else {
      stopAnimation();
    }
  }

  document.addEventListener(
    "visibilitychange",
    handleVisibilityChange,
    listenerOptions || false
  );

  /* =======================================================
     REDUCED MOTION
  ======================================================= */

  function handleMotionPreferenceChange() {
    if (reducedMotionEnabled()) {
      stopAnimation();
    } else {
      startAnimation();
    }

    renderFrame();
  }

  if (
    typeof reducedMotionQuery.addEventListener === "function"
  ) {
    reducedMotionQuery.addEventListener(
      "change",
      handleMotionPreferenceChange
    );
  } else if (
    typeof reducedMotionQuery.addListener === "function"
  ) {
    reducedMotionQuery.addListener(
      handleMotionPreferenceChange
    );
  }

  /* =======================================================
     PUBLIC API
     Available through window.SajanParticles
  ======================================================= */

  function refresh() {
    if (destroyed) return;

    resizeCanvas();

    if (isRunningAllowed()) {
      startAnimation();
    }
  }

  function pause() {
    manuallyPaused = true;
    stopAnimation();
  }

  function resume() {
    manuallyPaused = false;

    if (pageVisible) {
      startAnimation();
    }
  }

  function destroy() {
    if (destroyed) return;

    destroyed = true;

    stopAnimation();
    clearTimeout(resizeTimer);

    if (eventController) {
      eventController.abort();
    } else {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointerout",
        handlePointerOut
      );

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      window.removeEventListener(
        "touchcancel",
        handleTouchEnd
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    }

    if (
      typeof reducedMotionQuery.removeEventListener === "function"
    ) {
      reducedMotionQuery.removeEventListener(
        "change",
        handleMotionPreferenceChange
      );
    } else if (
      typeof reducedMotionQuery.removeListener === "function"
    ) {
      reducedMotionQuery.removeListener(
        handleMotionPreferenceChange
      );
    }

    ctx.clearRect(0, 0, width, height);

    particles = [];

    delete window.SajanParticles;
    delete window.__sajanParticlesInitialized;
  }

  window.SajanParticles = Object.freeze({
    refresh,
    pause,
    resume,
    destroy,

    get status() {
      return Object.freeze({
        initialized: !destroyed,
        running: animationFrame !== null,
        visible: pageVisible,
        reducedMotion: reducedMotionEnabled(),
        particleCount: particles.length
      });
    }
  });

  /* =======================================================
     INITIALIZE
  ======================================================= */

  resizeCanvas();
  startAnimation();

  console.log(
    "Sajan Khadka Portfolio: Particle network initialized."
  );
})();
