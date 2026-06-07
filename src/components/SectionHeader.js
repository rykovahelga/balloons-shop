export function SectionHeader(title, linkText = "", align = "") {
  return `
    <div class="section-header ${align ? `section-header--${align}` : ""}">
      <h2 class="section-header__title">${title}</h2>
      ${
        linkText
          ? `
        <a class="section-header__link" href="#">
          ${linkText}
          <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3.76907L0.558318 0L0 0.805094L5.5 5L11 0.805094L10.4417 0L5.5 3.76907Z" fill="currentColor"/>
          </svg>
        </a>`
          : ""
      }
    </div>
  `;
}
