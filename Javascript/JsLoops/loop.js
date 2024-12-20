//loop-
//loops are used to complete repetative tasks easily instead of manually repeating the tasks we must take advantage of loop.
// 1.for loop
// 2.while loop
// 3.do while loop
// 4.for of loop

//1.for loop
// SYNTAX: for(initializze variable:Condition:increment/decrement){
//     set of code
// }

// for(var i=0;i<10;i++){
//     console.log("number is "+i)
// }

// 2.while loop
// SYNTAX: 
// while(condition){
//     set of Code 
//     increment/decrement
// }

// var counter=0

// while(counter<10){
//     console.log("counter value is "+counter)
//     counter++
// }

//3. do while loop
// SYNTAX:
// do{
    //set of code
// }
// while(condition)

// var count=0
// do{
//     console.log("count is "+count)
//     count++
// }
// while(count<10)

//4.for in loop

//we can iterate throught the object and we can gt the access of all keys of object properties.
//Maily this loop will access the key of the object.
//variable name must not same as key name

//SNTAX:
// for(variable_name in object_name)

// var person={
//     name:"Virat",
//     age:36,
//     city:"Mumbai",
//     gender:"Male"
// }
//access the data
// for(var data in person){
     //console.log(data) //only key name
//     console.log(person[data]) //only values
// }

//5.for of loop
//we can iterate throughout the array and we can access all the elements in an array.

//SYNTAX:
// for(variable_name of array_name)

// var arr=[10,20,40,60,70,80]
// for(var a of arr){
//     console.log(a)
// } 


//NOTE: for of can be used to used for "for in"
// var arr=[10,20,40,60,70,80]
// for(var a in arr){
//     console.log(a)
// } 

//NOTE: for of cannot be used for "for in"
// var person={ 
//     name:"Virat",
//     age:36,
//     city:"Mumbai",
//     gender:"Male"
// }
// for(var data of person){
//      console.log(data) //only key name
//     console.log(person[data]) //only values
// }