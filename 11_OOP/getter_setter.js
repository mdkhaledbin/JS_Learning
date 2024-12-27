class User{
    constructor(email, password){
        this.email = email
        this.password  = password
    }

    get password(){
        return `${this._password}hitesh` // if here same name password used here then race condition will start
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User('hitesh@gmail.com', 'abc')
console.log(hitesh.password)