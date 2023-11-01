function sayMyName() {
    console.log("Inside Function")
}

// sayMyName()

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result;
    return number1 + number2;
}


const result = addTwoNumbers(3, 4)
// console.log(`Result is ${result}`)

function loginUserMessage(userName = "Sam") {
    if (!userName) {
        console.log("Please enter user name");
        return "";
    }

    // if (userName === undefined) {
    //     console.log("Please enter user name");
    //     return "";
    // }

    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Pushkar"));


/// here ...num1 is rest operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 500, 400, 23));

const user = {
    username: "Pushkar",
    price: 199
}


function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.username} and Price is ${anyObject.price}`)
}

handleObject({
    username: "Pushkar",
    price: 191
})



const myNewArray = [200, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))









