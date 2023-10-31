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

// ===============================================================================


/// Stack (Primitive), Heap (Non-primitive)

/// when you assign any primitive variable to another primitive variable, it's values are send actually,
/// but in case of non primitve variables doing so means you are passing reference of that object and any changes via any variables reflects in object inside the heap memory
/// and this cocept of heap is same in JS, Kotlin, Java and Dart also

let objectOne = {
    name: "Pushkar"
}

let objectTwo = objectOne;

console.log(objectOne.name);
console.log(objectTwo.name);

objectTwo.name = "Srivastava"

console.log(objectOne.name);
console.log(objectTwo.name);





/// So All the data types of primitives go inside the stack and you will get it's values while passing or copying 
/// and All the non-primitive data types goes inside heap memory and you will use it's referecne while copying, so changes and updates will occur in original objects

/// clear





