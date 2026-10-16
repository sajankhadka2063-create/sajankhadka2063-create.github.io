
/* =========================================
   SAJAN KHADKA PORTFOLIO
   MAIN JAVASCRIPT ENGINE
========================================= */

"use strict";

/* ========== 1. SELECT HTML ELEMENTS ========== */

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const languageToggle =
  document.getElementById("languageToggle");

const languageLabel =
  document.getElementById("languageLabel");

const typingText =
  document.getElementById("typingText");

const backToTop =
  document.getElementById("backToTop");

const contactForm =
  document.getElementById("contactForm");

const profilePhoto =
  document.getElementById("profilePhoto");

const profileFallback =
  document.getElementById("profileFallback");


/* ========== 2. LANGUAGE STATE ========== */

const supportedLanguages = ["en", "ne"];

let currentLanguage = "en";

try {
  const savedLanguage =
    localStorage.getItem("sajanPortfolioLanguage");

  if (supportedLanguages.includes(savedLanguage)) {
    currentLanguage = savedLanguage;
  }
} catch (error) {
  console.warn("Language storage is unavailable.");
}


/* ========== 3. TYPING ANIMATION ========== */

let typingTimer = null;
let typingIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function runTypingAnimation() {
  if (!typingText) return;

  const words =
    translations[currentLanguage].typingTexts;

  const currentWord = words[typingIndex];

  if (isDeleting) {
    characterIndex--;
  } else {
    characterIndex++;
  }

  typingText.textContent =
    Array.from(currentWord)
      .slice(0, characterIndex)
      .join("");

  let speed = isDeleting ? 45 : 85;

  if (!isDeleting &&
      characterIndex >= Array.from(currentWord).length) {
    isDeleting = true;
    speed = 1600;
  }

  if (isDeleting && characterIndex <= 0) {
    isDeleting = false;
    typingIndex = (typingIndex + 1) % words.length;
    speed = 350;
  }

  typingTimer = setTimeout(runTypingAnimation, speed);
}

function restartTypingAnimation() {
  clearTimeout(typingTimer);

  typingIndex = 0;
  characterIndex = 0;
  isDeleting = false;

  if (!typingText) return;

  const words =
    translations[currentLanguage].typingTexts;

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (reducedMotion) {
    typingText.textContent = words[0];
    return;
  }

  typingText.textContent = "";
  runTypingAnimation();
}


/* ========== 4. LANGUAGE SWITCHER ========== */

// Only these heading keys contain trusted HTML.
const htmlTranslationKeys = new Set([
  "aboutHeading",
  "skillsHeading",
  "projectsHeading",
  "educationHeading",
  "servicesHeading",
  "journeyHeading",
  "contactHeading"
]);

