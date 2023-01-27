// Variables
const href = {
  numberOfElements: document.querySelector("#controls").firstElementChild,
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

// Events
href.createBtn.addEventListener("click", () => {
  const amount = href.numberOfElements.value;
  createBoxes(amount);
});
href.destroyBtn.addEventListener("click", destroyBoxes);

// Functions
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let markup = ``;
  let side = 30;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();

    markup += `<div style="width: ${side}px; height: ${side}px; background-color: ${color}"></div>`;
    side += 10;
  }

  href.boxes.innerHTML = markup;
}

function destroyBoxes() {
  href.boxes.innerHTML = "";
  href.numberOfElements.value = "";
}
