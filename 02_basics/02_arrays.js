// array 

const marvel_hero = ["thor", "ironman", "spiderman"]
const dc_hero = ["superman", "flash", "batman"]

//marvel_hero.push(dc_hero) // add another array in marvel_hero
//console.log(marvel_hero)

//const allhero = marvel_hero.concat(dc_hero)  // concat value in new array
//console.log(allhero)

//const all_new_hero = [...marvel_hero, ...dc_hero] // this method called as spread the value
//console.log(all_new_hero)

/*
const another_array = [1,2,3,[2,4],5,[23,[34,21]]]
const real= another_array.flat(Infinity)
console.log(real)

*/

console.log(Array.isArray("maulik"))
console.log(Array.from("maulik")) // convert this value into array  
console.log(Array.from({name: "maulik"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))