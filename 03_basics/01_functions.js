function myName(){
    console.log("m")
    console.log("a")
    console.log("u")
    console.log("l")
    console.log("i")
    console.log("k")
}

myName()

/*
function sum(a,b){
    console.log(a + b)
}
sum(5, 5)

const result = sum(5, 5)
console.log("result: ", result) // it will threw an undifined value because in this method we didnt return the value  

*/

/*
function sum(a, b){
    // let result = a + b
    // return result
    return a + b //another method to return value
}

const result = sum(5, 5)
console.log("the sum of given value is: ", result)
*/

//

/*

function loginUserMsg(username){
    // function loginUserMsg(username = "maulik"){  we can store default value in the function
    if(username === undefined){
        console.log("please enter a value")
        return
    }
    // if(!username){
    //     console.log("please enter a value")
    //     return
    // }    same work as above but this method used by pro develop not equal operator

    return `${username} just logged in`
}
// const msg = loginUserMsg("maulik")  //store value in new variable
console.log(loginUserMsg())

*/

// many time we create ecommerce website in that case user add multiple value in the cart in this case we can handle those value like this 

function calculateCartPrice(...num){  // ... called rest operator
    return num
}
console.log(calculateCartPrice(100,200,300))

// function calculateCartPrice(val1, val2, ...num){  // ... called rest operator
//     return num
// }
// console.log(calculateCartPrice(100,200,300,400,500,600))
//in above case value return from 300 to end because first two value store in val1 or val2

const user = {
    username: "maulik",
    age: 24
}

function handleObject(anyObject){
    console.log(`username is: ${anyObject.username} or age is: ${anyObject.age}`)
}
// handleObject(user)  

/* another way to call function
handleObject({
    username: "mehul",
    age: 24
})
*/

// for array 

const myarray = [100, 200, 300]

function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myarray)) 
console.log(returnSecondValue([100, 200, 300]))
