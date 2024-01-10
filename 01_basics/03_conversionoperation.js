let score = 33

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// 33 => convert into number
// "33abc" => not convert this will be shown as NaN (not a number)
// true => convert into 1 or if false => its convert into 0


// for convert 0/1 into boolean do this 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// if we used empty string to convert into boolean it will be given false 
// if we used any value into string to convert into boolean it will be given true 


// for convert into string do this 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)