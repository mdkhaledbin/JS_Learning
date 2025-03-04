//array

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["khaled", "khirul", "Nazrul"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]) // access element by index

//Array methods

myArr.push(7)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(8) // add the value in the first
// console.log(myArr)
myArr.shift() // left the first element, reduce the size
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(typeof myArr);
// console.log(typeof newArr);

//******* slice splice */

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3) //exclude last number, both are index
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3) // cut the splice from the main array
console.log(myn2)
console.log(myArr)



