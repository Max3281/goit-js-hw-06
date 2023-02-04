console.log('Task_4')
let counterValue = 0;
const spanValueEl = document.querySelector('#value')
const decreaseBtnEl = document.querySelector('button[data-action="decrement"')
const increaseBtnEl = document.querySelector('button[data-action="increment"')

console.log(decreaseBtnEl)

decreaseBtnEl.addEventListener('click', onClick)

function onClick() {
    counterValue -= 1
    return spanValueEl.textContent = counterValue
}

increaseBtnEl.addEventListener('click', onClick1)

function onClick1() {
    counterValue += 1
    return spanValueEl.textContent = counterValue
}

console.log('____________________________')