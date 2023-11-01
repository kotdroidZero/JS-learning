/// singleton
// Object.create



const mySym = Symbol("key2")



/// object literals
const jsUser = {
    [mySym]: "mykey1",
    name: "Pushkar", age: 28, location: "Lucknow", email: "pushkar@gmail.com", isLoggedIn: true, lastLoginDats: ["Monday", "Friday"]
}

// console.log(jsUser.age)
// console.log(jsUser.email)
// console.log(jsUser["name"])
// console.log(jsUser[mySym])

jsUser.email = "pushkar@chatcpt.com"
// Object.freeze(jsUser)   /// It  will lock the object for any modification
jsUser.email = "pushkar@microsoft.com"
// console.log(jsUser)




jsUser.greeting = function () {
    console.log("Hello JS User");
}

jsUser.greeting2 = function () {
    console.log(`Hello JS User ${this.name}`);
}

// jsUser.greeting
console.log(jsUser.greeting())
console.log(jsUser.greeting2())