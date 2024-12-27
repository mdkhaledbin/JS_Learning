class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const NewTeacher = new teacher("NewTeacher", "teacher@teacher.com")
// console.log(teacher.createId());
NewTeacher.logMe()
