import { Header } from "../components/header.js";
import { Hero } from "../components/hero.js";
import { Slider } from "../components/slider.js";
import { Categories } from "../components/categories.js";
import { Discount } from "../components/discount.js";
import { Footer } from "../components/footer.js";

export function Home() {
  return `
    <div>
      ${Header()}
      ${Hero()}
      ${Categories()}
      ${Discount()}      
      ${Slider()}
      ${Footer()}
    </div>
  `;
}
