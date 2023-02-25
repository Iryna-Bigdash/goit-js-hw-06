let refs = {
  inputEl: document.querySelector("#font-size-control"),
  spanEl: document.querySelector("#text"),
};
refs.inputEl.addEventListener("change", onChage);

function onChage(event) {
  refs.spanEl.style.fontSize = Number(event.currentTarget.value) + "px";
}
