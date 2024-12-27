const user = {
    usename: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got use details from database.");
        console.log(`Username: ${this.usename}, loginCount: ${this.loginCount}`);
    }
}

// console.log(user.usename);
// console.log(user.getUserDetails());

/**
const user2 = {
    usename: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got use details from database.");
        console.log(`Username: ${this.usename}, loginCount: ${this.loginCount}`);
    }
}

console.log(user2.usename);
console.log(user2.getUserDetails());
 */



// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount,isLoggedin) {
    this.usename = username
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this //if don't return explicitly then also return this
}

const userOne = new User("Khaled", 3, true)
const userTwo = new User("Java", 1, false)

console.log(userOne.constructor)
// console.log(userOne)
// console.log(userTwo)