// let myName = "Khaled   "

// console.log(myName.length);
// console.log(myName.truelength);

let myHeros = new Array('thor', 'spiderman');

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.khaled = function(){
    console.log(`Khaled is present in all object.`)
}

// heroPower.khaled()

// myHeros.khaled()

Array.prototype.heyKhaled = function(){
    console.log(`Hey Khaled hello.`); 
}
// myHeros.heyKhaled()
// console.log(typeof myHeros);


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User //old syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserNamae = "Khaledbin       "

String.prototype.truelength = function(){
    // console.log(`${this}`);
    // console.log(`${this.length}`);
    console.log((`true length is: ${this.trim().length}`));
    
    
}
anotherUserNamae.truelength()
"khaled".truelength()
