import { Header } from "../components/header.js";
import { Hero } from "../components/hero.js";
import { Categories } from "../components/categories.js";
import { ProductSection } from "../components/ProductSection.js";
import { Discount } from "../components/discount.js";
import { Slider } from "../components/slider.js";
import { Footer } from "../components/footer.js";

export function Home() {
  return `
    <div>
      ${Header()}
      ${Hero()}
      ${Categories()}
      ${ProductSection("Лидеры продаж", "показать всё")}  
      ${Discount()}  
      ${ProductSection("Акции", "показать всё")}      
      ${Slider()}
      ${Footer()}
    </div>
  `;
}
