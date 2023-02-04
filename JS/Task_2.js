console.log('Task_2')

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const generalRecEl = document.querySelector('#ingredients')
// ingridientListEl.textContent = "It's work"
// generalRecEl.appendChild(ingridientListEl)
ingredients.forEach(value => {
    const ingridientListEl = document.createElement('li')
    ingridientListEl.textContent = value;
    ingridientListEl.classList.add("item")
    generalRecEl.appendChild(ingridientListEl)
})
console.log('____________________________')