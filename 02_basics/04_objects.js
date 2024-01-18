/*
const tinderUser = {

}

tinderUser.Id = "123www"
tinderUser.name = "maulik"
tinderUser.isloggedIn = false

// console.log(tinderUser) 

const regularUser = {
    email: "vadhelmehul1@gmail.com",
    userfullname: {
        firstname: "mehul",
        lastname: "vadhel"
    }
}

console.log(regularUser.userfullname)
console.log(regularUser)

const user1 = {1 : "a", 2 : "b"}
const user2 = {3 : "a", 4 : "b"}
// const user3 = Object.assign(user1, user2)
//const user3 = Object.assign({}, user1, user2) // another way to assign value(merge) in one object

const user3 = {...user1, ...user2} // we can also assign value like this (this is spread method)
console.log(user3)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name')) // it will show if the entered property exist or not in this object
*/

// object distructuring

const course= {
    coursename: "javascript",
    price: "999",
    courseinstructor: "maulik"
}

// course.courseinstructor 

const {courseinstructor: instructor} = course //another way to get value in object
// console.log(courseinstructor)
console.log(instructor)


/*   json is look like this in object type
{
    "name" : "maulik",
    "surname" : "vadher"
}
*/

/* json also in array type and its look like this

[
    {},
    {},
    {}
]

 */