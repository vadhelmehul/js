// immediately invoked function expression (IIFE)
/*

function chai() {
    console.log(`DB CONNECTED`)
}
chai()

*/

(function chai() {
    console.log(`DB CONNECTED`)
})();                   //      we can also execute function like this 

( (name) =>{
    console.log(`DB CONNECTED TO: ${name}`)
})('maulik')