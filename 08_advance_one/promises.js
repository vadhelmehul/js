const promiseOne = new Promise(function(resolve, reject){
    // do an async tast 
    // db calls, cryptography, network 
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("task 2 completed")
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "maulik", email: "vadherm@gmail.com"})
    }, 1000)
})
promisethree.then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "maulik"})
        }else{
            reject("error")
        }
    }, 1000)
})

promisefour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(err){
    console.log(err)
})

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "mehul"})
        }else{
            reject("error")
        }
    }, 1000)
})

async function consumePromiseFive(){
     try{
        const response = await promisefive
        console.log(response)
     }catch(error){
        console.log(error)
     }
}

// async function alluser(){
//     try{
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//     }catch(err){
//         console.log("e:", err);
//     }
// }

// alluser()

// consumePromiseFive()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))