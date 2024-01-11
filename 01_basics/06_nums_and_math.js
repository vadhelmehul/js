/*
const score = 600
console.log(score)
const balance = new Number(1000)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(3))

const otherNumber = 23.888
console.log(otherNumber.toPrecision(3))

const anothernum = 10000000
console.log(anothernum.toLocaleString('en-IN'))

*/

/*---------------------------------------- maths -------------------------------- */

/*
console.log(Math)
console.log(Math.abs(-7))
console.log(Math.round(3.3))
console.log(Math.ceil(5.1)) // choose bigger value
console.log(Math.floor(5.1)) // choose lower value
console.log(Math.min(2,4,6,7,8,5))
console.log(Math.max(2,3,4,5,6,7))
*/

console.log(Math.random()) // always return value between 0 or 1
console.log((Math.random() * 10) + 1 ) // confirm that value not be zero atlease its return 1
console.log(Math.floor(Math.random() * 10) + 1 )

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
