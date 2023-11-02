/// falsy values
///false, 0, -0, BigInt 0n, "", null, undefined, NaN


/// Truthy Values (Except above all are true) and below also
"0", 'false', " ", [], {}, function () { }
/// 


const emptyObject = {}

if (Object.keys(emptyObject).length == 0) {
    console.log("Empty Object");
}


if (Object.getOwnPropertyNames(emptyObject).length == 0) {
    console.log(Object.getOwnPropertyNames(emptyObject));
    console.log("Empty Object Hai");
}

false == 0 // true
false == '' //true
0 == '' //true

if (0 == '' && false == '' && false == 0) {
    console.log("Yes All true");
}


/// Nullish Coalescing Operator (??):null

let val1;

// val1= 5??10
// val1 = null??10
// val1 = undefined ?? 10 /// Same as Dart or Kotlin
val1 = null ?? null ?? 20



/// Terniary Operator
// condition?true:false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80');

console.log(val1);

