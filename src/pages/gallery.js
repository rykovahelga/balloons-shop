import { Header } from "../components/header.js";
import { Gallery } from "../components/gallery.js";
import { Footer } from "../components/footer.js";

export function GalleryPage() {
  return `
    <div class="container">
      ${Header()}
      ${Gallery(true, "Галерея", "")}
      ${Footer()}
    </div>
  `;
}
