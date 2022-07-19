import { Invoice } from './classes/Invoice.js'

// exclamation mark means we are telling the compiler we are certain anchor will not be empty
const anchor = document.querySelector('a')!

console.log(anchor.href);
// select element from website by its className and store it as a HTMLFormElement
const form = document.querySelector('.new-item-form')! as HTMLFormElement
console.log(form.children)

const type = document.querySelector("#type")! as HTMLSelectElement
const toFrom = document.querySelector("#tofrom")! as HTMLInputElement
const details = document.querySelector("#details")! as HTMLInputElement
const amount = document.querySelector("#amount")! as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(type.value, 
        toFrom.value, 
        details.value, 
        amount.value)
})


const invOne = new Invoice('Mario', 'worked on pipes', 69)
console.log(invOne.format())
console.log("here")

