const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task one complete");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise One consumed.")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task two complete.");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Promis consumed again")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"Khaled", email:"Khaled@khlaed.com", city:"Kushtia"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({name:"nuhupaikumbar", email:"kbk@gmail.com", pass:"1234"})
        }else{
            reject("Something went wrong.")
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user)
    return user.name
}).then((name) => {
    console.log(name)
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log("The promise either resolved or rejected."))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({name:"JavaScript", email:"js@gmail.com", pass:"1234"})
        }else{
            reject("JS went wrong.")
        }
    }, 1000);
})

async function consumepromiseFive() {
    try {
        const resoponse = await promiseFive
        console.log(resoponse)
    } catch (error) {
        console.log(error)
    }
}
consumepromiseFive()


async function getallUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data)
    }catch(error){
        console.log("E:", error); 
    }
}
getallUsers()


fetch('https://api.github.com/users/mdkhaledbin')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) => console.log(error))