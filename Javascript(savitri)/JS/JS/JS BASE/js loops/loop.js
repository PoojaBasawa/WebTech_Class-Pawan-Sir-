//what are loops:
//loops are used to perform tasks repeatedy, instead of 
//manually repeating the task we must take advantage of loops.
//types of loops:
//for loop
//while loop
//do while loop
//for in loop
//for of loop

//for loop:
//syntax:
//for(initialize variable,condition,increment or decrement){
//set of code
//}
//ex:
// for(var i=0;i<10;i++){
// console.log("number is"+1)
// }

//while loop:
//syntax:
//var intialization to zero
//while(condition){
//set of code
//increment or decrement value
//}
//ex:
// var counter=0
// while(counter<10){
//     console.log("counter value is"+counter)
//     counter++
// }

//do while loop:
//syntax:
//variable initialization to zero
//do(
//set of code
//)
//while(condition)
//ex:
// var count=0
// do{
//     console.log("count is" +count)
//     count++
// }
// while(count<10)

//for in loop:
//we can iterate throughout the  object and we can get the the access of all keys 
//of object properties mainly this loop will access the keys of the object
//syntax:
//for(variable name in object_name)
//ex:
// var person={
//     name : "virat",
//     age : 30,
//     city : "bangalore",
//     gender : "male"
// }
// for(var data in person){
    // console.log(data)
    //only for keys
    //console.log(person[data])//only for values
 //}

//for of loop:
//we can iterate throughout the array and we can access all the elements in an array.
//syntax:
//for(variable name of array_name)
//ex:
// var arr=[10,20,30,40,50,60,70,80,90]
// for(var a of arr){
//     console.log(a)
// }

// var person={
//     name : "virat",
//     age : 30,
//     city : "bangalore",
//     gender : "male"
// }
// for(var a of person){
//     console.log(a)
// }-----.error for of is not used for object

// var arr=[10,20,30,40,50,60,70,80,90]
// for(var data in arr){
      //console.log(data)//only for keys
        // console.log(person[data])//only for values
// }
//we can use for in also for array.

