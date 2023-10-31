// Primitive Data Types (Call By Values)
//7 Types:  String,  Number, Boolean, null, undefined , Symbol , BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(id === anotherId);

let bigNumber = 232142342354435354355234234235235
let bigNumberReal = 2321423423544353542323232323232323232323235n


console.log(bigNumber);
console.log(bigNumberReal);



// Reference or Non Primitive Data Types (Call by Reference)
// Array, Objects, Functions


// Is JS dynamic or staticaly typed language


/// array s
const heros = ['Ram', 'Krishna', "Shiva"]
console.log(heros);

/// object 
const myObject = {
    name: "Pushakr",
    age: 28
}


const myFunction = function () {

    console.log("Hello Pushkar");
}

console.log(typeof heros);






