console.log('Task_1')

const globalUlEl = document.querySelector('#categories')
const liItemEl = document.querySelectorAll('.item')

console.log("Number of categories:", globalUlEl.children.length)
console.log(liItemEl.forEach(value => {
    let ulArray = value.querySelector('ul')
    console.log("Category:", value.firstElementChild.textContent, "Elements:", ulArray.children.length)
}))

console.log('____________________________')




