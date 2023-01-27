const controllerEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

let currentTextSize = controllerEl.value;
textEl.style.fontSize = `${currentTextSize}px`;

controllerEl.addEventListener("input", (event) => {
  currentTextSize = controllerEl.value;
  textEl.style.fontSize = `${currentTextSize}px`;
});
