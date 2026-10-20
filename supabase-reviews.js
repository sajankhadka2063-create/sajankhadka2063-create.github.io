
"use strict";

function getReviewText(key, fallback) {
  const language =
    document.documentElement.dataset.language === "ne"
      ? "ne"
      : "en";

  const dictionary = window.translations?.[language];

  return dictionary?.[key] || fallback;
}

console.log("SAJAN SUPABASE REVIEWS JS LOADED SUCCESSFULLY");

/* =====================================================
   SAJAN KHADKA — SUPABASE CLIENT REVIEWS
   File: supabase-reviews.js
===================================================== */

(function () {

  const config = window.SUPABASE_CONFIG;

  const form = document.getElementById("clientReviewForm");
  const grid = document.getElementById("reviewsGrid");
  const emptyState = document.getElementById("reviewsEmptyState");
  const status = document.getElementById("reviewFormStatus");
  const submitBtn = document.getElementById("reviewSubmitBtn");

  if (!config || !config.url || !config.publishableKey) {
    console.error("Supabase configuration is missing.");
    return;
  }

  const apiUrl = `${config.url}/rest/v1/reviews`;

  const headers = {
    apikey: config.publishableKey,
    Authorization: `Bearer ${config.publishableKey}`
  };

  function showStatus(message, type = "") {
    if (!status) return;

    status.textContent = message;
    status.className = type;
  }

  function createReviewCard(item) {
    const card = document.createElement("article");
    card.className = "review-card";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const service = document.createElement("p");
    service.className = "review-service";
    service.textContent = item.service;

    const stars = document.createElement("div");
    stars.className = "review-stars";
    stars.setAttribute("aria-label", `${item.rating} out of 5 stars`);
    stars.textContent =
      "★".repeat(item.rating) +
      "☆".repeat(5 - item.rating);

    const message = document.createElement("p");
    message.className = "review-message";
    message.textContent = item.review;

    card.append(name, service, stars, message);

    return card;
  }

  async function loadReviews() {
    if (!grid) return;

    try {
      const url =
        `${apiUrl}?select=id,name,service,rating,review,created_at` +
        `&order=created_at.desc&limit=50`;

      const response = await fetch(url, {
        method: "GET",
        headers
      });

      if (!response.ok) {
        throw new Error(`Unable to load reviews (${response.status})`);
      }

      const reviews = await response.json();

      grid.replaceChildren();

      reviews.forEach((item) => {
        grid.appendChild(createReviewCard(item));
      });

      if (emptyState) {
        emptyState.hidden = reviews.length > 0;
        emptyState.style.display = reviews.length > 0 ? "none" : "";
      }

    } catch (error) {
      console.error("Review loading error:", error);
    }
  }

  async function submitReview(event) {
    event.preventDefault();

    if (!form || !form.reportValidity()) return;

    const name = document.getElementById("reviewName").value.trim();
    const service = document.getElementById("reviewService").value;
    const rating = Number(document.getElementById("reviewRating").value);
    const review = document.getElementById("reviewMessage").value.trim();

    if (
      name.length < 2 ||
      name.length > 100 ||
      service.length < 2 ||
      service.length > 100 ||
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5 ||
      review.length < 10 ||
      review.length > 2000
    ) {
      showStatus("Please enter valid review details.", "error");
      return;
    }

    if (submitBtn) submitBtn.disabled = true;

    showStatus(
  getReviewText("reviewSubmitting", "Submitting your review...")
);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify({
          name,
          service,
          rating,
          review
        })
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(details);
      }

      form.reset();

      showStatus(
  getReviewText(
    "reviewSuccess",
    "Thank you! Your review has been submitted and is awaiting approval."
  ),
  "success"
);

    } catch (error) {
      console.error("Review submission error:", error);

     showStatus(
  getReviewText(
    "reviewError",
    "Unable to submit your review. Please try again."
  ),
  "error"
);
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  }

  if (form) {
    form.addEventListener("submit", submitReview);
  }

  loadReviews();

})();
