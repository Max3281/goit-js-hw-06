console.log("Task_8");

const registerFormEl = document.querySelector(".login-form");
const submitButtonEl = document.querySelector("button");

registerFormEl.addEventListener("submit", onSubmit);

// Method_1
// function onSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   if (
//     event.currentTarget.elements.email.value === "" ||
//     event.currentTarget.elements.password.value === ""
//   ) {
//     alert("ALERT! All forms must be filled!");
//   } else {
//     formData.forEach((name, value) => {
//       console.log(value + ":", name);
//     });
//   }
//   registerFormEl.reset();
// }

// Method_2
function onSubmit(event) {
  event.preventDefault();
  const emailValue = registerFormEl.email.value;
  const passwordValue = registerFormEl.password.value;
  if (emailValue === "" || passwordValue === "") {
    return alert("ALERT! All forms must be filled!");
  }
  console.log({
    email: emailValue,
    password: passwordValue,
  });
  registerFormEl.reset();
}
console.log("____________________________");
