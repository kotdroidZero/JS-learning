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