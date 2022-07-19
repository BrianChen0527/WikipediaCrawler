let character = 'mario';
let age = 30; // Typescript combines int and float into one single type called "number"

// typescript variables cannot change type, but can change value
// character = 20;
character = 'luigi';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs)
inputs.forEach(input => {
  console.log(input);
});


// LESSON 3


var circumference = (radius: number) => {
  return radius * Math.PI
}
console.log(circumference(5));


// LESSON 4

let names = ['luigi', 'mario', 'wario'];

// names.push(2);    // you cannot push vars of differnt types into array with only 1 type

let mixed = [1, 'mario', 'wario', 100];
mixed.push(6.9);
mixed.push('string');


let ninja = {
  name: 'Ryu',
  belt: 'black',
  age: 40
}

// ninja.skills = ['fighting', 'hiding']; // you can't add new attributes to a predefined object
/* 
ninja = {
  name: 'Ryu',
  belt: 'black',
  age: 40
  skills = ['fighting', 'hiding'];
}
*/


// LESSON 5: explicit types

// explicitly define var types before assigning value
let str: string;
str = 'asdf';

let ninjas: string[];
// this array has a defined type, but it hasn't been initialized yet, so you can't push stuff into it yet
ninjas = []
ninjas.push('brian')
console.log(ninjas)

let mixedArr: (string|number|boolean)[] = []
mixedArr.push('string')
mixedArr.push(false)
mixedArr.push(69)

let ninja2: {
  name: string
  age: number
}

// LESSON 6:  dynamic types
let num: any = 25
num = true;
num = 'hello'

// LESSON 7: editing tsconfig.json
console.log('wassup')

// LESSON 8: functions

// we can create an optional parameter with questionmark
// we can also create default values to parameters with an equal sign
const add = (num1: number = 0, num2: number = 0, optionalNum?: number) => {
  console.log(num1 + num2)
  console.log("this is an optional paramater: ", optionalNum)
}
add(5,10)
add(5,10, 69)


// LESSON 9: type aliases
type stringOrNum = string | number
let temp: stringOrNum
temp = "sup"
temp = 89

// LESSON 10: function signatures

