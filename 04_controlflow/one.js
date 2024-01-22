/*
const num = 16;
if(num < 15){
    console.log("your number is less than 15")
}else{
    console.log("your number is greater than 15")
}
*/
/*

const score = 200;
if(score > 100){
    const power ="fly"
    console.log(`user power: ${power}`)
}

*/

const user = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (user && debitCard){
    console.log("access granted")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("access granted")
}