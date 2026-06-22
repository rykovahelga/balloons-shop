import { Header } from "../components/header.js";
import { Breadcrumbs } from "../components/breadcrumbs.js";
import { Categories } from "../components/categories.js";
import { Footer } from "../components/footer.js";

export function CategoriesPage() {
  return `
    <div class="container">
      ${Header()}
      ${Categories(true, "Каталог", "")}
      ${Footer()}
    </div>
  `;
}
