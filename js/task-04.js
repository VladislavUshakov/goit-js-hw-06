const href = {
  decrementEl: document.querySelector('[data-action="decrement"]'),
  incrementEl: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let currentValue = 0;
href.valueEl.textContent = currentValue;

href.decrementEl.addEventListener("click", toDecrement);
href.incrementEl.addEventListener("click", toIncrement);

function toDecrement() {
  currentValue -= 1;
  href.valueEl.textContent = currentValue;
}

function toIncrement() {
  currentValue += 1;
  href.valueEl.textContent = currentValue;
}
