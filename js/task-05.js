const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

let currentText = inputEl.value ? "Anonymous" : inputEl.value;
outputEl.textContent = currentText;

inputEl.addEventListener("input", toMakeOutputText);

function toMakeOutputText(event) {
  currentText = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
  outputEl.textContent = currentText;
}
