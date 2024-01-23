//falsy value // false value

// false, 0, -0, bigint= 0n, "", null, undefined , NaN

// truthy value 

// "0", 'false', " ", [], {}, function(){}

// to find empty variable or obj do this 

/*
if(user.length === 0){
    console.log("value")
}
*/

/*
const myObj = {}

if (Object.keys(myObj).length === 0){
    console.log("value")
}

*/

// nullish coalescing operator (??): null undefined 

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);

// terniary operator 

// condition ? true : false 

const icecream = 100
icecream <= 80 ? console.log("less than 80") : console.log("more than 80")