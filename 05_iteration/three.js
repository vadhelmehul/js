// for of loop 

const arr = [1, 2, 3, 4, 5, 6, 7]

for (const num of arr) {
    // console.log(num)
}

const greeting = "hello maulik"
for(const greet of greeting){
    // console.log(greet)
}

// map 

const map = new Map()
map.set('IN', "India")
map.set("FR", "France")
map.set('IN', "India") // do not print this value because its known for his unique value


// console.log(map)

// for use forof loop in map do this

for (const [key, value] of map){
    console.log(key, ":-", value)
}