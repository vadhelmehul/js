function one(){
    const username = "maulik"

    function two(){
        const website = "youtube"
        console.log(username);
    }
}



//////////////

if(true){
    const username = "maulik"
    if(username === "maulik"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website) // threw an error because website scope is block scope
}

// console.log(username)  // threw an error because username scope is block scope


////////////////////////////////

function addone(num){
    return num + 1
}
console.log(addone(5))

const addtwo = function(num){
    return num + 2
}