
/*
const num = [1,2,3]
const mytotal = num.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

console.log(mytotal)

*/

const book = [
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

const books = book.reduce( function (acc,item) {
    return acc + item.publish
}, 0)
console.log(books)