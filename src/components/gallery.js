import { SectionHeader } from "./SectionHeader.js";
import { Breadcrumbs } from "./breadcrumbs.js";

export function Gallery(
  showBreadcrumbs = false,
  title = "Галерея",
  linkText = "",
) {
  return `
    <section class="gallery">
      <div class="gallery__container container">
        ${SectionHeader(title, linkText)}
        ${showBreadcrumbs ? Breadcrumbs([{ label: "Главная", href: "/" }, { label: "Галерея" }]) : ""}
        <ul class="gallery__list">
          <li class="gallery__item">
            <img src="./src/images/gallery/1.jpg" alt="gallery" class="gallery__img">
          </li>
          <li class="gallery__item">
            <img src="./src/images/gallery/2.jpg" alt="gallery" class="gallery__img">
          </li>
          <li class="gallery__item">
            <img src="./src/images/gallery/3.jpg" alt="gallery" class="gallery__img">
          </li>
          <li class="gallery__item">
            <img src="./src/images/gallery/4.jpg" alt="gallery" class="gallery__img">
          </li>
        </ul>
      </div>
    </section>
  `;
}
