const user ={
    username: "Khaled",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to this website.`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // output {}

// can't use "this" keyword in function scope
// function chai(){
//     let username = "Khaled"
//     // console.log(this);
//     // console.log.apply(this.username) // undefined
// }
// // const chai = function(){
//     let username = "Khaled"
//     console.log(this.username); // undefined
    
// }
// chai()

// const chai = () => {
//     let username = "Khaled"
//     console.log(this.username); // undefined
//     console.log(this); // empty parentheses
     
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username : "Khaled"}) // if use () then return is not needed

console.log(addTwo(3, 4));

