
/* ==========================================
   SAJAN KHADKA PORTFOLIO
   ADVANCED INTERACTIVE PARTICLE NETWORK
========================================== */

(() => {
    "use strict";

    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const settings = {
        dotColor: "0, 190, 255",
        lineColor: "0, 170, 255",

        // More particles
        density: 4200,
        maxParticles: 260,

        // Appearance
        minRadius: 0.8,
        maxRadius: 2.6,

        // Connections
        connectionDistance: 135,
        mouseRadius: 240,

        // Movement
        speed: 0.45,
        attractionStrength: 0.018,

        // Effects
        glowStrength: 12,
        pulseSpeed: 0.025
    };

    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrame = null;

    const mouse = {
        x: -1000,
        y: -1000,
        active: false
    };

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    /* ========== PARTICLE CLASS ========== */

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;

            this.radius =
                settings.minRadius +
                Math.random() *
                (settings.maxRadius - settings.minRadius);

            this.vx = (Math.random() - 0.5) * settings.speed;
            this.vy = (Math.random() - 0.5) * settings.speed;

            this.phase = Math.random() * Math.PI * 2;
            this.pulse = Math.random() * 0.4 + 0.6;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Gentle mouse attraction
            if (mouse.active) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;

                const distance = Math.hypot(dx, dy);

                if (
                    distance > 15 &&
                    distance < settings.mouseRadius
                ) {
                    const force =
                        (1 - distance / settings.mouseRadius) *
                        settings.attractionStrength;

                    this.x += (dx / distance) * force * 20;
                    this.y += (dy / distance) * force * 20;
                }
            }

            // Bounce at screen edges
            if (this.x <= 0 || this.x >= width) {
                this.vx *= -1;
                this.x = Math.max(0, Math.min(width, this.x));
            }

            if (this.y <= 0 || this.y >= height) {
                this.vy *= -1;
                this.y = Math.max(0, Math.min(height, this.y));
            }

            this.phase += settings.pulseSpeed;
        }

        draw() {
            const pulse =
                (Math.sin(this.phase) + 1) / 2;

            const opacity =
                0.45 + pulse * this.pulse * 0.45;

            const radius =
                this.radius * (0.85 + pulse * 0.3);

            ctx.beginPath();
            ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);

            ctx.fillStyle =
                `rgba(${settings.dotColor}, ${opacity})`;

            ctx.shadowBlur = settings.glowStrength;
            ctx.shadowColor =
                `rgba(${settings.dotColor}, 0.7)`;

            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    /* ========== CREATE PARTICLES ========== */

    function createParticles() {
        particles = [];

        const count = Math.min(
            Math.floor(
                (width * height) / settings.density
            ),
            settings.maxParticles
        );

        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    /* ========== DRAW SPIDER WEB ========== */

    function drawConnections() {
        if (!mouse.active) return;

        const nearby = particles.filter((particle) => {
            return Math.hypot(
                particle.x - mouse.x,
                particle.y - mouse.y
            ) < settings.mouseRadius;
        });

        for (let i = 0; i < nearby.length; i++) {
            for (let j = i + 1; j < nearby.length; j++) {
                const a = nearby[i];
                const b = nearby[j];

                const distance = Math.hypot(
                    a.x - b.x,
                    a.y - b.y
                );

                if (distance > settings.connectionDistance) {
                    continue;
                }

                const mouseDistance = Math.max(
                    Math.hypot(a.x - mouse.x, a.y - mouse.y),
                    Math.hypot(b.x - mouse.x, b.y - mouse.y)
                );

                const opacity =
                    (1 - distance / settings.connectionDistance) *
                    (1 - mouseDistance / settings.mouseRadius) *
                    0.85;

                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);

                ctx.strokeStyle =
                    `rgba(${settings.lineColor}, ${Math.max(0, opacity)})`;

                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }

        // Connect cursor to nearby particles
        nearby.forEach((particle) => {
            const distance = Math.hypot(
                particle.x - mouse.x,
                particle.y - mouse.y
            );

            if (distance > 110) return;

            const opacity = (1 - distance / 110) * 0.4;

            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particle.x, particle.y);

            ctx.strokeStyle =
                `rgba(${settings.lineColor}, ${opacity})`;

            ctx.lineWidth = 0.6;
            ctx.stroke();
        });
    }

    /* ========== MOUSE GLOW ========== */

    function drawMouseGlow() {
        if (!mouse.active) return;

        const gradient = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            settings.mouseRadius
        );

        gradient.addColorStop(
            0,
            "rgba(0, 190, 255, 0.07)"
        );

        gradient.addColorStop(
            1,
            "rgba(0, 190, 255, 0)"
        );

        ctx.beginPath();
        ctx.arc(
            mouse.x,
            mouse.y,
            settings.mouseRadius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = gradient;
        ctx.fill();
    }

    /* ========== ANIMATION ========== */

    function animate() {
        ctx.clearRect(0, 0, width, height);

        drawMouseGlow();

        particles.forEach((particle) => {
            if (!prefersReducedMotion.matches) {
                particle.update();
            }
            particle.draw();
        });

        drawConnections();

        animationFrame = requestAnimationFrame(animate);
    }

    /* ========== RESIZE ========== */

    function resizeCanvas() {
        const dpr = Math.min(
            window.devicePixelRatio || 1,
            2
        );

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        createParticles();
    }

    /* ========== MOUSE EVENTS ========== */

    window.addEventListener(
        "pointermove",
        (event) => {
            if (event.pointerType === "touch") return;

            mouse.x = event.clientX;
            mouse.y = event.clientY;
            mouse.active = true;
        },
        { passive: true }
    );

    document.addEventListener("pointerout", (event) => {
        if (!event.relatedTarget) {
            mouse.active = false;
        }
    });

    window.addEventListener("blur", () => {
        mouse.active = false;
    });

    /* ========== INITIALIZE ========== */

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();

    if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
    }

    animate();

    console.log("Advanced Particle Network Loaded!");
})();
