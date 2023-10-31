/// To declare any constant variables
const accountId=3232

/// To declare any variables 
let accountEmail ="pushkar@yopmail.com"
var accountPassowrd= "113232"
accountCity = "Jaipur"  /// not good way,
let accountState  /// it will be undefined (when value is not declared)

/*
Prefer not to use var 
because of functional and block scope
*/


// accountId = 2343  /// re-assign to const variable is not allowed
// console.log(accountId)
console.table([accountId,accountEmail,accountPassowrd,accountCity])
accountEmail="pushkar@gmail.com"
accountPassowrd ="2344"
accountCity = "Lucknow"

console.table([accountId,accountEmail,accountPassowrd,accountCity,a])
