let score = false


console.log(typeof score);

var valueInScore = Number(score)

console.log(typeof valueInScore)
console.log( valueInScore)

/*
"33" => 33
"33ac" => NaN (not a number)
null => 0
undefined => NaN
"pushkar" => NaN
true/false => 1/0
*/



let isLoggedIn = undefined

let boolLoggedIn = Boolean(isLoggedIn)

console.log(boolLoggedIn);

// 0 => false
// 1 => true
// "" => false
// "pushkar" => true
// null => false
// undefined => false 


let someNumber = undefined

let inString  =  String(someNumber)

console.log(inString);
console.log(typeof inString)

// *********************************** Operations *********************************
console.log('*********************************** Operations *********************************')

let value = 67
let negValue  = -value
// console.log(negValue);

let str1 = "Hello " 
let str2 = "Pushkar"
let str3  = str1+ str2;
// console.log(str3);

// console.log(3+4*(5%3));
// console.log(+true);
console.log(+true);
console.log(+"2");