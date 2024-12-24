// const tinderUser = new Object() // singleton object
const tinderUser = {} //Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}
// console.log(regularUser);

// object addition

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}

// const obj3 = {obj1, obj2} //object inside object become so don't use to concatante
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2) // adding '{}' confirm surely confiramtion adn store it in empty object
// console.log(obj3);
// console.log(obj1);//if {} used concatanated object will be store in first parameter

//spread operation
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

//when information come from DB, it comes as array of object

const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
    {
        id: 4,
        email: "user4@gmail.com"
    }
]

// console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // more used in DB work
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))