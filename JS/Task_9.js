console.log("Task_9");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomColorButtonEl = document.querySelector(".change-color");
const divBGColorEl = document.querySelector(".widget");

randomColorButtonEl.addEventListener("click", onClick);

function onClick() {
  console.log("its work");
  divBGColorEl.setAttribute("style", `background-color:${getRandomHexColor()}`);
}

console.log("____________________________");
