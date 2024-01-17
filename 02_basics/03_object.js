// object literals 

const mysyb = Symbol("key1")

const user ={
    name: "maulik",
    "full name": "maulik vadher",
    [mysyb] : "key1",
    age: 24,
    location: "surat",
    email:"vadhelmehul1@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
// console.log(user.mysyb)
// console.log(typeof user.mysyb)
console.log(typeof user[mysyb])

// for change the value in object do like this 


//Object.freeze(user) // after this syntax you can not change the value of keys , its not threw an error but its freeze your object
user.name = "mehul"
console.log(user.name)
console.log(user)

// function in object 

user.greeting = function(){
    console.log(`hey your name is:  ${this.name}`)
}

console.log(user.greeting())
