console.log('Task_8')

const registerFormEl = document.querySelector('.login-form')
const submitButtonEl = document.querySelector('button')

registerFormEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    if (registerFormEl.email.value === "" || registerFormEl.password.value === "") {
        alert('ALERT! All forms must be filled!')
    } else {
        formData.forEach((name, value) => {
        console.log(value + ":", name)
        registerFormEl.reset()
    })
    }
}

console.log('____________________________')