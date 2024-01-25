const coding = ["js", "ruby", "python"]
/*
coding.forEach( function (item){
    console.log(item)
})
*/

/*
coding.forEach( (item) => {
    console.log(item)
})

*/

/*

function printme(coding){
    console.log(coding)
}
coding.forEach(printme)

*/
/*

coding.forEach((item, index, arr) =>{
    console.log(item, index, arr)
})

*/

const mycoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName)
})