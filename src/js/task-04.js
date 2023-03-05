let counterValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let result = document.getElementById("value");
const decrementBtn = () => {
  counterValue--;
  result.textContent = counterValue;
};
const incrementBtn = () => {
  counterValue++;
  result.textContent = counterValue;
};
decrement.addEventListener("click", decrementBtn);
increment.addEventListener("click", incrementBtn);
