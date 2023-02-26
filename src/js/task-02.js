const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const itemEls = ingredients.map((ingredient) => {
  let itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;

  return listEl.append(itemEl);
});
