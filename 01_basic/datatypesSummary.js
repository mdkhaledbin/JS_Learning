/*
    Primitive -> 7 types
    Primitives are call by value.
    String, Numberm, Boolean, null,
     undefined, symbol, BigInt
*/

const score = 100
const scoreBalue = 100.3
const isLoggedIn = false 
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

const bigNumber = 12312312n


// console.log(id == anotherid);

/*
    Reference (Non primitive)
    They are call by reference.
    Array, Object, Functions
*/

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Khaled",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world"); 
}

// console.log(typeof bigNumber);
// console.log(typeof id);
// console.log(typeof outSideTemp);
console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Stack (Primitive), Heap (Non-Primitive)
*/

let myChannel = "Khaled55"
let anotherName = myChannel

anotherName = "tatabyebye"

console.log(myChannel);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@b=ybl"
}

let userTwo = userOne

userTwo.email = "khaled@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


