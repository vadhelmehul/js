/*
const user ={
    username: "maulik",
    loginCount: 5,
    signedIn: true,
    getuser: function(){
        // console.log("got date from the database");
        console.log(`username: ${this.username}`)
    }
}

console.log(user.username);
console.log(user.getuser())

*/

function user(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    return this
}

const userone = new user("maulik", 10, true)
const usertwo = new user("mehul", 1, false)


console.log(userone)
console.log(usertwo)
