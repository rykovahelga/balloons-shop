export function Discount() {
  return `
    <section class="discount">
      <div class="discount__container container">
          <div class="discount__inner">
          <div class="discount__image">
            <img src="./src/images/discount/woman.png" alt="woman">
          </div>
          <div class="discount__info">
            <div class="discount__text">
                <h2 class="discount__title">Скидка 5%</h2>
                <p class="discount__subtitle">на первый заказ</p>
            </div>      
            <form class="discount__form">
                <input class="discount__input" type="tel" placeholder="+7">
                <button class="discount__btn">Получить скидку</button>
            </form>
          </div>
          </div>
        </div>       
      </div>
    </section>
  `;
}
