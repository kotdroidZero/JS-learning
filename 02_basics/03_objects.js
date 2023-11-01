/// singleton se


const tinderUser = new Object()  // Singleton
// const tinderUser = {}  //non-singleton


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoogedIn = false


// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Pushkar",
            lastName: "Srivastava"
        }
    }
}


// console.log(regularUser.fullName?.userFullName.firstName)


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }


// const obj3 = { obj1, obj2 }


// const obj3 = Object.assign({ 5: "e" }, obj1, obj2)  /// first is target, rest is source

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)


const users = [

    {
        id: 1,
        email: "one@yopmail.com"

    },
    {
        id: 2,
        email: "two@yopmail.com"

    },
    {
        id: 3,
        email: "three@yopmail.com"

    },
    {
        id: 4,
        email: "four@yopmail.com"

    },
]


// users[0]
// console.log(users[0].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoogedIn'))


///Object De-Structuring
const course = {

    courseName: "JS Tutorials",
    price: "999",
    courseInteractor: "Pushkar"
}

const { courseInteractor: instructor } = course

console.log(instructor)

function greet({ firstName, lastName }) {
    console.log(`Hello, ${firstName} ${lastName}!`);
}

const person = {
    firstName: "Pushkar",
    lastName: "Srivastava",
};

greet(person); // Output: "Hello, Pushkar Srivastava!"



// {
//     "name" : "Pushakr",
//         "courseName" : "JS TUtorials",
//         "price" : "Free"
// }