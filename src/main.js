import "./style.css";
import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Home } from "./pages/home.js";
import { Categories } from "./pages/categories.js";
import { initBurger } from "./js/header.js";
import { initDiscountForm } from "./js/discount.js";

const app = document.querySelector("#Balloons-shop");

function render(page) {
  if (page === "home") {
    app.innerHTML = Home();
    initSlider();
    initDiscountForm();
  }
  if (page === "categories") app.innerHTML = Categories();
}

function initSlider() {
  new Swiper(".slider__swiper", {
    modules: [Navigation, Scrollbar],
    slidesPerView: 4,
    spaceBetween: 25,
    navigation: {
      nextEl: ".slider__swiper-button-next",
      prevEl: ".slider__swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: "auto", spaceBetween: 15 },
      480: { slidesPerView: "auto", spaceBetween: 15 },
      768: { slidesPerView: "auto", spaceBetween: 20 },
      1024: { slidesPerView: 3.5, spaceBetween: 25 },
      1440: { slidesPerView: 4, spaceBetween: 25 },
    },
  });
}

window.render = render;

render("home");
initBurger();
