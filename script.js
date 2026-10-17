
/* =========================================================
   SAJAN KHADKA — PORTFOLIO JAVASCRIPT
   Features:
   1. Mobile navigation
   2. English / Nepali language switching
   3. Typing animation
   4. Scroll reveal animations
   5. Navbar scroll effect
   6. Active navigation link
   7. Back-to-top button
   8. Contact form submission
   9. Profile image fallback
   10. Scroll progress indicator
   11. Profile tilt effect
   12. Footer year
========================================================= */

"use strict";

/* =========================================================
   1. SELECT HTML ELEMENTS
========================================================= */

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const languageToggle = document.getElementById("languageToggle");
const languageLabel = document.getElementById("languageLabel");
const typingText = document.getElementById("typingText");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");
const profilePhoto = document.getElementById("profilePhoto");
const profileFallback = document.getElementById("profileFallback");
const scrollProgress = document.getElementById("scrollProgress");
const currentYear = document.getElementById("currentYear");

/* =========================================================
   2. LANGUAGE SETTINGS
========================================================= */

const supportedLanguages = ["en", "ne"];

let currentLanguage = "en";

try {
    const savedLanguage = localStorage.getItem("sajanPortfolioLanguage");

    if (supportedLanguages.includes(savedLanguage)) {
        currentLanguage = savedLanguage;
    }
} catch (error) {
    console.warn("Language preference could not be loaded.", error);
}

/* =========================================================
   3. TYPING ANIMATION
========================================================= */

let typingIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let typingTimer = null;

function getTypingTexts() {
    if (
        typeof translations === "undefined" ||
        !translations[currentLanguage] ||
        !Array.isArray(translations[currentLanguage].typingTexts)
    ) {
        return [
            "Aspiring Full-Stack Developer",
            "Web Development Enthusiast",
            "Creative Problem Solver"
        ];
    }

    return translations[currentLanguage].typingTexts;
}

function typeEffect() {
    if (!typingText) {
        return;
    }

    const texts = getTypingTexts();

    if (texts.length === 0) {
        typingText.textContent = "";
        return;
    }

    if (typingIndex >= texts.length) {
        typingIndex = 0;
    }

    const currentText = texts[typingIndex];

    if (!isDeleting) {
        characterIndex++;

        typingText.textContent = currentText.substring(
            0,
            characterIndex
        );

        if (characterIndex >= currentText.length) {
            isDeleting = true;

            typingTimer = setTimeout(typeEffect, 1500);
            return;
        }

        typingTimer = setTimeout(typeEffect, 75);
    } else {
        characterIndex--;

        typingText.textContent = currentText.substring(
            0,
            characterIndex
        );

        if (characterIndex <= 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % texts.length;

            typingTimer = setTimeout(typeEffect, 350);
            return;
        }

        typingTimer = setTimeout(typeEffect, 35);
    }
}

function restartTypingAnimation() {
    if (typingTimer) {
        clearTimeout(typingTimer);
    }

    typingIndex = 0;
    characterIndex = 0;
    isDeleting = false;

    if (typingText) {
        typingText.textContent = "";
        typingTimer = setTimeout(typeEffect, 300);
    }
}

/* =========================================================
   4. LANGUAGE SWITCHING
   Requires translations.js to load before script.js.
========================================================= */

const trustedHTMLKeys = [
    "aboutHeading",
    "skillsHeading",
    "projectsHeading",
    "educationHeading",
    "servicesHeading",
    "journeyHeading",
    "contactHeading"
];

function changeLanguage(language) {
    if (!supportedLanguages.includes(language)) {
        language = "en";
    }

    currentLanguage = language;

    try {
        localStorage.setItem(
            "sajanPortfolioLanguage",
            currentLanguage
        );
    } catch (error) {
        console.warn("Language preference could not be saved.", error);
    }

    document.documentElement.lang = currentLanguage;

    if (
        typeof translations !== "undefined" &&
        translations[currentLanguage]
    ) {
        const languageData = translations[currentLanguage];

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");

            if (!Object.prototype.hasOwnProperty.call(languageData, key)) {
                return;
            }

            const translatedText = languageData[key];

            if (
                trustedHTMLKeys.includes(key) &&
                typeof translatedText === "string"
            ) {
                element.innerHTML = translatedText;
            } else {
                element.textContent = translatedText;
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.getAttribute("data-i18n-placeholder");

            if (
                Object.prototype.hasOwnProperty.call(languageData, key)
            ) {
                element.setAttribute(
                    "placeholder",
                    languageData[key]
                );
            }
        });

        document.querySelectorAll("[data-i18n-title]").forEach((element) => {
            const key = element.getAttribute("data-i18n-title");

            if (
                Object.prototype.hasOwnProperty.call(languageData, key)
            ) {
                element.setAttribute("title", languageData[key]);
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            const key = element.getAttribute("data-i18n-aria-label");

            if (
                Object.prototype.hasOwnProperty.call(languageData, key)
            ) {
                element.setAttribute(
                    "aria-label",
                    languageData[key]
                );
            }
        });
    }

    if (languageLabel) {
        languageLabel.textContent =
            currentLanguage === "en" ? "NE" : "EN";
    }

    if (languageToggle) {
        languageToggle.setAttribute(
            "aria-label",
            currentLanguage === "en"
                ? "Switch language to Nepali"
                : "Switch language to English"
        );
    }

    restartTypingAnimation();
}

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        const nextLanguage =
            currentLanguage === "en" ? "ne" : "en";

        changeLanguage(nextLanguage);
    });
}

