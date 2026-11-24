/**
 * render.js
 * Renders timeline and publications from SITE_DATA (data/site-data.js).
 */
(function () {
  "use strict";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatAuthors(authorsStr) {
    const safe = escapeHtml(authorsStr);
    const target = escapeHtml(SITE_DATA.highlightAuthor);
    return safe.replace(target, `<strong class="author-self">${target}</strong>`);
  }

  function renderLinkPills(links) {
    const active = (links || []).filter((l) => l.url && l.url.trim() !== "" && l.url.trim() !== "#");
    if (!active.length) return "";
    return active
      .map(
        (l) =>
          `<a class="pill-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            l.label
          )}</a>`
      )
      .join("");
  }

  function renderMedia(pub) {
    const src = pub.media || "";
    const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

    if (isVideo) {
      return `
        <video class="pub-media-el" autoplay loop muted playsinline preload="metadata" aria-label="${escapeHtml(pub.title)} animation">
          <source src="${escapeHtml(src)}" type="video/${src.split(".").pop().toLowerCase()}">
        </video>
      `;
    }

    return `
      <img
        class="pub-media-el"
        src="${escapeHtml(src)}"
        alt="Visual teaser for ${escapeHtml(pub.title)}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="pub-media-placeholder" style="display:none;">
        <span>Add teaser GIF or image at</span>
        <code>${escapeHtml(src)}</code>
      </div>
    `;
  }

  // --- Home Page: Career Timeline ---
  function renderTimeline() {
    const container = document.getElementById("timeline-list");
    if (!container) return;

    container.innerHTML = SITE_DATA.timeline
      .map(
        (item) => `
        <li class="timeline-item">
          <div class="timeline-dot ${item.category === "education" ? "is-edu" : ""}" aria-hidden="true"></div>
          <div class="timeline-meta">
            <span class="timeline-period">${escapeHtml(item.period)}</span>
            <span class="timeline-location">${escapeHtml(item.location)}</span>
          </div>
          <div class="timeline-body">
            <h3 class="timeline-role">${escapeHtml(item.role)} <span class="timeline-org">· ${escapeHtml(item.org)}</span></h3>
            <p class="timeline-summary">${escapeHtml(item.summary)}</p>
          </div>
        </li>
      `
      )
      .join("");
  }

  // --- Home Page: Compact Publication List ---
  function renderHomePublications() {
    const container = document.getElementById("home-publications-list");
    if (!container) return;

    container.innerHTML = SITE_DATA.publications
      .map(
        (pub) => `
        <li class="pub-compact-item">
          <div class="pub-compact-year">${escapeHtml(pub.year)}</div>
          <div class="pub-compact-content">
            <a class="pub-compact-title" href="publications.html#${escapeHtml(pub.id)}">${escapeHtml(pub.title)}</a>
            <p class="pub-compact-authors">${formatAuthors(pub.authors)}</p>
            <p class="pub-compact-venue">${escapeHtml(pub.venue)}</p>
            <div class="pub-links">
              ${renderLinkPills(pub.links)}
              <a class="pill-link pill-ghost" href="publications.html#${escapeHtml(pub.id)}">Details &amp; Demo →</a>
            </div>
          </div>
        </li>
      `
      )
      .join("");
  }

  // --- Publications Page: Visual Cards with GIFs ---
  function renderPublicationCards(filterType) {
    const container = document.getElementById("publications-grid");
    if (!container) return;

    const list =
      !filterType || filterType === "all"
        ? SITE_DATA.publications
        : SITE_DATA.publications.filter((p) => p.type === filterType);

    container.innerHTML = list
      .map(
        (pub) => `
        <article class="pub-card" id="${escapeHtml(pub.id)}">
          <div class="pub-media">
            ${renderMedia(pub)}
          </div>
          <div class="pub-info">
            <div class="pub-badges">
              <span class="badge badge-year">${escapeHtml(pub.year)}</span>
              <span class="badge badge-type">${escapeHtml(pub.typeLabel)}</span>
            </div>
            <h2 class="pub-title">${escapeHtml(pub.title)}</h2>
            <p class="pub-authors">${formatAuthors(pub.authors)}</p>
            <p class="pub-venue">${escapeHtml(pub.venue)}</p>
            <p class="pub-desc">${escapeHtml(pub.description)}</p>
            ${
              pub.tags && pub.tags.length
                ? `<div class="pub-tags">${pub.tags
                    .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
                    .join("")}</div>`
                : ""
            }
            <div class="pub-links">${renderLinkPills(pub.links)}</div>
          </div>
        </article>
      `
      )
      .join("");
  }

  function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        renderPublicationCards(btn.dataset.filter);
      });
    });
  }

  function setFooterYear() {
    const el = document.getElementById("current-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderTimeline();
    renderHomePublications();
    renderPublicationCards("all");
    initFilters();
    setFooterYear();
  });
})();
