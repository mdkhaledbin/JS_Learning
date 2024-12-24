const accountId = 144553
let accountEmail = "khaled@gmail.com"
var accounctPassword = "12345"
accountCity = "Kushtia"

let accountState;

// accountId = 2 // not allowed

accountEmail = "abad@gmail.com"
accounctPassword = "12321312"
accountCity = "Sylhet"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accounctPassword, accountCity, accountState]);
