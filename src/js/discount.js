export function initDiscountForm() {
  const input = document.querySelector('.discount__input');
  const btn = document.querySelector('.discount__btn');

  if (!input || !btn) return;

  input.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d+]/g, '');
  });

  btn.addEventListener('click', () => {
    const value = input.value.replace(/\D/g, '');

    if (value.length < 11) {
      input.classList.add('discount__input--error');
      return;
    }

    input.classList.remove('discount__input--error');
  });
}