console.log("Task_5");

const inputSubmitEl = document.querySelector("#name-input");
const spanPlaseholderEl = document.querySelector("#name-output");

console.log(inputSubmitEl);

inputSubmitEl.addEventListener("input", onSubmit);

function onSubmit(event) {
  console.log(event.currentTarget.value);
  spanPlaseholderEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    spanPlaseholderEl.textContent = "Anonymous";
  }
  return spanPlaseholderEl.textContent;
}

console.log("____________________________");
