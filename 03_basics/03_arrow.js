const user = {
    username : "maulik",
    price : 999,
    welcomemsg : function(){
        console.log(`${this.username} , welcome to website`)
    }
    
}
console.log(user["username"])
user.welcomemsg()
user.username = "mehul"
user.welcomemsg()

// console.log(this) // empty parantheses

// arrow function 

/*
const addNum = (num1, num2) => {
    return num1 + num2
}
console.log(addNum(5,5))

*/

// const addNum = (num1, num2) => num1 + num2 //another way to write function
const addNum = (num1, num2) => 
(num1 + num2) //another way to write function // if we write in parantheses then we dont need to add return keyword

// const addNum = (num1, num2) => ({username: "maulik"}) // for object

console.log(addNum(5,5))
