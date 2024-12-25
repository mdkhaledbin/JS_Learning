const coding = ["js", "ruby", "java", "py", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
    
// } )

// coding.forEach((item) =>{
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // give only the refernce of funciton

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr )
// })


const myCoding = [ //array of object
    {
        languageNmae: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageNmae: "Java",
        languageFileName: "java"
    },
    {
        languageNmae: "Python",
        languageFileName: "py"
    },
    {
        languageNmae: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageNmae);
    
})