//hosting
//hosting is a default behaviour of moving all the 
//declaration at the top scope before code execution
//we can do function hosting in js but we cant do variable hosting
//note:js allocates memory for all variable
//js only host declaration not initialization 

// console.log(a)
// let a=10
//by seeing above example we can conclude that variable hosting can not be done in js

//function declaration are hosted but function expression are not hosted
// function sayhello(){
//     console.log("hello")
// }
// sayhello()

greet()
let greet=()=>{
    console.log("i am arrow function")
}

// if we give greet above the function it will give error if we give below it will executes

let greet1=()=>{
    console.log("i am arrow function")
}
greet()