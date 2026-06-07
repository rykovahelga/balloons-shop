import { SectionHeader } from "./SectionHeader.js";

export function ProductSection(title, linkText = "") {
  return `
    <section class="product-section">
      <div class="product-section__container container">
        ${SectionHeader(title, linkText)}
        <ul class="product-section__list">
            <li class="product-section__item">
                <a href="#" class="product-section__item-link">
                    <div class="product-section__item-img">
                        <img src="./src/images/catalog/ballons3.jpg" alt="ballons">
                        <p class="product-section__bg-discount">-7%</p>                                                            
                    </div>
                    <div class="product-section__wrap-price">
                        <p class="product-section__price">1450р</p>
                        <p class="product-section__old-price">1540р</p>
                        <button class="product-section__btn-add">
                            <img src="./src/images/catalog/btn-plus.svg" alt="button plus">    
                        </button>
                        <p class="product-section__discount">-7%</p>                        
                    </div>
                    <p class="product-section__item-title">Композиция шаров на день рождения</p>
                </a>
            </li>
            <li class="product-section__item">
                <a href="#" class="product-section__item-link">
                    <div class="product-section__item-img">
                        <img src="./src/images/catalog/ballons3.jpg" alt="ballons">
                    </div>
                    <div class="product-section__wrap-price">
                        <p class="product-section__price">1450р</p>
                        <p class="product-section__old-price">1540р</p>
                        <button class="product-section__btn-add">
                            <img src="./src/images/catalog/btn-plus.svg" alt="button plus">
                        </button>
                        <p class="product-section__discount">-7%</p>                         
                    </div>     
                    <p class="product-section__item-title">Композиция шаров на день рождения</p>               
                </a>
            </li>
            <li class="product-section__item">
                <a href="#" class="product-section__item-link">
                    <div class="product-section__item-img">
                        <img src="./src/images/catalog/ballons3.jpg" alt="ballons">
                        <p class="product-section__bg-discount">-7%</p>                                                            
                    </div>  
                    <div class="product-section__wrap-price">
                        <p class="product-section__price">1450р</p>
                        <p class="product-section__old-price">1540р</p>
                        <button class="product-section__btn-add">
                            <img src="./src/images/catalog/btn-plus.svg" alt="button plus"> 
                        </button>
                        <p class="product-section__discount">-7%</p>                         
                    </div>  
                    <p class="product-section__item-title">Композиция шаров на день рождения</p>                    
                </a>
            </li> 
            <li class="product-section__item">
                <a href="#" class="product-section__item-link">
                    <div class="product-section__item-img">
                        <img src="./src/images/catalog/ballons3.jpg" alt="ballons">
                    </div> 
                    <div class="product-section__wrap-price">
                        <p class="product-section__price">1450р</p>
                        <p class="product-section__old-price">1540р</p>
                        <button class="product-section__btn-add">
                            <img src="./src/images/catalog/btn-plus.svg" alt="button plus">
                        </button>
                        <p class="product-section__discount">-7%</p>                         
                    </div>                      
                    <p class="product-section__item-title">Композиция шаров на день рождения</p>
                </a>
            </li>                                                                                                                      
        </ul>        
      </div>
    </section>
  `;
}
