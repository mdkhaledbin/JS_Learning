let a = 10
const b = 20
var c = 30

if(true){
    let d = 10;
    const e = 20;
    var f = 15;
    g = 30;
}

// console.log(d) // error as should be 
// console.log(e); // error as should be
// console.log(f); // don't give error and give the value, so don't use var
// console.log(g); // same act as var


// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Khaled"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website) // will give error as normal
    two()
}
// one()


if(true){
    const username = "KHaled"
    if(username == "KHaled"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website); // error as normal
}

//console.log(username) // error as normal


//++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++
addone(7)//give right execution
function addone(num) {
    return num + 1
}
addone(5)

// addTwo(8) // give error as normal
const addTwo = function(num){
    return num + 2
}
addTwo(6)