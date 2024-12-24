//Singleton //where constructor present

//object literals

const mySym = Symbol("key1")

const JsUser = { // in object here we can put index or keys
    name: "Hitesh",
    "full name": "Hitesh Chowdhury",
    [mySym]: "mykey1",
    age: 18,
    location: "Kushtia",
    email: "khaled@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*
myArray = ["h", "i"] // here only one way to access through index
*/

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);//wrong here must have to acceshh through square bracket
// console.log(JsUser["full name"]);

// here symbolic datatypes must access through square bracket or it will act like string
// console.log(JsUser.mySym) // for this you can't use square bracket in the declaration part of JsUser
// console.log(typeof JsUser.mySym)

// console.log(JsUser[mySym]) 
// console.log(typeof JsUser[mySym])

JsUser.email = "Khaled@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abc@def.com" // don't give error but also doesn't change the object anymore
// console.log(JsUser)



JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
