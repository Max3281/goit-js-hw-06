console.log("Task_2");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const generalRecEl = document.querySelector("#ingredients");
const emptyArray = [];
ingredients.map((value) => {
  const ingridientListEl = document.createElement("li");
  ingridientListEl.textContent = value;
  ingridientListEl.classList.add("item");
  emptyArray.push(ingridientListEl);
});
console.log(...emptyArray);
generalRecEl.append(...emptyArray);
console.log("____________________________");
