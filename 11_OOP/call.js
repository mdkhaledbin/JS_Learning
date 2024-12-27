function setUsername(username) {
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    // setUsername(username)
    /*
        the upper line also call the setUsername function but
        the setUsername function use that function scope "this"
        as reference. so to get that username from this current 
        function we have to give an argument "this" sothat setUsername
        function doesn't use itself's "this" as reference.
    */
    // setUsername(this, username) 
    /* 
    this upper line call setUsername functin but after calling 
    the variable decalred in that function scope lost with the function 
    itself from the call stack. so to hold that variables we have to use 
    ".call() method"
    */ 
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const khaled = new createUser("Khaled", "khaled@gmail.com", "1234")
console.log(khaled)