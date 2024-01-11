// primitive datatype 

// there are 7 primitive datatypes in js 

// String, number, boolean, null, undefined, symbol, bigint 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)


//(2) reference datatypes (non primitive )

// Array, object, function 

const language = ["gujarati", "hindi", "english"]
const myObj = {
    name:"maulik",
    age:24,
}
const myfunction = function(){
    console.log("hello");
}