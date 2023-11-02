
///

const programming = ["js", 'dart', 'kotlin', 'cpp', 'py']

programming.forEach(function (item) {
    // console.log(item)
})


// programming.forEach((item) => { console.log(item) })

// programming.forEach(printMe)


function printMe(item) {
    console.log(item);
}

programming.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})


const myCoding = [
    {
        lName: 'javascript',
        lFileName: "js"
    },
    {
        lName: 'python',
        lFileName: "py"
    },
    {
        lName: 'Java',
        lFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.lName)
})