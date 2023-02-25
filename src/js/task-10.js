const refs = {
  inputEl: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

let amountInput = Number(refs.inputEl.value);

function createBoxes(amount) {
  let arrayOfDiv = [];

  for (let i = 1; i <= amount; i += 1) {
    let divItem = document.createElement("div");
    divItem.style.width = `${20 + i * 10}px`;
    divItem.style.height = `${20 + i * 10}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    divItem.append(i);
    arrayOfDiv.push(divItem);
  }
  refs.boxEl.append(...arrayOfDiv);
}

refs.btnCreate.addEventListener("click", onBtnCreate);
function onBtnCreate() {
  createBoxes(refs.inputEl.value);
}

function destroyBoxes() {
  onBtnDestroy();
}

refs.btnDestroy.addEventListener("click", onBtnDestroy);
function onBtnDestroy() {
  refs.boxEl.remove();
  refs.inputEl.value = "null";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
