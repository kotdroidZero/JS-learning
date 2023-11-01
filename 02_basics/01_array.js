const myArr = [0, 12, 3, 4, 5, 6]



/// Shallow Copy (Reference Same ) (Heap Memory)

/// Deep Copy (Reference are not same)

/// Array copy method makes shallow copy


// myArr.push(4)
// myArr.pop()



// myArr.unshift(78)  // add the elements to start and shifts all next index
// myArr.shift()  // Removes first element and shift remanining element to it's previous index


const newArray = myArr.join()  //converts into string  (comma separated)

// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray)


// slice, splice

// console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3, "Pushkar", "Kaju", "Julie")

// console.log(myn2);
// console.log("C", myArr);

const babluKids = ["Anchal", "Soli", "Shubhi", "Saarthak"]
const rajeshKids = ["Julie", "Ritika", "Kaju", "Sahil"]

// babluKids.push(rajeshKids)
const allKids = babluKids.concat(rajeshKids)

// console.log(rajeshKids)

// console.log(allKids)



// spread operator
const allKids2 = [...babluKids, ...rajeshKids]
// console.log(allKids2);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


const realAnotherArrray = anotherArray.flat(Infinity)

// console.log(realAnotherArrray)

// console.log(Array.isArray("Pushkar"))
// console.log(Array.from("Pushkar"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))