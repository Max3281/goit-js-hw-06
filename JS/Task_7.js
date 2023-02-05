console.log("Task_7");

const inputSizeEl = document.querySelector("#font-size-control");
const spanSizeEl = document.querySelector("#text");

inputSizeEl.addEventListener("input", onInput);

function onInput(event) {
  console.log(event.target.value);
  spanSizeEl.setAttribute("style", `font-size:${event.target.value}px`);
}

console.log("____________________________");
