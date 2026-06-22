import { SectionHeader } from "./SectionHeader.js";
import { Breadcrumbs } from "./breadcrumbs.js";

export function Categories(showBreadcrumbs = false, title = "Популярные категории", linkText = "смотреть всё") {
  return `
    <section class="categories">
      <div class="categories__container container">
          <div class="categories__inner">
            <div class="categories__main">
                ${SectionHeader(title, linkText)}
                ${showBreadcrumbs ? Breadcrumbs([{ label: "Главная", href: "/" }, { label: "Каталог" }]) : ""}
                <ul class="categories__list">
                    <li class="categories__item">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                                <img src="./src/images/catalog/ballons.jpg" alt="ballons">
                            </div>
                            <p class="categories__item-title">Баблобоксы</p>
                        </a>
                    </li>
                    <li class="categories__item">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                              <img src="./src/images/catalog/ballons.jpg" alt="ballons">
                            </div>
                            <p class="categories__item-title">Фонтаны с цифрами</p>
                        </a>
                    </li>
                    <li class="categories__item">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                                <img src="./src/images/catalog/ballons.jpg" alt="ballons">
                            </div>    
                            <p class="categories__item-title">Готовые композиции</p>
                        </a>
                    </li> 
                    <li class="categories__item categories__item--hidden">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                                <img src="./src/images/catalog/ballons.jpg" alt="ballons">
                            </div>    
                            <p class="categories__item-title">Шарики, наборы, оформление комнаты на выписку</p>
                        </a>
                    </li>
                    <li class="categories__item">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                                <img src="./src/images/catalog/ballons2.jpg" alt="ballons">
                            </div>    
                            <p class="categories__item-title">Латексные шары</p>
                        </a>
                    </li>
                    <li class="categories__item">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                                <img src="./src/images/catalog/ballons2.jpg" alt="ballons">
                            </div>    
                            <p class="categories__item-title">Шарики на день рождения</p>
                        </a>
                    </li>
                    <li class="categories__item">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                                <img src="./src/images/catalog/ballons2.jpg" alt="ballons">
                            </div>    
                            <p class="categories__item-title">Фольгированые шары</p>
                        </a>
                    </li>
                    <li class="categories__item categories__item--hidden">
                        <a href="#" class="categories__item-link">
                            <div class="categories__item-img">
                                <img src="./src/images/catalog/ballons2.jpg" alt="ballons">
                            </div>    
                            <p class="categories__item-title">3D Сферы, Bubble</p>
                        </a>
                    </li>                                                                                                                         
                </ul>
            </div>
          </div>
        </div>       
      </div>
    </section>
  `;
}