/* =========================================================
   5. MOBILE NAVIGATION
========================================================= */

function closeMobileMenu() {
    if (navLinks) {
        navLinks.classList.remove("active");
    }

    if (menuToggle) {
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    document.body.classList.remove("menu-open");
}

function toggleMobileMenu() {
    if (!navLinks || !menuToggle) {
        return;
    }

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    document.body.classList.toggle("menu-open", isOpen);
}

if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
}

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileMenu();
    }
});

document.addEventListener("click", (event) => {
    if (!navLinks || !menuToggle) {
        return;
    }

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMobileMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});

/* =========================================================
   6. NAVBAR, BACK-TO-TOP AND SCROLL PROGRESS
========================================================= */

function updateScrollUI() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (header) {
        header.classList.toggle("scrolled", scrollY > 40);
    }

    if (backToTop) {
        backToTop.classList.toggle("visible", scrollY > 450);
    }

    if (scrollProgress) {
        const scrollableHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            scrollableHeight > 0
                ? (scrollY / scrollableHeight) * 100
                : 0;

        scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    }
}

window.addEventListener("scroll", updateScrollUI, {
    passive: true
});

window.addEventListener("resize", updateScrollUI);

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =========================================================
   7. ACTIVE NAVIGATION LINK
========================================================= */

function updateActiveNavLink() {
    const sections = document.querySelectorAll("main section[id]");
    const navItems = document.querySelectorAll(".nav-link");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });

    navItems.forEach((link) => {
        const href = link.getAttribute("href");

        const isActive =
            href === `#${currentSection}` &&
            currentSection !== "";

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveNavLink, {
    passive: true
});

/* =========================================================
   8. SCROLL REVEAL ANIMATIONS
========================================================= */

function initializeRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}

/* =========================================================
   9. PROFILE PHOTO FALLBACK
========================================================= */

function showProfileFallback() {
    if (profilePhoto) {
        profilePhoto.style.display = "none";
    }

    if (profileFallback) {
        profileFallback.style.display = "flex";
    }
}

if (profilePhoto) {
    profilePhoto.addEventListener("error", showProfileFallback);

    if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
        showProfileFallback();
    }
}

/* =========================================================
   10. PROFILE TILT EFFECT
========================================================= */

function initializeProfileTilt() {
    const profileFrame = document.querySelector(".profile-frame");
    const heroVisual = document.querySelector(".hero-visual");

    if (!profileFrame || !heroVisual) {
        return;
    }

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
        return;
    }

    if (window.matchMedia("(pointer: coarse)").matches) {
        return;
    }

    heroVisual.addEventListener("mousemove", (event) => {
        const rect = heroVisual.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = ((centerY - y) / centerY) * 5;

        profileFrame.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
        profileFrame.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
}

/* =========================================================
   11. CONTACT FORM
   Form endpoint: Formspree
========================================================= */

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"], input[type="submit"]'
        );

        const formNote = contactForm.querySelector(".form-note");

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const formAction = contactForm.getAttribute("action");

        if (
            !formAction ||
            formAction.includes("YOUR_FORM_ID") ||
            !formAction.includes("formspree.io")
        ) {
            if (formNote) {
                formNote.textContent =
                    "The contact form is not configured yet. Please contact me through WhatsApp or email.";
                formNote.classList.add("error");
            }

            return;
        }

        const originalButtonText = submitButton
            ? submitButton.textContent
            : "";

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        if (formNote) {
            formNote.textContent = "";
            formNote.classList.remove("success", "error");
        }

        try {
            const response = await fetch(formAction, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            contactForm.reset();

            if (formNote) {
                formNote.textContent =
                    currentLanguage === "ne"
                        ? "धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।"
                        : "Thank you! Your message was submitted successfully.";

                formNote.classList.add("success");
            }
        } catch (error) {
            console.error("Contact form error:", error);

            if (formNote) {
                formNote.textContent =
                    currentLanguage === "ne"
                        ? "सन्देश पठाउन सकिएन। कृपया WhatsApp वा email बाट सम्पर्क गर्नुहोस्।"
                        : "Your message could not be sent. Please contact me through WhatsApp or email.";

                formNote.classList.add("error");
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }
    });
}

/* =========================================================
   12. FOOTER YEAR
========================================================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* =========================================================
   13. OPTIONAL CARD HOVER EFFECT
========================================================= */

function initializeCardEffects() {
    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .service-card, .education-card"
    );

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });
}

/* =========================================================
   14. PAGE INITIALIZATION
========================================================= */

function initializePortfolio() {
    changeLanguage(currentLanguage);

    updateScrollUI();
    updateActiveNavLink();

    initializeRevealAnimations();
    initializeProfileTilt();
    initializeCardEffects();

    if (typingText) {
        restartTypingAnimation();
    }
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializePortfolio
    );
} else {
    initializePortfolio();
}
