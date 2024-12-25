const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, curVal){
//     console.log(`acc : ${acc}, curVal : ${curVal}`)

//     return acc + curVal
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "py course ",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(totalPrice)
