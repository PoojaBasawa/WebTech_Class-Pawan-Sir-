//1.named function
//syntax: function function_name(){
//code
//}

// function fun1(){
//      console.log("hello")
// }
// fun1()
// //
// function add(){
//     let a=10;
//     let b=20;
//     console.log(a+b)
// }
// add()

//2.parameterized function
//we can send any function to the function by passing parameter
//the input as a parameter.
//syntax:
//function function_name(parameter){
//code
//}
//function_name(arguments)

//parameters:these are the variables without scope statements.
//which is used to store the data and we utilize inside the function.
//arguments:where it will accepts always the data to store for the parameter

// function add(x,y){
//      console.log(x+y)
// }
// add(20,30)

// function details(name,age,city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// details("virat",38,"mumbai");
// details('sachin',45,'bng')


//3.return function:
//function which can return the results and it should catch by separate 
//variable and we see output
//parameter-arguments------>input----->function---->output---->return
//syntax:
//function function_name(){
//set of code
//return
//}
//ex:return normal func
// function fun(){
//         return "i am return function"
// }
// let res=fun()
// console.log(res)

// //ex:return func as parameter
// function add(x,y){
//      var results=x+y
//      return results
// }
// var res=add(90,40)
// console.log(res)

//ex3:the statements after return stmt not execute.
//return should be last stmt inside the function.
// function func2(){
//     return "im return func"
//     console.log("hello world")
//     var a=15
// }
// console.log(func2())

//4.anonymous fuction
//the function without name is called anonymous function
//this function is using as a call back function.
//syntax:
//function keyword
//function(){
//set of code
//}
//function expression:is a process of assigning a anonymous 
//function to a variable and making a call

//ex:anonymous function as named function
// var fun=function(){
//     console.log("i m anonymous")
// }
// fun()

// //ex:anonymous function as parameterized function
// let add1=function(x,y){
//      console.log(x+y)   
// }
// add1(55,34)

//ex:anonymous function with return type
// let func3=function(){
//         return "i am returned anonymous function"
// }
// var res=func3()
// console.log(res)

//***5.arrow function
//arrow function introduced in es6 feature function keyword is not used to 
//create arrow function arrow function are used mainly as call back function.
//syntax:
//()=>{
//set of code
//}

//ex:with named
// var fun4=()=>{
//     console.log('i am ')
// }
// fun4()

//ex:arrow function with parameterized function
// let details1=(name,age,city)=>{
//      console.log(name);
//      console.log(age);
//      console.log(city);
// }
// details1('virat',35,'mumbai')

// //ex:arrow function with anonymous function
// var res=()=>{
//      return("i am return arrow function")
// }
// console.log(res())