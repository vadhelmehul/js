// iteration (loops) 

// for loop 

/*
let array = [1,2,3,4,"5",6,7]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index])
    
}

console.log(array)
*/
/*
for (let i= 1; i <= 10; i++){
    console.log(`outer loop value: ${i}`);
    for (let j=1; j <= 10; j++ ){
        // console.log(`inner loop value: ${j} and inner loop ${i}`)
        console.log(i + '*' + j + '=' + i*j)
    }
}
*/

/*
for(let i=1; i <= 20; i++){
    console.log(i * i);
}
*/

for(let i=1; i<=20; i++){
    if(i == 5){
    console.log(`detected 5`)
    break
    }
    console.log(i)
}