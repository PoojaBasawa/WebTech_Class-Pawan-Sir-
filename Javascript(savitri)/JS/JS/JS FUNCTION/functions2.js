//call back function:Any function which are u passing as argument those 
//functions are called call back function.
//The suitable call back functions are:arrow function and anonymous function

//higher order function:any function which is taking another function as argument 
//that function is called as higher order function
//or functions are called higher order function only if it takes minimum one
// function as argument.
function print(){
    console.log("welcome to js class")

}

function add(x,y){
    console.log(x+y)
}

function fn(f){
   //console.log(f)
   f()
}

//fn(print())
//fn(add(10,80))
fn(function(){
console.log("i am anonymous function")
})
fn(()=>{
    console.log("arrow function")
})

//8.immediately invoked function expression(iife's):
//iife's are functions that are defined and executed immediately.
//in one js file we should have only one immediate function.
//ex:
//(function(){
    //console.log("hello word")
//})()

// (function(name,city){
//     console.log(name)
//     console.log(city)
// })("virat","mumbai")

//9.async function():introduced in es8 version of js
//it reasier to work with promises. they are declared with async keyword
//and use the 'await' keyword to pause execution until the promise is resolved.
//ex:
//await:to pause the function or promises.
//fecth:to fetch the data from back end
async function fetchData(){
    let response=await fetch('https://fakestoreapi.com/products')
    //console.log(response)
    //how to convert it into a json format:user understand format, until the conversion 
    //the data must be pause so using await keyword
    //in js every thing in object format.[key value format]
    let data=await response.json()
    console.log(data)
}
fetchData()


