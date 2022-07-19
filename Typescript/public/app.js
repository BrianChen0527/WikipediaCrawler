import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// exclamation mark means we are telling the compiler we are certain anchor will not be empty
const anchor = document.querySelector('a');
console.log(anchor.href);
// select element from website by its className and store it as a HTMLFormElement
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc.format());
});
const invOne = new Invoice('Mario', 'worked on pipes', 69);
console.log(invOne.format());
console.log("here");
// LESSON 16: inheritance of interfaces by classes
let req1;
let req2;
req1 = new Invoice('Mario', 'plumbing', 200);
req2 = new Payment('Luigi', 'saving princess Daisy', 10000);
console.log(req1.format());
console.log(req2.format());
