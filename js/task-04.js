const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");

let counter = 0;

decrement.addEventListener("click", () => {
  counter -= 1;
  value.textContent = counter;
});

increment.addEventListener("click", () => {
  counter += 1;
  value.textContent = counter;
});
