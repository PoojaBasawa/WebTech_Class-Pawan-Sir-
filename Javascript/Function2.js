/*function print(){
    console.log("Welcome to js class")
}

function add(x,y){
    console.log(x+y)
}

function fn(f){
    //console.log(f)
    f()
}
*/
// fn(print())
// fn(add(10,80))

// fn(function(){
//     console.log("I am anonymous function")
// })
fn(()=>{
    console.log("arrow function")
})

//8.IIME's
// (function(){
//     console.log("Hello World")
//  })  () 

// (function(name,city){
//     console.log(name)
//     console.log(city)
// })("Virat","Mumbai")

// 9. Async Function(fetch-chrome API website copy & paste)

// async function fetchData() {
//     let response=await fetch('https://fakestoreapi.com/products/1')
//     // console.log(response)
//     let data=await response.json()
//     console.log(data)
// }
// fetchData() 