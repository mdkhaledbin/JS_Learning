// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hellow world!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

const map = new Map()

map.set('Ban', "Bangladesh")
map.set('Fr', "France")
map.set("IND", "India")
map.set("Ban", "Bangladesh")

// console.log(map);   

// for (const key of map) { // output as array
//     console.log(key);
// }


// for (const [key, val] of map) {
//     console.log(key, ":-", val);
    
// }


const myObj = {
    "game1": "NFS",
    "game2": "Spiderman"
}

// below will not work, on object forof doesn't work like this
// for (const [key, val] of myObj) {
//     console.log(key, ":-", val);
// }