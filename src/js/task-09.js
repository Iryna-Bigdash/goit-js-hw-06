const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const bntChangeEl = document.querySelector(".change-color");

bntChangeEl.addEventListener("click", onClick);

function onClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
