//ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

//behind the same

function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password

    this.encryptPassword = function(){
        return `${this.password}abc`
    }

    this.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }
}

// User1.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

const tea = new User1("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())

