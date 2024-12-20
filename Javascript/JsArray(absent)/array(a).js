//Array
//It is a indexed collection of different data 
//Arrays are kind of data constructur where we can store any data and 
//there is no restriction about the data we are storing
//This data we going to call as element
//In Js array we can add any type of datatype inside it

//How to declare an array?
//Array can be declared in 2 ways
//1. Array literal 2. Array constructor

//1.Array Literal

// var array_name=[]
// OR
// let array_name=[]
// OR
// const array_name=[]

// let arr=[20,"Virat",true,20.89,{name:"Raj",age:30}]
// console.log(arr)

//2.Array Constructor

// var array_name=new Array()
// OR 
// let array_name=new Array()
// OR
// const array_name=new Array()

// const arr=new Array(20,"Virat",true,20.89,{name:"Raj",age:30})
// console.log(arr)

//How to access the data present in an array?
// let arr=[20,"Virat",true,20.89,{name:"Raj",age:30}]
// console.log(arr[2])
// console.log(arr[1])
// console.log(arr[4])
// console.log(arr[4].age) 
// console.log(arr[4].name) 

//How to get size of an array?
//We can use the length property to find the size of an array

// let arr=[20,"Virat",true,20.89,{name:"Raj",age:30}]
//length find out
// console.log(arr.length)
//length of index find out
// console.log(arr.length-1) 


//How to create 2D array or 2 dimentional(inside array inside array)

let arr=["Virat",18,true,[10,50,false],"Raj","Bangalore"]
console.log(arr)
console.log(arr[4]) 
console.log(arr[3][1]) 