function changeLanguage(language) {
  if (!supportedLanguages.includes(language)) return;

  currentLanguage = language;

  const dictionary = translations[language];

  document.querySelectorAll("[data-i18n]")
    .forEach(function(element) {

      const key = element.dataset.i18n;
      const value = dictionary[key];

      if (typeof value !== "string") return;

      if (htmlTranslationKeys.has(key)) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

  document.querySelectorAll("[data-i18n-placeholder]")
    .forEach(function(element) {

      const key = element.dataset.i18nPlaceholder;
      const value = dictionary[key];

      if (typeof value === "string") {
        element.placeholder = value;
      }
    });

  document.documentElement.lang = language;

  if (languageLabel) {
    languageLabel.textContent =
      language === "en" ? "नेपाली" : "English";
  }

  if (languageToggle) {
    languageToggle.setAttribute(
      "aria-label",
      language === "en"
        ? "Switch to Nepali"
        : "Switch to English"
    );
  }

  try {
    localStorage.setItem(
      "sajanPortfolioLanguage",
      language
    );
  } catch (error) {
    console.warn("Could not save language preference.");
  }

  restartTypingAnimation();
}

if (languageToggle) {
  languageToggle.addEventListener("click", function() {
    const nextLanguage =
      currentLanguage === "en" ? "ne" : "en";

    changeLanguage(nextLanguage);
  });
}


/* ========== 5. MOBILE NAVIGATION ========== */

function closeMobileMenu() {
  if (!navLinks || !menuToggle) return;

  navLinks.classList.remove("active");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  menuToggle.setAttribute(
    "aria-label",
    "Open navigation menu"
  );

  menuToggle.innerHTML =
    '<i class="fa-solid fa-bars"></i>';
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function() {

    const isOpen =
      navLinks.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.querySelectorAll("a")
    .forEach(function(link) {
      link.addEventListener(
        "click",
        closeMobileMenu
      );
    });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", function(event) {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });
}


/* ========== 6. NAVBAR SCROLL EFFECT ========== */

function updateScrollUI() {
  const scrollY = window.scrollY;

  if (header) {
    header.classList.toggle(
      "scrolled",
      scrollY > 30
    );
  }

  if (backToTop) {
    backToTop.classList.toggle(
      "visible",
      scrollY > 450
    );
  }
}

window.addEventListener(
  "scroll",
  updateScrollUI,
  { passive: true }
);


/* ========== 7. ACTIVE NAVIGATION LINKS ========== */

const navigationLinks =
  document.querySelectorAll(".nav-link");

const sections =
  document.querySelectorAll("main section[id]");

function updateActiveNavigation() {
  const scrollPosition = window.scrollY + 160;

  let activeSection = "home";

  sections.forEach(function(section) {
    if (section.offsetTop <= scrollPosition) {
      activeSection = section.id;
    }
  });

  navigationLinks.forEach(function(link) {
    const isActive =
      link.getAttribute("href") ===
      "#" + activeSection;

    link.classList.toggle("active", isActive);
  });
}

window.addEventListener(
  "scroll",
  updateActiveNavigation,
  { passive: true }
);


/* ========== 8. SCROLL REVEAL ANIMATIONS ========== */

function initializeRevealAnimations() {
  const elements =
    document.querySelectorAll(".reveal");

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    elements.forEach(function(element) {
      element.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function(entries, currentObserver) {

      entries.forEach(function(entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px 30px 0px"
    }
  );

  elements.forEach(function(element) {
    observer.observe(element);
  });
}


/* ========== 9. PROFILE IMAGE FALLBACK ========== */

function showProfileFallback() {
  if (profilePhoto) {
    profilePhoto.hidden = true;
  }

  if (profileFallback) {
    profileFallback.hidden = false;
  }
}

if (profilePhoto) {
  profilePhoto.addEventListener(
    "error",
    showProfileFallback
  );

  if (profilePhoto.complete &&
      profilePhoto.naturalWidth === 0) {
    showProfileFallback();
  }
}


/* ========== 10. CONTACT FORM ========== */


/* ========== CONTACT FORM: FORMSPREE ========== */

if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );
    const statusMessage = contactForm.querySelector(".form-note");

    const originalButtonText = submitButton
      ? submitButton.innerHTML
      : "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML =
        'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    }

    if (statusMessage) {
      statusMessage.textContent = "Sending your message...";
    }

    try {
      const response = await fetch(
        "https://formspree.io/f/mjygjkee",
        {
          method: "POST",
          body: new FormData(contactForm),
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (!response.ok) {
        throw new Error("Message submission failed.");
      }

      contactForm.reset();

      if (statusMessage) {
        statusMessage.textContent =
          "Thank you! Your message was submitted successfully.";
      }
    } catch (error) {
      if (statusMessage) {
        statusMessage.textContent =
          "Sorry, your message could not be sent. Please try again.";
      }

      console.error("Contact form error:", error);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    }
  });
}

/* ========== 11. FOOTER YEAR ========== */

const currentYear =
  document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}


/* ========== 12. INITIALIZATION ========== */

function initializePortfolio() {

  // Activate CSS reveal behavior only when JS runs.
  document.documentElement.classList.add(
    "js-enabled"
  );

  changeLanguage(currentLanguage);

  updateScrollUI();
  updateActiveNavigation();
  initializeRevealAnimations();

  console.log(
    "Sajan Khadka Portfolio initialized successfully."
  );
}

initializePortfolio();

/* ==========================================
   PREMIUM UI INTERACTIONS
========================================== */

// SCROLL PROGRESS

const scrollProgress =
    document.getElementById("scrollProgress");

function updateScrollProgress() {
    if (!scrollProgress) return;

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    scrollProgress.style.width =
        Math.min(100, Math.max(0, progress)) + "%";
}

window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateScrollProgress
);

updateScrollProgress();


// 3D PROFILE PHOTO TILT

const profileFrame =
    document.querySelector(".profile-frame");

const heroVisual =
    document.querySelector(".hero-visual");

const reduceMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

if (profileFrame && heroVisual && !reduceMotion.matches) {

    heroVisual.addEventListener(
        "pointermove",
        function(event) {

            if (event.pointerType === "touch") return;

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateY = (x - 0.5) * 16;
            const rotateX = (0.5 - y) * 16;

            profileFrame.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        }
    );

    heroVisual.addEventListener(
        "pointerleave",
        function() {
            profileFrame.style.transform =
                "rotateX(0deg) rotateY(0deg)";
        }
    );

}
