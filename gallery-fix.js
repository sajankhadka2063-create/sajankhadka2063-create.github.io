
"use strict";

/* ==========================================================
   SAJAN KHADKA — GALLERY & REVIEWS FIX
   File: gallery-fix.js

   Works with:
   - index.html
   - assets/data/designs.js
   - translations.js

   Features:
   - Render all 31 designs
   - Seven category filters
   - English / Nepali titles
   - Image lightbox
   - Previous / Next navigation
   - Keyboard controls
   - Review empty state
   - Language change synchronization
========================================================== */

(function () {

  const $ = selector => document.querySelector(selector);

  let activeCategory = "all";
  let visibleDesigns = [];
  let activeIndex = 0;
  let previousFocus = null;

  function getLanguage() {
    const language = document.documentElement.lang;

    return language === "ne" ? "ne" : "en";
  }

  function getText(key, fallback) {
    const language = getLanguage();

    if (window.translations?.[language]?.[key]) {
      return window.translations[language][key];
    }

    return fallback;
  }

  function getDesigns() {
    return Array.isArray(window.portfolioDesigns)
      ? window.portfolioDesigns
      : [];
  }

  function getTitle(design) {
    return getLanguage() === "ne"
      ? design.titleNe || design.titleEn || design.title
      : design.titleEn || design.title;
  }

  function getDescription(design) {
    return getLanguage() === "ne"
      ? design.descriptionNe || design.descriptionEn || ""
      : design.descriptionEn || design.description || "";
  }

  function getCategoryName(category) {
    const categories = {
      branding: "designBranding",
      editorial: "designEditorial",
      festivals: "designFestivals",
      invitations: "designInvitations",
      logos: "designLogos",
      "social-media": "designSocialMedia",
      thumbnails: "designThumbnails"
    };

    const fallback = category
      .replaceAll("-", " ")
      .replace(/\b\w/g, letter => letter.toUpperCase());

    return getText(categories[category], fallback);
  }

  /* ========================================================
     FILTER BUTTONS
  ======================================================== */

  function renderFilters() {
    const container = $("#designFilters");

    if (!container) return;

    const designs = getDesigns();

    const categories = [
      ...new Set(designs.map(design => design.category))
    ];

    container.replaceChildren();

    const allCategories = ["all", ...categories];

    allCategories.forEach(category => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "design-filter";

      const count = category === "all"
        ? designs.length
        : designs.filter(
            design => design.category === category
          ).length;

      const label = category === "all"
        ? getText("designAll", "All Designs")
        : getCategoryName(category);

      button.textContent = `${label} (${count})`;

      const isActive = category === activeCategory;

      button.classList.toggle("active", isActive);
      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );

      button.addEventListener("click", () => {
        activeCategory = category;

        renderFilters();
        renderGallery();
      });

      container.appendChild(button);
    });
  }

  /* ========================================================
     GALLERY
  ======================================================== */

  function renderGallery() {
    const container = $("#designsGrid");

    if (!container) return;

    const designs = getDesigns();

    visibleDesigns = activeCategory === "all"
      ? designs
      : designs.filter(
          design => design.category === activeCategory
        );

    container.replaceChildren();

    if (!visibleDesigns.length) {
      const message = document.createElement("p");

      message.className = "gallery-empty";

      message.textContent = designs.length
        ? getText(
            "designNoResults",
            "No designs found in this category."
          )
        : getText(
            "galleryUnavailable",
            "Graphic design data is unavailable."
          );

      container.appendChild(message);
      return;
    }

    visibleDesigns.forEach((design, index) => {
      const card = document.createElement("article");

      card.className = "design-card";
      card.style.opacity = "1";
      card.style.visibility = "visible";

      const imageButton = document.createElement("button");

      imageButton.type = "button";
      imageButton.className = "design-image-link";
      imageButton.style.width = "100%";
      imageButton.style.padding = "0";
      imageButton.style.border = "0";
      imageButton.style.background = "transparent";

      imageButton.setAttribute(
        "aria-label",
        `${getText("designView", "View Design")}: ${getTitle(design)}`
      );

      const image = document.createElement("img");

      image.src = design.image;
      image.alt = design.alt || getTitle(design);
      image.loading = "lazy";
      image.decoding = "async";

      image.onerror = function () {
        this.onerror = null;
        this.style.objectFit = "contain";
        this.alt = `Image unavailable: ${getTitle(design)}`;

        console.warn(
          "[Gallery] Image not found:",
          design.image
        );
      };

      imageButton.appendChild(image);

      imageButton.addEventListener("click", () => {
        openLightbox(index);
      });

      const info = document.createElement("div");
      info.className = "design-info";

      const category = document.createElement("span");
      category.className = "design-category";
      category.textContent = getCategoryName(design.category);

      const title = document.createElement("h3");
      title.textContent = getTitle(design);

      const description = document.createElement("p");
      description.textContent = getDescription(design);

      const software = document.createElement("span");
      software.className = "design-software";
      software.textContent = design.software || "Canva";

      info.append(
        category,
        title,
        description,
        software
      );

      card.append(imageButton, info);
      container.appendChild(card);
    });

    console.info(
      `[Gallery Fix] ${visibleDesigns.length} designs rendered.`
    );
  }

  /* ========================================================
     LIGHTBOX
  ======================================================== */

  function updateLightbox() {
    const design = visibleDesigns[activeIndex];

    if (!design) return;

    const image = $("#lightboxImage");
    const caption = $("#lightboxCaption");

    if (image) {
      image.src = design.image;
      image.alt = getTitle(design);
    }

    if (caption) {
      caption.textContent =
        `${getTitle(design)} — ${getCategoryName(design.category)}`;
    }
  }

  function openLightbox(index) {
    const lightbox = $("#designLightbox");

    if (!lightbox || !visibleDesigns[index]) return;

    previousFocus = document.activeElement;
    activeIndex = index;

    updateLightbox();

    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");

    $("#lightboxClose")?.focus();
  }

  function closeLightbox() {
    const lightbox = $("#designLightbox");

    if (!lightbox) return;

    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    previousFocus?.focus?.();
  }

  function moveLightbox(direction) {
    if (!visibleDesigns.length) return;

    activeIndex =
      (activeIndex + direction + visibleDesigns.length) %
      visibleDesigns.length;

    updateLightbox();
  }

  function initializeLightbox() {
    $("#lightboxClose")?.addEventListener(
      "click",
      closeLightbox
    );

    $("#lightboxPrev")?.addEventListener(
      "click",
      () => moveLightbox(-1)
    );

    $("#lightboxNext")?.addEventListener(
      "click",
      () => moveLightbox(1)
    );

    $("#designLightbox")?.addEventListener(
      "click",
      event => {
        if (event.target.id === "designLightbox") {
          closeLightbox();
        }
      }
    );

    document.addEventListener("keydown", event => {
      const lightbox = $("#designLightbox");

      if (!lightbox || lightbox.hidden) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        moveLightbox(-1);
      }

      if (event.key === "ArrowRight") {
        moveLightbox(1);
      }
    });
  }

  /* ========================================================
     REVIEWS
  ======================================================== */

  function initializeReviews() {
    const grid = $("#reviewsGrid");
    const emptyState = $(".reviews-empty-card");

    if (!grid) return;

    const reviews = Array.isArray(window.portfolioReviews)
      ? window.portfolioReviews
      : [];

    if (!reviews.length) {
      if (emptyState) {
        emptyState.hidden = false;
        emptyState.classList.add("visible");
        emptyState.style.opacity = "1";
        emptyState.style.visibility = "visible";
        emptyState.style.transform = "none";
      }

      return;
    }

    if (emptyState) {
      emptyState.hidden = true;
    }

    // Existing review rendering remains managed by script.js.
    // This fix does not invent or publish testimonials.
  }

  /* ========================================================
     LANGUAGE UPDATE
  ======================================================== */

  function refreshLanguage() {
    renderFilters();
    renderGallery();

    const lightbox = $("#designLightbox");

    if (lightbox && !lightbox.hidden) {
      updateLightbox();
    }
  }

  /* ========================================================
     INITIALIZATION
  ======================================================== */

  function initialize() {
    renderFilters();
    renderGallery();
    initializeLightbox();
    initializeReviews();

    const languageToggle = $("#languageToggle");

    if (languageToggle) {
      languageToggle.addEventListener(
        "click",
        () => {
          // Wait until the existing language handler finishes.
          setTimeout(refreshLanguage, 0);
        }
      );
    }

    const observer = new MutationObserver(() => {
      refreshLanguage();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"]
    });

    console.info(
      "[Gallery Fix] Initialized.",
      {
        designs: getDesigns().length,
        categories: new Set(
          getDesigns().map(design => design.category)
        ).size
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      { once: true }
    );
  } else {
    initialize();
  }

})();
