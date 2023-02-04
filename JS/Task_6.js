console.log('Task_6')
const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    if (inputEl.value.length >= event.target.getAttribute('data-length')) {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
    }
}

console.log('____________________________')