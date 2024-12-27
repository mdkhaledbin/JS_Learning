// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bni");
        
    }
}

// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false, // name will not be enumerable
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}