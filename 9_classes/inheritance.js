class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username )
        this.email = email;
        this.password = password
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const course = new Teacher ("mehul", "mehul@gmail.com", "123")
course.addcourse()