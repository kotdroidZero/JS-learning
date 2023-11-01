
const user = {
    username: "Pushkar",
    price: 999,
    welcomeMesaage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

this.name = 'pinky'

// user.welcomeMesaage()

user.username = "Sam"

// user.welcomeMesaage()

// console.log(this)  // in node this is empty object but in web browser cosnole it is window object (the global object)


// function chai() {
//     console.log(this)
// }

// chai()


const func1 = function () {
    let userName = "Pushkar"
    console.log(this.userName)
    console.log(this)
}


const func2 = () => {
    let userName = "Srivastava"
    console.log(userName)
    console.log(this)
}


func1()
func2()


// in regular function this is a global object and in arrow function this is an empty object. why?


/// implicit return (when statement is one liner)
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => { userName: "Ritesh" }
const addTwo = (num1, num2) => ({ userName: "Ritesh" })

// const myArray = [2, 3, 4, 5, 6, 7]

// myArray.forEach(()=>)

console.log(addTwo(2, 23))