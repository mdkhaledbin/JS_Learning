let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


let myCreatedDate = new Date("12-24-2024") //Date(2024, 11, 24, 5, 3, 66) // Date("2024-12-24"), Date("12-24-2024")
// console.log(myCreatedDate.toString())

let mytime = Date.now() //this gives only my timestamp

// console.log(mytime)

// let dateTime = new Date(mytime)
// console.log(dateTime.toString())

// console.log(Math.floor(Date.now() / 1000)) // in second



let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(newDate.getHours())
// console.log(newDate.getMinutes())

console.log(newDate.toLocaleDateString('dejault',
    {
        weekday: "long",
        timeZone: 'BST'
    }
))

