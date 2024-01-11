const name="maulik"
const repocount = 100

// console.log(name + " " + repocount)

console.log(`my name is: ${name} and my repo count is: ${repocount}`)

// another way to declare string is below

const gameName = new String('mehul vadher') // its return string into obj

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt("7"))
console.log(gameName.indexOf("a"))

const newString = gameName.substring(0,7)
console.log(newString)

const anotherstring = gameName.slice(7, 9)
console.log(anotherstring)

const newstringone = "      maulik        "
console.log(newstringone.trim())

const Name = "maulik vadher"
console.log(Name.replace("maulik", "mehul"))
console.log(Name.includes("dwarkadhish"))
const char = Name.split('')
console.log(Name.split(char[7]))