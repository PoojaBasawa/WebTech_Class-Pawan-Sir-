//1. Named Function
//syntax: 
//function func_name(){
//-------- block of code------
//}

// function fun(){
//     console.log("Hello guys")
// }
// fun();

// function add(){
//     a=10
//     b=20
//     console.log("a+b =",a+b)
// }
// add()


// 2. Parameterized Function
// --> We can send any information to the function by 
//passing the inputs as a parameter

//Parameters: These are the variables without scope statements
//which are used to store data and we utilize inside the function

//Arguments: Where it will accepts always the data to store for the parameter

// function add1(x,y){
//     console.log(x,"+",y)
//     console.log(x+y)
// }
// add1(3,5)

        // function checkEligibility(name, age) {
        //       if (age > 18) {
        //         console.log(name, "You are eligible");
        //       } else {
        //         console.log(name, "You are not eligible");
        //       }
        //     }

        // checkEligibility("Pooja", 12);

//3. Return Function: Function which can return the results and it should catch by seperate variable
// and we can see output

function mul(x,y){
    console.log("Multiplication")
    return x*y
}
function sub(x,y){
    console.log("Subtraction")
    return x-y
}
function div(x,y){
    console.log("Division")
    return x/y
}
function add(x,y){
    console.log("Addition")
    return x+y
}

//change this ch=1,2,3,4 operates mul,sub,div,add
ch=3
if (ch==1){
    res=add(11,9)
}
else if (ch==2) {
    res=sub(11,9)
} 
else if(ch==3){
    res=div(11,9)
}
else if(ch==4){
    res=add(11,9)
}
else{
    console.log("wrong choice")
}
console.log(res)

//NOTE: Return should be last statement inside the function, If you write 
//anything after return statment it will not execute.

//a

//only addition
   // function add(x,y) {
        //     console.log("addition")
        //     return x+y
        // }    
        // let ch=1
        // if(ch==1) {
        //     res=add(11,9)
        //     console.log(res)
        // }
        // else{
        //     console.log("Wrong")
        // }

//additionn & multiplication

  // function add(x, y) {
  //         console.log("Addition");
  //         return x + y;
  //       }

  //       let ch = 1;

  //       if (ch == 1) {
  //         let res = add(11, 9);
  //         console.log(res);
  //       } 
  //       else if (ch =2 ) {
  //           let res = mul(11, 9);
  //           console.log(res);
  //       }
  //       else {
  //         console.log("Wrong");
  //       }



//4. Anonymous function
//The function without name is called as anonymous function.

//function expression
//function expression is a process of assigning a anonymous function to a variable and making a call

// var anony=function(){
//     console.log("I'm an anonymous function")
// }
// anony()

// let add=function(x,y){
//     return x+y
// }
// console.log(add(8,9))

//5) Call back function
//Any function which are you passing as argument those functions are called as "Callback funciton"
//ex: Ananoumous, Arrow

//AI NOTES
// A callback function is a function passed as an argument to another function, which 
// executes the callback function at a later time.

// Example:

// setTimeout(function() {
//   console.log("Callback executed!");
// }, 2000);

//must use as setTimeout(function_name)
// 1. map()
// 2. filter()
// 3. reduce()
// 4. forEach()
// 5. setTimeout()
// 6. setInterval()

//6) Higher-Order Functions (HOFs) are functions that:

// 1. Take another function as an argument (callback)
// 2. Return a function as output


//7) Arrow Function
//Arrow function is introduced in ES6 feature
// "function" keyword is not used to create arrow function
//arrow function is used mainly as callback function

//syntax:
//  ()=>{
//      set of code  
//  }

var fun2=()=>{
    console.log("I'm an arrow function")
}
fun2()

//parameterized arrow function
let fun3=(name,age,city)=>{
    console.log(name)
    console.log(age)
    console.log(city)
}
fun3("Raghu",22,"Rajamundry")

//return arrow function
var add=(x,y)=>{ return x+y}
console.log(add(50,58))

//AI NOTES
//8) Immediate Invoke Function Expression (IIFE) in JavaScript is a function that:

// 1. Is defined as an expression
// 2. Is invoked immediately after definition

(function(name) {
  console.log(`Hello, ${name}!`);
})("John");
//The expression inside ${} is replaced with its value.

//AI NOTES
//9) Asyn function
// Async functions in JavaScript allow you to write asynchronous code that's easier
// to read and maintain.

async function hello() {
  console.log("Hello");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("World!");
}

hello();
