// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
    
//     console.log(number1 + number2)
// }

// addTwoNumbers()

function addTwoNumbers(number1, number2) {
    
    let result = (number1 + number2)
    return result
}

const result = addTwoNumbers(2, null)

// console.log("Result", result);

function loginUserMessage(username = "Sam"){
    if(username === undefined){ //undefined == false
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("Khaled"))
console.log(loginUserMessage())
