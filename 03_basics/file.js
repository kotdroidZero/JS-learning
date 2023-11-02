/// JavaScript Execution Context

// {}  Global Execution Context (reffered from this) (In browser window Object)

// Functioanl Execution Context

// Eval Exceution Context

/// JavaScript promgrams runs in 2 phase

/// 1. Memory Creation Phase or (Creation Phase) (memory locate hoti hai)

/// 2. Execution Phase (operations hote hain)


/// Now Let's take an example


let val1 = 10
let val2 = 5

function addNum(num1, nmum2) {
    let result = num1 + nmum2
    return result;
}

let result1 = addNum(val1, val2)
let result2 = addNum(3, 4)

/// We will discuss From Above Example line no 19 to 28

/// Step 1. Sbase Pahle aayega Global Execution (or Global Environment) and isko "this" ke andar allocate kia jata hai

/// Step 2. Memory Phase (sare variables ko memory milti hai)
/// val1 = undefined
/// val2 = undefined
/// addNum = definition (whole function definition)
/// result1 = undefined
/// result2 = undefined


/// Step 3. Execution Phase (operation honge)
/// val1 = 10
/// val2 = 5
///  addNum => iska alag se execution context bnega and new thread assign hoga
///  and uska then Memory and Execution Phase phir se bnega

