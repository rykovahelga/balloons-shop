import "./style.css";
import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Home } from "./pages/home.js";
import { CategoriesPage } from "./pages/categories.js";
import { initBurger } from "./js/header.js";
import { initDiscountForm } from "./js/discount.js";

const app = document.querySelector("#Balloons-shop");

function render(page) {
  if (page === "home") {
    app.innerHTML = Home();
    initSlider();
    initDiscountForm();
  }
  if (page === "categories") app.innerHTML = CategoriesPage();
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

function initRouter() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");

    if (href === "/") {
      e.preventDefault();
      render("home");
    }

    if (href === "/categories") {
      e.preventDefault();
      render("categories");
    }
  });
}

window.render = render;

// render("home");
render("categories");
initBurger();
initRouter();
