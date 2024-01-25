const mynum = [1,2,3,4,5,6,7,8,9,10]

/*
const newnum = mynum.map( (item) => {
    return item ** 2
})
*/


// below method called chaining 

const newnum = mynum
.map( (item) => {
    return item * 10
})
.map( (item) => {
    return item + 1
})
.filter( (item) => {
    return item > 50
})




console.log(newnum)