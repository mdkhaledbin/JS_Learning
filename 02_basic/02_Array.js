const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros] //spread operation
// console.log(allNewHeros)

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(1) // in flat how many depth you need, infinity can also be used 
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))

// console.log(Array.from("hitesh")) // string become new array but string remains string

// console.log(Array.from({name: "hitesh"})) // can't make array because of undefined of which part needs to be array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))
