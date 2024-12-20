//asynchronous programming
//asynchronous programming is a programming paradigm that
//allows tasks to be executed concurrently,without blocking
//the main thread of execution
//this is approach particularly useful when dealing with
//operations that might tabke time to complete such as
//network request,file i/o or timers,allowing the program to
//continue running other tasks
//asynchronous programming can be done by using
//times,promises,async and await

//promise in javascript
//these are the way to handle the synchronous operations
//a promise is a js object that links producing
//code and consuming code that represent a view may be
//available now or in the future or never

//the promise object can be in any 3 states
//1.pending
//2.fulfilled
//3.rejected

//                     promises
//                        |
//                        |
/// ...............................................
//   |                      |                        |
//fulfilled              pending                  rejected
//   |                                               |
//   v                                               V
//  resolve()                                       reject()
//   |                                               |
//   V                                               V
//   then()                                          catch()


//creating a promise
//create a promise using promise constructor take a
//function with two parameters resolve and reject

//here the promise will be either be resolved or it will 
//be rejected

let isplaced=true
let promDemo=new Promise((resolve,rejected)=>{
    if(isplaced){
        resolve("promise is resolved")
    }
    else{
        reject ("promise is rejected")
    }
})

//handling promise result
//we can use .then() method to handle the promise result
//is resolved. then we use .catch method 
//to handle the error

promDemo.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})