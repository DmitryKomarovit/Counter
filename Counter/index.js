const counterEL = document.querySelector('[data-find="lapCounter"]');
const addButton = document.getElementById("addButton");
const reset = document.getElementById("resetButton");
const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

counterEL.innerText = counter;

addButton.addEventListener("click", function () {
  counter = counter + 1;
  counterEL.innerText = counter;
});

reset.addEventListener("click", function () {
  counterEL.innerText = COUNTER_INITIAL_VALUE;
});
