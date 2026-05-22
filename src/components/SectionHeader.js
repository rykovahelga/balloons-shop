export function SectionHeader(title, linkText = '') {
  return `
    <div class="section-header">
      <h2 class="section-header__title">${title}</h2>
      ${linkText ? `<a class="section-header__link" href="#">${linkText}</a>` : ''}
    </div>
  `
}