let score = undefined //null , 33, "33a"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33" => 33
"33a" => NaN
true => 1, false => 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "anything" = true

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber)
// console.log(typeof stringNumber)

// *********** Operations ************

let value = 3
let negValue = -value

// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = " Khaled"

let str3 = str1 + str2
// console.log(str3);

/*
dont write this type of confused code
console.log("1" + 2);
console.log(1+ "2");
console.log("1" + 2 + 2);
console.log(1  + 2 + "2");

console.log((3 + 4) * 5 % 3);

console.log(+true)
console.log(true+) // error

console.log(+"")
*/

let num1 , num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
