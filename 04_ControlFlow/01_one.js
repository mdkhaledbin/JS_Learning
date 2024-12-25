//if

const temperature = 41

// if(temperature < 50){
//     console.log(`Less than 50.`);
    
// }else{
//     console.log(`Temperature is greater than 50`);
// }
// <, >, <=, >=, ==, ===, !=

const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power ${power}`);
// }

const balance = 1000

// if(balance > 500) console.log("Test");

const UserLoggedIn = true
const debitCard = true

// if(UserLoggedIn && debitCard){
//     console.log("Allow to buy course.");
// }

// OR ||

//Switch

const month = 3

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case matched..");
        break;
} // if not break statement added then after matching with any 
// case then below code will continue running