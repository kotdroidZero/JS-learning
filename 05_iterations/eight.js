/// Reduce

const myArray = [1, 2, 3, 4,]



const initialValue = 0

const sumWithInitialValue = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)



// console.log(sumWithInitialValue)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceSum = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceSum);