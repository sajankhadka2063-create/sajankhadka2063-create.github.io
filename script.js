
/* ============================================================
   SAJAN KHADKA — COMPLETE PORTFOLIO JAVASCRIPT
   File: script.js
   Version: 4.0

   Features:
   - Mobile navigation
   - English / Nepali translation
   - Persistent language selection
   - Typing animation
   - Scroll reveal
   - Navbar effects
   - Active navigation links
   - Scroll progress
   - Back-to-top
   - Formspree contact form
   - Profile image fallback
   - Profile tilt
   - Automatic footer year
   - Dynamic graphic design gallery
   - Automatic category filters
   - Fullscreen lightbox
   - Keyboard and touch navigation
   - Genuine review rendering
   - Accessibility and reduced-motion support

   External dependencies:
   translations.js
   assets/data/designs.js

   Independent scripts:
   particles.js
   transition.js
============================================================ */

(() => {
    "use strict";

    /* ========================================================
       01. CONFIGURATION
    ======================================================== */

    const CONFIG = {
        defaultLanguage: "en",
        supportedLanguages: ["en", "ne"],
        languageStorageKey: "sajan-portfolio-language",

        typingSpeed: 75,
        deletingSpeed: 40,
        typingPause: 1600,
        typingRestartPause: 350,

        navbarScrollThreshold: 40,
        backToTopThreshold: 350,
        revealThreshold: 0.12,
        mobileBreakpoint: 900,

        galleryFallbackImage:
            "assets/images/design-placeholder.png"
    };

    /* ========================================================
       02. DOM HELPERS
    ======================================================== */

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        Array.from(root.querySelectorAll(selector));

    const on = (element, event, handler, options) => {
        if (element) {
            element.addEventListener(event, handler, options);
        }
    };

    const motionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const reducedMotion = () => motionQuery.matches;

    function safeInit(name, callback) {
        try {
            callback();
        } catch (error) {
            console.error(`[Portfolio: ${name}]`, error);
        }
    }

    function safeStorageGet(key) {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    function safeStorageSet(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch {
            // Storage may be unavailable.
        }
    }

    function escapeSelector(value) {
        if (window.CSS && typeof CSS.escape === "function") {
            return CSS.escape(value);
        }

        return value.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
    }

    /* ========================================================
       03. APPLICATION STATE
    ======================================================== */

    const state = {
        initialized: false,

        language: CONFIG.defaultLanguage,

        gallery: {
            items: [],
            visibleItems: [],
            activeCategory: "all",
            currentIndex: 0
        },

        lightbox: {
            isOpen: false,
            previousFocus: null,
            touchStartX: 0,
            previousOverflow: "",
            previousPaddingRight: ""
        },

        typing: {
            timer: null,
            phraseIndex: 0,
            characterIndex: 0,
            deleting: false
        }
    };

    /* ========================================================
       04. BUILT-IN TRANSLATIONS
       translations.js overrides matching keys.
    ======================================================== */

    const fallbackTranslations = {
        en: {
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navDesigns: "Designs",
            navEducation: "Education",
            navServices: "Services",
            navReviews: "Reviews",
            navContact: "Contact",

            heroBadge: "Learning, Designing & Building",
            heroGreeting: "Hello, I'm",
            heroDescription:
                "I'm Sajan Khadka, an aspiring Full-Stack Developer and Canva Graphic Designer from Nepal. I enjoy creating useful websites, engaging visual designs and practical digital solutions.",

            viewProjects: "Explore Projects",
            viewDesigns: "Explore Designs",
            contactMe: "Contact Me",
            connectWithMe: "Connect with me",
            floatingText: "Creative Developer",
            scrollDown: "Scroll to explore",

            aboutLabel: "01 / INTRODUCTION",
            aboutHeading: "About Me",
            aboutSubtitle:
                "A learner, creator and future developer.",
            aboutTitle:
                "Turning curiosity into real-world skills.",

            skillsLabel: "02 / SKILLS & TRAINING",
            skillsHeading: "Technical Skills",
            skillsSubtitle:
                "My technical skills, completed training and learning roadmap.",
            completedCourses: "Completed Courses & Training",
            futureSkills: "Learning Roadmap",
            courseCompleted: "Course Completed",
            inProgressStatus: "In Progress",
            plannedStatus: "Planned",

            projectsLabel: "03 / MY PROJECTS",
            projectsHeading: "Featured Projects",
            projectsSubtitle:
                "Concepts and ongoing work from my development journey.",
            projectStatus: "Concept / In Development",

            designsLabel: "04 / CREATIVE WORK",
            designsHeading: "Graphic Designs",
            designsSubtitle:
                "Explore my creative designs, including social media posts, advertisements, logos, thumbnails, invitations and branding concepts.",

            designMenuTitle: "Restaurant Menu Design",
            designMenuDesc:
                "Explore a sample restaurant menu design from my graphic design portfolio.",
            designMenuButton: "View Menu",
            designContactText:
                "Need creative designs for your business or social media?",
            designContactButton: "Let's Work Together",

            educationLabel: "05 / ACADEMICS",
            educationHeading: "My Education",
            educationSubtitle:
                "My academic background and learning journey.",

            cvLabel: "MY RESUME",
            cvHeading: "Explore My Professional Profile",
            cvDescription:
                "Learn more about my education, skills and development journey.",
            viewCV: "View CV",
            downloadCV: "Download CV",

            servicesLabel: "06 / SERVICES",
            servicesHeading: "What I Can Create",
            servicesSubtitle:
                "Creative design services and web development skills I am developing.",

            journeyLabel: "07 / GROWTH",
            journeyHeading: "My Learning Journey",
            journeySubtitle:
                "A roadmap toward becoming a professional full-stack developer.",

            reviewsLabel: "08 / FEEDBACK",
            reviewsHeading: "Client Reviews",
            reviewsSubtitle:
                "Feedback and testimonials related to my creative work.",
            reviewsEmptyTitle: "Client Reviews Coming Soon",
            reviewsEmptyDesc:
                "Genuine client feedback will be shared here as projects are completed.",

            contactLabel: "09 / GET IN TOUCH",
            contactHeading: "Let's Connect",
            contactSubtitle:
                "Have a design project, website idea or collaboration opportunity? Feel free to reach out.",
            contactInfoTitle: "Let's start a conversation.",
            contactInfoDesc:
                "I'm interested in creative collaborations, graphic design projects and meaningful technology discussions.",
            contactFormTitle: "Send Me a Message",

            formName: "Your Name",
            formEmail: "Your Email",
            formSubject: "Subject",
            formMessage: "Message",
            sendMessage: "Send Message",

            namePlaceholder: "Your name",
            emailPlaceholder: "Your email address",
            subjectPlaceholder: "What is this about?",
            messagePlaceholder: "Write your message...",

            footerText:
                "Learning. Designing. Building. Growing.",
            footerCopyright: "All rights reserved.",
            backToTop: "Back to Top",

            galleryAll: "All Designs",
            galleryEmpty: "No designs found.",
            galleryUnavailable:
                "Graphic design data is unavailable.",

            formSending: "Sending your message...",
            formSuccess:
                "Your message was sent successfully.",
            formError:
                "Unable to send your message. Please try again.",
            formConfigurationError:
                "The contact form is not configured correctly."
        },

        ne: {
            navHome: "गृहपृष्ठ",
            navAbout: "मेरो बारेमा",
            navSkills: "सीपहरू",
            navProjects: "परियोजनाहरू",
            navDesigns: "डिजाइनहरू",
            navEducation: "शिक्षा",
            navServices: "सेवाहरू",
            navReviews: "समीक्षाहरू",
            navContact: "सम्पर्क",

            heroBadge: "सिक्दै, डिजाइन गर्दै र निर्माण गर्दै",
            heroGreeting: "नमस्कार, म हुँ",
            heroDescription:
                "म साजन खड्का, नेपालबाट वेब डेभलपमेन्ट सिक्दै गरेको विद्यार्थी र क्यान्भा ग्राफिक डिजाइनर हुँ। मलाई उपयोगी वेबसाइट र आकर्षक डिजिटल डिजाइन बनाउन मन पर्छ।",

            viewProjects: "परियोजनाहरू हेर्नुहोस्",
            viewDesigns: "डिजाइनहरू हेर्नुहोस्",
            contactMe: "सम्पर्क गर्नुहोस्",
            connectWithMe: "मसँग जोडिनुहोस्",
            floatingText: "सिर्जनशील डेभलपर",
            scrollDown: "थप हेर्न तल जानुहोस्",

            aboutLabel: "०१ / परिचय",
            aboutHeading: "मेरो बारेमा",
            aboutSubtitle:
                "एक विद्यार्थी, सिर्जनशील व्यक्ति र भावी डेभलपर।",
            aboutTitle:
                "जिज्ञासालाई व्यावहारिक सीपमा बदल्दै।",

            skillsLabel: "०२ / सीप तथा तालिम",
            skillsHeading: "प्राविधिक सीपहरू",
            skillsSubtitle:
                "मेरा प्राविधिक सीप, तालिम र सिकाइ योजना।",
            completedCourses: "पूरा गरिएका तालिमहरू",
            futureSkills: "सिकाइ योजना",
            courseCompleted: "पाठ्यक्रम पूरा",
            inProgressStatus: "सिक्दै",
            plannedStatus: "योजनामा",

            projectsLabel: "०३ / मेरा परियोजनाहरू",
            projectsHeading: "प्रमुख परियोजनाहरू",
            projectsSubtitle:
                "मेरो विकास यात्राका अवधारणा र निर्माणाधीन कार्यहरू।",
            projectStatus: "अवधारणा / निर्माणाधीन",

            designsLabel: "०४ / सिर्जनात्मक कार्य",
            designsHeading: "ग्राफिक डिजाइनहरू",
            designsSubtitle:
                "सामाजिक सञ्जाल पोस्ट, विज्ञापन, लोगो, थम्बनेल, निमन्त्रणा र ब्रान्डिङ डिजाइनहरू हेर्नुहोस्।",

            designMenuTitle: "रेस्टुरेन्ट मेनु डिजाइन",
            designMenuDesc:
                "मेरो ग्राफिक डिजाइन पोर्टफोलियोको नमुना रेस्टुरेन्ट मेनु हेर्नुहोस्।",
            designMenuButton: "मेनु हेर्नुहोस्",
            designContactText:
                "तपाईंको व्यवसाय वा सामाजिक सञ्जालका लागि डिजाइन चाहिन्छ?",
            designContactButton: "सँगै काम गरौँ",

            educationLabel: "०५ / शैक्षिक विवरण",
            educationHeading: "मेरो शिक्षा",
            educationSubtitle:
                "मेरो शैक्षिक पृष्ठभूमि र सिकाइ यात्रा।",

            cvLabel: "मेरो बायोडाटा",
            cvHeading: "मेरो व्यावसायिक परिचय",
            cvDescription:
                "मेरो शिक्षा, सीप र विकास यात्राबारे थप जान्नुहोस्।",
            viewCV: "बायोडाटा हेर्नुहोस्",
            downloadCV: "डाउनलोड गर्नुहोस्",

            servicesLabel: "०६ / सेवाहरू",
            servicesHeading: "मैले प्रदान गर्ने सेवाहरू",
            servicesSubtitle:
                "सिर्जनात्मक डिजाइन सेवा र मैले विकास गरिरहेका वेब सीपहरू।",

            journeyLabel: "०७ / प्रगति",
            journeyHeading: "मेरो सिकाइ यात्रा",
            journeySubtitle:
                "व्यावसायिक फुल-स्ट्याक डेभलपर बन्ने मेरो योजना।",

            reviewsLabel: "०८ / प्रतिक्रिया",
            reviewsHeading: "ग्राहक समीक्षाहरू",
            reviewsSubtitle:
                "मेरो सिर्जनात्मक कामबारे प्राप्त प्रतिक्रिया।",
            reviewsEmptyTitle:
                "ग्राहक समीक्षाहरू चाँडै आउनेछन्",
            reviewsEmptyDesc:
                "कामहरू पूरा भएपछि वास्तविक ग्राहक प्रतिक्रिया यहाँ राखिनेछन्।",

            contactLabel: "०९ / सम्पर्क",
            contactHeading: "सम्पर्क गरौँ",
            contactSubtitle:
                "डिजाइन, वेबसाइट वा सहकार्यको प्रस्ताव छ? मलाई सम्पर्क गर्नुहोस्।",
            contactInfoTitle: "कुराकानी सुरु गरौँ।",
            contactInfoDesc:
                "म डिजाइन परियोजना, सहकार्य र प्रविधिसम्बन्धी छलफलमा रुचि राख्छु।",
            contactFormTitle: "मलाई सन्देश पठाउनुहोस्",

            formName: "तपाईंको नाम",
            formEmail: "तपाईंको इमेल",
            formSubject: "विषय",
            formMessage: "सन्देश",
            sendMessage: "सन्देश पठाउनुहोस्",

            namePlaceholder: "तपाईंको नाम",
            emailPlaceholder: "इमेल ठेगाना",
            subjectPlaceholder: "सन्देशको विषय",
            messagePlaceholder: "आफ्नो सन्देश लेख्नुहोस्...",

            footerText: "सिक्दै। डिजाइन गर्दै। निर्माण गर्दै।",
            footerCopyright: "सर्वाधिकार सुरक्षित।",
            backToTop: "माथि जानुहोस्",

            galleryAll: "सबै डिजाइन",
            galleryEmpty: "कुनै डिजाइन भेटिएन।",
            galleryUnavailable:
                "ग्राफिक डिजाइनको विवरण उपलब्ध छैन।",

            formSending: "सन्देश पठाउँदै...",
            formSuccess:
                "तपाईंको सन्देश सफलतापूर्वक पठाइयो।",
            formError:
                "सन्देश पठाउन सकिएन। फेरि प्रयास गर्नुहोस्।",
            formConfigurationError:
                "सम्पर्क फाराम सही रूपमा सेट गरिएको छैन।"
        }
    };

    /* ========================================================
       05. TRANSLATION ENGINE
    ======================================================== */

    function getExternalTranslations() {
        if (
            typeof translations !== "undefined" &&
            translations &&
            typeof translations === "object"
        ) {
            return translations;
        }

        if (
            window.portfolioTranslations &&
            typeof window.portfolioTranslations === "object"
        ) {
            return window.portfolioTranslations;
        }

        return {};
    }

    function getDictionary(language = state.language) {
        const external = getExternalTranslations();

        return {
            ...(fallbackTranslations.en || {}),
            ...(fallbackTranslations[language] || {}),
            ...(external[language] || {})
        };
    }

    function t(key, fallback = "") {
        const dictionary = getDictionary();

        return typeof dictionary[key] === "string"
            ? dictionary[key]
            : fallback;
    }

    function setTranslatedContent(element, value) {
        if (typeof value !== "string") return;

        const containsMarkup = element.children.length > 0;

        /*
           Preserve trusted static HTML such as:
           About <span>Me</span>

           Translation values are always inserted as text.
        */

        if (containsMarkup) {
            const accent = element.querySelector("span");

            if (accent && accent.parentElement === element) {
                const words = value.trim().split(/\s+/);

                if (words.length >= 2) {
                    const finalWord = words.pop();

                    element.replaceChildren(
                        document.createTextNode(
                            words.join(" ") + " "
                        ),
                        accent
                    );

                    accent.textContent = finalWord;

                    return;
                }
            }
        }

        element.textContent = value;
    }

    function applyTranslations(language = state.language) {
        if (!CONFIG.supportedLanguages.includes(language)) {
            language = CONFIG.defaultLanguage;
        }

        state.language = language;

        const dictionary = getDictionary(language);

        $$("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;

            if (!key) return;

            const value = dictionary[key];

            if (typeof value === "string") {
                setTranslatedContent(element, value);
            }
        });

        $$("[data-i18n-placeholder]").forEach((element) => {
            const key = element.dataset.i18nPlaceholder;

            if (typeof dictionary[key] === "string") {
                element.placeholder = dictionary[key];
            }
        });

        $$("[data-i18n-title]").forEach((element) => {
            const key = element.dataset.i18nTitle;

            if (typeof dictionary[key] === "string") {
                element.title = dictionary[key];
            }
        });

        $$("[data-i18n-aria-label]").forEach((element) => {
            const key = element.dataset.i18nAriaLabel;

            if (typeof dictionary[key] === "string") {
                element.setAttribute(
                    "aria-label",
                    dictionary[key]
                );
            }
        });

        const label = $("#languageLabel");

        if (label) {
            label.textContent =
                language === "en" ? "NE" : "EN";
        }

        const toggle = $("#languageToggle");

        if (toggle) {
            toggle.setAttribute(
                "aria-label",
                language === "en"
                    ? "Switch to Nepali"
                    : "Switch to English"
            );

            toggle.setAttribute(
                "aria-pressed",
                String(language === "ne")
            );
        }

        document.documentElement.lang = language;
        document.documentElement.dataset.language = language;

        saveLanguage(language);

        renderGalleryFilters();
        renderGallery();

        document.dispatchEvent(
            new CustomEvent("portfolio:languagechange", {
                detail: { language }
            })
        );
    }

    function initializeLanguageToggle() {
        const storedLanguage = safeStorageGet(
            CONFIG.languageStorageKey
        );

        if (CONFIG.supportedLanguages.includes(storedLanguage)) {
            state.language = storedLanguage;
        }

        const toggle = $("#languageToggle");

        on(toggle, "click", () => {
            const nextLanguage =
                state.language === "en" ? "ne" : "en";

            applyTranslations(nextLanguage);
        });

        applyTranslations(state.language);
    }

    /* ========================================================
       06. MOBILE NAVIGATION
    ======================================================== */

    function initializeMobileNavigation() {
        const toggle = $("#menuToggle");
        const navigation = $("#navLinks");

        if (!toggle || !navigation) return;

        function isOpen() {
            return navigation.classList.contains("active");
        }

        function setMenuOpen(open) {
            navigation.classList.toggle("active", open);
            navigation.classList.toggle("open", open);

            toggle.classList.toggle("active", open);

            toggle.setAttribute(
                "aria-expanded",
                String(open)
            );

            toggle.setAttribute(
                "aria-label",
                open
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            document.body.classList.toggle(
                "menu-open",
                open
            );

            const icon = $("i", toggle);

            if (icon) {
                icon.classList.toggle("fa-bars", !open);
                icon.classList.toggle("fa-xmark", open);
            }
        }

        on(toggle, "click", () => {
            setMenuOpen(!isOpen());
        });

        $$("a[href]", navigation).forEach((link) => {
            on(link, "click", () => {
                setMenuOpen(false);
            });
        });

        on(document, "click", (event) => {
            if (
                isOpen() &&
                !navigation.contains(event.target) &&
                !toggle.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        });

        on(document, "keydown", (event) => {
            if (event.key === "Escape" && isOpen()) {
                setMenuOpen(false);
                toggle.focus();
            }
        });

        on(window, "resize", () => {
            if (window.innerWidth > CONFIG.mobileBreakpoint) {
                setMenuOpen(false);
            }
        });

        setMenuOpen(false);
    }

    /* ========================================================
       07. TYPING ANIMATION
    ======================================================== */

    function initializeTypingAnimation() {
        const element = $("#typingText");

        if (!element) return;

        const customTexts = element.dataset.texts;

        let phrases = customTexts
            ? customTexts
                .split("|")
                .map((value) => value.trim())
                .filter(Boolean)
            : [];

        if (!phrases.length) {
            phrases = [
                "Aspiring Full-Stack Developer",
                "Web Development Enthusiast",
                "Canva Graphic Designer",
                "Creative Problem Solver",
                "Lifelong Learner"
            ];
        }

        if (reducedMotion()) {
            element.textContent = phrases[0];
            return;
        }

        const typing = state.typing;

        typing.phraseIndex = 0;
        typing.characterIndex = 0;
        typing.deleting = false;

        function tick() {
            if (!element.isConnected) return;

            const phrase = phrases[typing.phraseIndex];

            if (!typing.deleting) {
                typing.characterIndex++;

                element.textContent = phrase.slice(
                    0,
                    typing.characterIndex
                );

                if (typing.characterIndex >= phrase.length) {
                    typing.deleting = true;

                    typing.timer = window.setTimeout(
                        tick,
                        CONFIG.typingPause
                    );

                    return;
                }

                typing.timer = window.setTimeout(
                    tick,
                    CONFIG.typingSpeed
                );

                return;
            }

            typing.characterIndex--;

            element.textContent = phrase.slice(
                0,
                Math.max(0, typing.characterIndex)
            );

            if (typing.characterIndex <= 0) {
                typing.deleting = false;

                typing.phraseIndex =
                    (typing.phraseIndex + 1) % phrases.length;

                typing.timer = window.setTimeout(
                    tick,
                    CONFIG.typingRestartPause
                );

                return;
            }

            typing.timer = window.setTimeout(
                tick,
                CONFIG.deletingSpeed
            );
        }

        tick();

        on(motionQuery, "change", () => {
            if (reducedMotion()) {
                window.clearTimeout(typing.timer);
                element.textContent = phrases[0];
            }
        });
    }

    /* ========================================================
       08. SCROLL REVEAL
    ======================================================== */

    function initializeScrollReveal() {
        const elements = $$(
            ".reveal, .reveal-left, .reveal-right, " +
            ".reveal-up, [data-reveal]"
        );

        if (!elements.length) return;

        function reveal(element) {
            element.classList.add(
                "visible",
                "revealed",
                "active"
            );
        }

        if (
            reducedMotion() ||
            !("IntersectionObserver" in window)
        ) {
            elements.forEach(reveal);
            return;
        }

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    reveal(entry.target);
                    currentObserver.unobserve(entry.target);
                });
            },
            {
                threshold: CONFIG.revealThreshold,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        on(motionQuery, "change", () => {
            if (reducedMotion()) {
                elements.forEach(reveal);
                observer.disconnect();
            }
        });
    }

    /* ========================================================
       09. NAVBAR SCROLL EFFECT
    ======================================================== */

    function initializeNavbarScrollEffect() {
        const header = $("#header");

        if (!header) return;

        function updateHeader() {
            const scrolled =
                window.scrollY > CONFIG.navbarScrollThreshold;

            header.classList.toggle("scrolled", scrolled);
        }

        on(window, "scroll", updateHeader, {
            passive: true
        });

        updateHeader();
    }

    /* ========================================================
       10. ACTIVE NAVIGATION
    ======================================================== */

    function initializeActiveNavigation() {
        const links = $$(".nav-link[href^='#']");

        if (!links.length) return;

        const entries = links
            .map((link) => {
                const href = link.getAttribute("href");

                if (!href || href === "#") return null;

                const section = $(href);

                if (!section) return null;

                return {
                    link,
                    section
                };
            })
            .filter(Boolean);

        function updateActive() {
            let currentId = entries.length
                ? entries[0].section.id
                : "";

            const offset = Math.max(
                110,
                window.innerHeight * 0.35
            );

            entries.forEach(({ section }) => {
                if (
                    section.getBoundingClientRect().top <= offset
                ) {
                    currentId = section.id;
                }
            });

            entries.forEach(({ link, section }) => {
                const active = section.id === currentId;

                link.classList.toggle("active", active);

                if (active) {
                    link.setAttribute(
                        "aria-current",
                        "location"
                    );
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        }

        on(window, "scroll", updateActive, {
            passive: true
        });

        on(window, "resize", updateActive);

        updateActive();
    }

    /* ========================================================
       11. SCROLL PROGRESS
    ======================================================== */

    function initializeScrollProgress() {
        const progressBar = $("#scrollProgress");

        if (!progressBar) return;

        let scheduled = false;

        function update() {
            const documentHeight =
                document.documentElement.scrollHeight;

            const scrollable =
                documentHeight - window.innerHeight;

            const percentage = scrollable > 0
                ? (window.scrollY / scrollable) * 100
                : 0;

            progressBar.style.width =
                `${Math.min(100, Math.max(0, percentage))}%`;

            scheduled = false;
        }

        function requestUpdate() {
            if (scheduled) return;

            scheduled = true;
            window.requestAnimationFrame(update);
        }

        on(window, "scroll", requestUpdate, {
            passive: true
        });

        on(window, "resize", requestUpdate);

        update();
    }

    /* ========================================================
       12. BACK TO TOP
    ======================================================== */

    function initializeBackToTop() {
        const button = $("#backToTop");

        if (!button) return;

        function updateVisibility() {
            const visible =
                window.scrollY > CONFIG.backToTopThreshold;

            button.classList.toggle("visible", visible);
            button.classList.toggle("show", visible);

            button.disabled = !visible;

            button.setAttribute(
                "aria-hidden",
                String(!visible)
            );
        }

        on(button, "click", () => {
            window.scrollTo({
                top: 0,
                behavior: reducedMotion() ? "auto" : "smooth"
            });
        });

        on(window, "scroll", updateVisibility, {
            passive: true
        });

        updateVisibility();
    }

    /* ========================================================
       13. CONTACT FORM
    ======================================================== */

    function initializeContactForm() {
        const form = $("#contactForm");

        if (!form) return;

        const submitButton = $(
            'button[type="submit"]',
            form
        );

        const submitLabel = submitButton
            ? $("span[data-i18n='sendMessage']", submitButton)
            : null;

        let status = $(".form-note", form);

        if (!status) {
            status = document.createElement("p");
            status.className = "form-note";
            form.appendChild(status);
        }

        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");

        function setStatus(message, type = "") {
            status.textContent = message;

            status.classList.remove(
                "success",
                "error"
            );

            if (type) {
                status.classList.add(type);
            }
        }

        on(form, "submit", async (event) => {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const action = form.getAttribute("action") || "";

            if (
                !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(
                    action
                )
            ) {
                setStatus(
                    t(
                        "formConfigurationError",
                        "Contact form is not configured."
                    ),
                    "error"
                );

                return;
            }

            if (submitButton && submitButton.disabled) {
                return;
            }

            if (submitButton) {
                submitButton.disabled = true;
            }

            if (submitLabel) {
                submitLabel.textContent = t(
                    "formSending",
                    "Sending..."
                );
            }

            setStatus(
                t("formSending", "Sending your message...")
            );

            try {
                const response = await fetch(action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error(
                        `Formspree returned HTTP ${response.status}`
                    );
                }

                form.reset();

                setStatus(
                    t(
                        "formSuccess",
                        "Your message was sent successfully."
                    ),
                    "success"
                );
            } catch (error) {
                console.error(
                    "[Portfolio Contact Form]",
                    error
                );

                setStatus(
                    t(
                        "formError",
                        "Unable to send your message."
                    ),
                    "error"
                );
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                }

                if (submitLabel) {
                    submitLabel.textContent = t(
                        "sendMessage",
                        "Send Message"
                    );
                }
            }
        });
    }

    /* ========================================================
       14. PROFILE IMAGE FALLBACK
    ======================================================== */

    function initializeProfileFallback() {
        const image = $("#profilePhoto");
        const fallback = $("#profileFallback");

        if (!image) return;

        function showFallback() {
            image.hidden = true;
            image.style.display = "none";

            if (fallback) {
                fallback.hidden = false;
                fallback.style.display = "";
            }
        }

        function showImage() {
            image.hidden = false;
            image.style.display = "";

            if (fallback) {
                fallback.hidden = true;
            }
        }

        on(image, "error", showFallback);
        on(image, "load", showImage);

        if (image.complete) {
            if (image.naturalWidth > 0) {
                showImage();
            } else {
                showFallback();
            }
        }
    }

    /* ========================================================
       15. PROFILE TILT
    ======================================================== */

    function initializeProfileTilt() {
        const visual = $(".hero-visual");

        if (!visual || reducedMotion()) return;

        const frame = $(".profile-frame", visual);

        if (!frame) return;

        on(visual, "pointermove", (event) => {
            if (
                event.pointerType !== "mouse" ||
                window.innerWidth <= CONFIG.mobileBreakpoint
            ) {
                return;
            }

            const rect = visual.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const rotateY =
                ((event.clientX - centerX) / rect.width) * 8;

            const rotateX =
                ((centerY - event.clientY) / rect.height) * 8;

            frame.style.transform =
                `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        on(visual, "pointerleave", () => {
            frame.style.transform = "";
        });
    }

    /* ========================================================
       16. AUTOMATIC FOOTER YEAR
    ======================================================== */

    function initializeFooterYear() {
        const year = new Date().getFullYear();

        $$(
            "#currentYear, [data-current-year], .current-year"
        ).forEach((element) => {
            element.textContent = String(year);
        });
    }

    /* ========================================================
       17. GRAPHIC DESIGN DATA

       Supported common properties:
       id, title, category, image, description,
       software, alt, link

       Also supports:
       name, type, src, imageUrl, thumbnail, url
    ======================================================== */

    function getDesignData() {
        if (
            typeof portfolioDesigns !== "undefined" &&
            Array.isArray(portfolioDesigns)
        ) {
            return portfolioDesigns;
        }

        if (Array.isArray(window.portfolioDesigns)) {
            return window.portfolioDesigns;
        }

        return [];
    }

    function normalizeDesign(item, index) {
        const image =
            item.image ||
            item.src ||
            item.imageUrl ||
            item.thumbnail ||
            item.path ||
            "";

        return {
            id: item.id ?? index + 1,

            title:
                item.title ||
                item.name ||
                `Design ${index + 1}`,

            category:
                String(
                    item.category ||
                    item.type ||
                    "Other"
                ).trim(),

            image: String(image),

            description:
                item.description ||
                item.desc ||
                "",

            software:
                item.software ||
                item.tool ||
                "",

            alt:
                item.alt ||
                item.title ||
                item.name ||
                `Graphic design ${index + 1}`,

            link:
                item.link ||
                item.url ||
                ""
        };
    }

    function initializeGalleryData() {
        state.gallery.items = getDesignData()
            .filter(
                (item) =>
                    item &&
                    typeof item === "object"
            )
            .map(normalizeDesign);

        state.gallery.visibleItems = [
            ...state.gallery.items
        ];
    }

    /* ========================================================
       18. CATEGORY FILTER LABELS
    ======================================================== */

    function normalizeCategory(category) {
        return String(category)
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");
    }

    function getCategoryLabel(category) {
        if (category === "all") {
            return t("galleryAll", "All Designs");
        }

        const translatedLabels = {
            branding: {
                en: "Branding",
                ne: "ब्रान्डिङ"
            },

            "social-media": {
                en: "Social Media",
                ne: "सामाजिक सञ्जाल"
            },

            logos: {
                en: "Logos",
                ne: "लोगो"
            },

            "logo-design": {
                en: "Logo Design",
                ne: "लोगो डिजाइन"
            },

            posters: {
                en: "Posters",
                ne: "पोस्टर"
            },

            thumbnails: {
                en: "Thumbnails",
                ne: "थम्बनेल"
            },

            invitations: {
                en: "Invitations",
                ne: "निमन्त्रणा"
            },

            advertisements: {
                en: "Advertisements",
                ne: "विज्ञापन"
            },

            "restaurant-menu": {
                en: "Restaurant Menus",
                ne: "रेस्टुरेन्ट मेनु"
            }
        };

        const key = normalizeCategory(category);

        if (translatedLabels[key]) {
            return translatedLabels[key][state.language];
        }

        return category;
    }

    /* ========================================================
       19. AUTOMATIC GALLERY FILTERS
    ======================================================== */

    function renderGalleryFilters() {
        const container = $("#designFilters");

        if (!container) return;

        const categories = [
            ...new Set(
                state.gallery.items.map(
                    (item) => item.category
                )
            )
        ];

        container.replaceChildren();

        if (!state.gallery.items.length) return;

        const allCategories = [
            "all",
            ...categories
        ];

        allCategories.forEach((category) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "design-filter";

            button.dataset.filter = category;

            const active =
                category === state.gallery.activeCategory;

            button.classList.toggle("active", active);

            button.setAttribute(
                "aria-pressed",
                String(active)
            );

            button.textContent = getCategoryLabel(category);

            on(button, "click", () => {
                state.gallery.activeCategory = category;

                renderGalleryFilters();
                renderGallery();
            });

            container.appendChild(button);
        });
    }

    /* ========================================================
       20. GALLERY CARD CREATION
    ======================================================== */

    function createDesignCard(item, index) {
        const card = document.createElement("article");

        card.className = "design-card";
        card.dataset.category = item.category;
        card.dataset.designId = String(item.id);

        const imageButton = document.createElement("button");

        imageButton.type = "button";
        imageButton.className = "design-image-link";

        imageButton.style.border = "0";
        imageButton.style.padding = "0";
        imageButton.style.width = "100%";
        imageButton.style.background = "transparent";

        imageButton.setAttribute(
            "aria-label",
            `View ${item.title}`
        );

        const image = document.createElement("img");

        image.src = item.image || CONFIG.galleryFallbackImage;
        image.alt = item.alt;
        image.loading = "lazy";
        image.decoding = "async";

        image.addEventListener("error", () => {
            if (image.dataset.fallbackUsed === "true") {
                return;
            }

            image.dataset.fallbackUsed = "true";

            image.src = CONFIG.galleryFallbackImage;
        });

        imageButton.appendChild(image);

        on(imageButton, "click", () => {
            openLightbox(index);
        });

        const info = document.createElement("div");

        info.className = "design-info";

        const category = document.createElement("span");

        category.className = "design-category";
        category.textContent = getCategoryLabel(
            item.category
        );

        const title = document.createElement("h3");

        title.textContent = item.title;

        info.appendChild(category);
        info.appendChild(title);

        if (item.description) {
            const description = document.createElement("p");

            description.textContent = item.description;

            info.appendChild(description);
        }

        if (item.software) {
            const software = document.createElement("span");

            software.className = "design-software";

            software.textContent = item.software;

            info.appendChild(software);
        }

        card.appendChild(imageButton);
        card.appendChild(info);

        return card;
    }

    /* ========================================================
       21. RENDER GRAPHIC DESIGN GALLERY
    ======================================================== */

    function renderGallery() {
        const container = $("#designsGrid");

        if (!container) return;

        const items = state.gallery.items;

        container.replaceChildren();

        if (!items.length) {
            const message = document.createElement("p");

            message.className = "section-footnote";

            message.textContent = t(
                "galleryUnavailable",
                "Graphic design data is unavailable."
            );

            container.appendChild(message);

            return;
        }

        const selectedCategory =
            state.gallery.activeCategory;

        const filtered = selectedCategory === "all"
            ? items
            : items.filter(
                (item) =>
                    item.category === selectedCategory
            );

        state.gallery.visibleItems = filtered;

        if (!filtered.length) {
            const message = document.createElement("p");

            message.className = "section-footnote";

            message.textContent = t(
                "galleryEmpty",
                "No designs found."
            );

            container.appendChild(message);

            return;
        }

        const fragment = document.createDocumentFragment();

        filtered.forEach((item, index) => {
            fragment.appendChild(
                createDesignCard(item, index)
            );
        });

        container.appendChild(fragment);
    }

    /* ========================================================
       22. LIGHTBOX ELEMENTS
    ======================================================== */

    function getLightboxElements() {
        const root = $("#designLightbox");

        if (!root) return null;

        return {
            root,
            image: $("#lightboxImage", root),
            caption: $("#lightboxCaption", root),
            close: $("#lightboxClose", root),
            previous: $("#lightboxPrev", root),
            next: $("#lightboxNext", root)
        };
    }

    /* ========================================================
       23. UPDATE LIGHTBOX
    ======================================================== */

    function updateLightbox() {
        const elements = getLightboxElements();

        if (!elements) return;

        const items = state.gallery.visibleItems;

        if (!items.length) return;

        const item = items[state.gallery.currentIndex];

        if (!item) return;

        if (elements.image) {
            elements.image.src =
                item.image || CONFIG.galleryFallbackImage;

            elements.image.alt = item.alt;
        }

        if (elements.caption) {
            elements.caption.textContent = item.title;
        }

        const multiple = items.length > 1;

        if (elements.previous) {
            elements.previous.hidden = !multiple;
        }

        if (elements.next) {
            elements.next.hidden = !multiple;
        }
    }

    /* ========================================================
       24. OPEN LIGHTBOX
    ======================================================== */

    function openLightbox(index = 0) {
        const elements = getLightboxElements();

        if (!elements) return;

        const items = state.gallery.visibleItems;

        if (!items.length) return;

        state.gallery.currentIndex =
            ((index % items.length) + items.length) %
            items.length;

        state.lightbox.previousFocus =
            document.activeElement;

        state.lightbox.previousOverflow =
            document.body.style.overflow;

        state.lightbox.previousPaddingRight =
            document.body.style.paddingRight;

        state.lightbox.isOpen = true;

        updateLightbox();

        elements.root.hidden = false;

        elements.root.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add("lightbox-open");
        document.body.style.overflow = "hidden";

        if (elements.close) {
            elements.close.focus();
        }
    }

    /* ========================================================
       25. CLOSE LIGHTBOX
    ======================================================== */

    function closeLightbox() {
        const elements = getLightboxElements();

        if (!elements || !state.lightbox.isOpen) return;

        elements.root.hidden = true;

        elements.root.setAttribute(
            "aria-hidden",
            "true"
        );

        state.lightbox.isOpen = false;

        document.body.classList.remove("lightbox-open");

        document.body.style.overflow =
            state.lightbox.previousOverflow;

        document.body.style.paddingRight =
            state.lightbox.previousPaddingRight;

        const previous = state.lightbox.previousFocus;

        if (
            previous &&
            previous.isConnected &&
            typeof previous.focus === "function"
        ) {
            previous.focus();
        }

        state.lightbox.previousFocus = null;
    }

    /* ========================================================
       26. LIGHTBOX NAVIGATION
    ======================================================== */

    function showNextImage() {
        const items = state.gallery.visibleItems;

        if (!items.length) return;

        state.gallery.currentIndex =
            (state.gallery.currentIndex + 1) %
            items.length;

        updateLightbox();
    }

    function showPreviousImage() {
        const items = state.gallery.visibleItems;

        if (!items.length) return;

        state.gallery.currentIndex =
            (
                state.gallery.currentIndex -
                1 +
                items.length
            ) % items.length;

        updateLightbox();
    }

    /* ========================================================
       27. INITIALIZE LIGHTBOX
    ======================================================== */

    function initializeLightbox() {
        const elements = getLightboxElements();

        if (!elements) return;

        elements.root.hidden = true;

        on(elements.close, "click", closeLightbox);

        on(elements.previous, "click", showPreviousImage);

        on(elements.next, "click", showNextImage);

        on(elements.root, "click", (event) => {
            if (event.target === elements.root) {
                closeLightbox();
            }
        });

        on(document, "keydown", (event) => {
            if (!state.lightbox.isOpen) return;

            if (event.key === "Escape") {
                event.preventDefault();
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                showPreviousImage();
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                showNextImage();
            }

            if (event.key === "Tab") {
                const focusable = $$(
                    "button:not([disabled]):not([hidden]), " +
                    "a[href]:not([hidden])",
                    elements.root
                ).filter((element) => {
                    return element.getClientRects().length > 0;
                });

                if (!focusable.length) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (
                    event.shiftKey &&
                    document.activeElement === first
                ) {
                    event.preventDefault();
                    last.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === last
                ) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        on(elements.root, "touchstart", (event) => {
            if (!event.changedTouches.length) return;

            state.lightbox.touchStartX =
                event.changedTouches[0].screenX;
        }, { passive: true });

        on(elements.root, "touchend", (event) => {
            if (!event.changedTouches.length) return;

            const endX =
                event.changedTouches[0].screenX;

            const difference =
                endX - state.lightbox.touchStartX;

            if (Math.abs(difference) < 60) return;

            if (difference > 0) {
                showPreviousImage();
            } else {
                showNextImage();
            }
        }, { passive: true });
    }

    /* ========================================================
       28. OPTIONAL GENUINE REVIEWS
    ======================================================== */

    function getReviewsData() {
        if (
            typeof portfolioReviews !== "undefined" &&
            Array.isArray(portfolioReviews)
        ) {
            return portfolioReviews;
        }

        if (Array.isArray(window.portfolioReviews)) {
            return window.portfolioReviews;
        }

        return [];
    }

    function initializeReviews() {
        const container = $("#reviewsGrid");
        const emptyState = $(".reviews-empty-card");

        if (!container) return;

        const reviews = getReviewsData();

        container.replaceChildren();

        if (!reviews.length) {
            if (emptyState) {
                emptyState.hidden = false;
            }

            return;
        }

        if (emptyState) {
            emptyState.hidden = true;
        }

        reviews.forEach((review) => {
            if (!review || typeof review !== "object") {
                return;
            }

            const card = document.createElement("article");

            card.className = "review-card";

            const message = document.createElement("p");

            message.textContent =
                review.message ||
                review.text ||
                "";

            const author = document.createElement("h3");

            author.textContent =
                review.name ||
                "Client";

            card.appendChild(message);
            card.appendChild(author);

            if (review.role) {
                const role = document.createElement("p");

                role.className = "review-role";
                role.textContent = review.role;

                card.appendChild(role);
            }

            container.appendChild(card);
        });
    }

    /* ========================================================
       29. SMOOTH ANCHOR NAVIGATION
    ======================================================== */

    function initializeSmoothScrolling() {
        $$('a[href^="#"]').forEach((link) => {
            on(link, "click", (event) => {
                const href = link.getAttribute("href");

                if (!href || href === "#") return;

                const targetId = href.substring(1);

                const target = document.getElementById(
                    targetId
                );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: reducedMotion()
                        ? "auto"
                        : "smooth",
                    block: "start"
                });

                if (
                    window.history &&
                    window.history.replaceState
                ) {
                    window.history.replaceState(
                        null,
                        "",
                        href
                    );
                }
            });
        });
    }

    /* ========================================================
       30. ACCESSIBILITY AND EXTERNAL LINKS
    ======================================================== */

    function initializeAccessibility() {
        $$("img").forEach((image) => {
            if (!image.hasAttribute("alt")) {
                image.setAttribute("alt", "");
            }

            if (!image.hasAttribute("decoding")) {
                image.decoding = "async";
            }

            if (
                !image.hasAttribute("loading") &&
                !image.closest(".hero")
            ) {
                image.loading = "lazy";
            }
        });

        $$('a[target="_blank"]').forEach((link) => {
            const rel = new Set(
                (link.getAttribute("rel") || "")
                    .split(/\s+/)
                    .filter(Boolean)
            );

            rel.add("noopener");
            rel.add("noreferrer");

            link.setAttribute(
                "rel",
                [...rel].join(" ")
            );
        });
    }

    /* ========================================================
       31. INITIALIZE ALL FEATURES
    ======================================================== */

    function initializePortfolio() {
        if (state.initialized) return;

        state.initialized = true;

        safeInit(
            "Gallery Data",
            initializeGalleryData
        );

        safeInit(
            "Language",
            initializeLanguageToggle
        );

        safeInit(
            "Mobile Navigation",
            initializeMobileNavigation
        );

        safeInit(
            "Typing Animation",
            initializeTypingAnimation
        );

        safeInit(
            "Scroll Reveal",
            initializeScrollReveal
        );

        safeInit(
            "Navbar Effect",
            initializeNavbarScrollEffect
        );

        safeInit(
            "Active Navigation",
            initializeActiveNavigation
        );

        safeInit(
            "Scroll Progress",
            initializeScrollProgress
        );

        safeInit(
            "Back To Top",
            initializeBackToTop
        );

        safeInit(
            "Contact Form",
            initializeContactForm
        );

        safeInit(
            "Profile Fallback",
            initializeProfileFallback
        );

        safeInit(
            "Profile Tilt",
            initializeProfileTilt
        );

        safeInit(
            "Footer Year",
            initializeFooterYear
        );

        safeInit(
            "Lightbox",
            initializeLightbox
        );

        safeInit(
            "Reviews",
            initializeReviews
        );

        safeInit(
            "Smooth Scrolling",
            initializeSmoothScrolling
        );

        safeInit(
            "Accessibility",
            initializeAccessibility
        );

        console.info(
            "[Sajan Portfolio] Version 4.0 initialized."
        );

        console.info(
            `[Sajan Portfolio] ${state.gallery.items.length} designs loaded.`
        );
    }

    /* ========================================================
       32. SAFE STARTUP
    ======================================================== */

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializePortfolio,
            { once: true }
        );
    } else {
        initializePortfolio();
    }

})();
