export function Breadcrumbs(items = [], showBack = false) {
  if (!items.length) return "";

  const backLink = showBack
    ? `<a href="/" class="breadcrumbs__back">Вернуться в магазин 
       <svg class="breadcrumbs__arrow" width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3.76907L0.558318 0L0 0.805094L5.5 5L11 0.805094L10.4417 0L5.5 3.76907Z" fill="inherit"/>
        </svg>
    </a>`
    : "";

  const crumbsHtml = items
    .map((item, index) => {
      const isLast = index === items.length - 1;

      if (isLast || !item.href) {
        return `<span class="breadcrumbs__item breadcrumbs__item--current">${item.label}</span>`;
      }

      return `
        <a href="${item.href}" class="breadcrumbs__item breadcrumbs__link">${item.label}</a>
        <span class="breadcrumbs__separator">/</span>
      `;
    })
    .join("");

  return `
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <div class="breadcrumbs__list">
        ${crumbsHtml}
      </div>
      ${backLink}
    </nav>
  `;
}

export function initBreadcrumbs() {
  document.querySelectorAll("[data-breadcrumbs-back]").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.history.length > 1
        ? window.history.back()
        : (window.location.href = "/");
    });
  });
}