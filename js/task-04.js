const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counter = 0;
decrementBtn.addEventListener('click', () => {
  counter -= 1;
  counterValue.textContent = counter;
}); 
incrementBtn.addEventListener('click', () => {
  counter += 1;
  counterValue.textContent = counter;
});
