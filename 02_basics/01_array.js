// arrays 

const arr=[1,2,3,4,5,6]
const arr1=["hello","hii"]
const arr2 = new Array(1,2,3,4,5,6)  // we can also define array like this

console.log(arr[5])

arr.push(7)
console.log(arr)

arr.pop() // remove last element from the array
arr.unshift("7") // add this value in the array in start
arr.shift() // remove first element from the array

console.log(arr.includes(6))
console.log(arr.indexOf(2))

const newarr = arr.join()
console.log(newarr)
console.log(typeof newarr)

// slice , splice 

console.log("A ", arr)
const myn1 = arr.slice(1,3) // give value from 1 to index 2 because 3 is not include 
console.log("B ", myn1)

const myn2 = arr.splice(2,3) //when we use this method in this method which value we define that value remove from the array 
console.log("c ", arr)
console.log(myn2)