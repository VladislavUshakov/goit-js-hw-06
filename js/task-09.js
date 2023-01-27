function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const widgetText = document.querySelector(".widget .color");
const widgetBtn = document.querySelector(".widget .change-color");

widgetBtn.addEventListener("click", changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();

  bodyEl.style.backgroundColor = currentColor;
  widgetText.textContent = currentColor;
}
