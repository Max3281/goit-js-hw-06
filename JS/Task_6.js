console.log("Task_6");
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function getValidClass() {
  inputEl.classList.remove("invalid");
  inputEl.classList.add("valid");
}

function getInvalidClass() {
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
}

function onInputBlur(event) {
  if (
    inputEl.value.length === Number(event.target.getAttribute("data-length"))
  ) {
    getValidClass();
  } else {
    getInvalidClass();
  }
}

console.log("____________________________");
