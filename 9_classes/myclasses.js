// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const userName = new user('maulik', 'maulik@gmail.com', '777')
// console.log(userName.encryptPassword())
// console.log(userName.changeusername())


function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptpassword = function(){
    return `${this.password}abc`
}
user.prototype.upper = function(){
   return `${this.username.toUpperCase()}`
}

const newuser = new user('maulik', 'maulik@gmail.com', '000')
console.log(newuser.encryptpassword())
console.log(newuser.upper())