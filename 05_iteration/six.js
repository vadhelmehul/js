/*
const mynum = [1,2,3,4,5,6,7,8,9,10]

// const newnum = mynum.filter( (item) =>{
//     return item > 5
// })

const newnums = []

mynum.forEach( (num) => {
    if( num > 5){
      newnums.push(num)
    }
})

console.log(newnums)

*/

const books = [
    {
        book: 'book1',
        genre: 'fiction',
        publish: 1980
    },
    {
        book: 'book2',
        genre: 'history',
        publish: 1981
    },
    {
        book: 'book3',
        genre: 'fiction',
        publish: 1980
    },
]


const mybook = books.filter( (item) => {
    // return item.genre === 'fiction'
    // return item.publish == 1980
    // return item.book != 'book3'
    return item.genre === 'fiction' && item.publish === 1980
})

console.log(mybook)