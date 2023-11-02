/// for of



const arr = [1, 2, 3, 45, 6]

for (const num of arr) {
    // console.log(num)
}

const greetings = 'Hello World!'

for (const greet of greetings) {
    if (greet == ' ') continue
    // console.log(`Each char is ${greet}`)
}


const map = new Map()
map.set('IN', 'INDIA')
map.set('IN', 'INDIA')
map.set('Fr', 'France')
map.set('USA', 'UNITED STATE OF AMERICA')
// console.log(map)


for (const [key, value] of map) {
    // console.log(`${key} : ${value}`);
}


const myObject = {
    game1: "NFS",
    game2: "GTA"
}

/// object is not iterable
// for (const [key, value] of myObject) {
//     // console.log(game);
// }
