import { SectionHeader } from "./SectionHeader.js";

export function Slider() {
  return `
    <section class="slider">
      <div class="slider__container container">
        <div class="slider__wrap">
            ${SectionHeader("Наши работы", "")}
            <div class="slider__swiper swiper">

                <div class="slider__swiper-wrapper swiper-wrapper">

                    <div class="slider__swiper-slide swiper-slide">
                        <a href="#"> 
                            <img src="./src/images/slider/1.jpg" alt="image slider">
                        </a>
                    </div>
                    <div class="slider__swiper-slide swiper-slide">
                        <a href="#"> 
                            <img src="./src/images/slider/2.jpg" alt="image slider">
                        </a>
                    </div>
                    <div class="slider__swiper-slide swiper-slide">
                        <a href="#"> 
                            <img src="./src/images/slider/3.jpg" alt="image slider">
                        </a>
                    </div>
                    <div class="slider__swiper-slide swiper-slide">
                        <a href="#"> 
                            <img src="./src/images/slider/4.jpg" alt="image slider">
                        </a>
                    </div>

                </div>

                <div class="slider__swiper-button-prev swiper-button-prev"></div>
                <div class="slider__swiper-button-next swiper-button-next"></div>

            </div>
        </div>  
      </div>
    </section>
  `;
}
