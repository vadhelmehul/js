// dates 

// let mydate = new Date();
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

// let mycreateddate = new Date(2024, 0, 16)
// console.log(mycreateddate.toDateString())

// let mycreated = new Date(2024, 0, 16, 5, 3)
// console.log(mycreateddate.toLocaleString())

let mycreate = new Date("01-16-2024")
// console.log(mycreateddate.toLocaleString())

let mytimestamp = Date.now()

console.log(Math.floor(Date.now()/1000));
// console.log(mycreate.getTime());

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: 'long',
})
console.log(newDate)