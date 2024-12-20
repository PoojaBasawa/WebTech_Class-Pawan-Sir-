//Array method
// 1.push()
// 2.pop()
// 3.unshift()
// 4.shift()
// 5.indexOf()
// 6.join()
// 7.includes()
// 8.reverse()
// 9.slice()
// 10.splice()

//1.push() method
//When we need to push any data to an array we can use push() method.
//push() method always appends the data to the end of an array

// var arr=[]
// arr.push("Virat")
// arr.push(18) 
// arr.push(true)
// console.log(arr) 


//2.pop() method
//Whenever we need to remove the elements from the array we can use pop() method.
//Pop method removes the element which is present at the last index of an array.

// let arr=[10,"Sachin",true,"Virat",18,false]
// console.log(arr)
// arr.pop()
// arr.pop()
// console.log(arr)

//3.unshift() method
//When we need to push the data to the beginning of the array we use the unshift() method

// let arr=[10,"Sachin",true,"Virat",18,false]
// console.log(arr)
// arr.unshift(100)
// arr.unshift("Welcome")
// console.log(arr)

//4.shift() method
//To remove the element from the begning of an array we ca use shift() method

// let arr=[10,"Sachin",true,"Virat",18,false]
// console.log(arr)
// arr.shift()
// arr.shift() 
// console.log(arr) 

//5.indexOf()
//This method is used to find the index value of perticular element if the element is 
//not available inside the array then the indexOf() method return -1

// let arr=[10,"Sachin",true,"Virat",18,false] 
// console.log(arr.indexOf("Sachin"))
// console.log(arr.indexOf(100))

// OR

// let arr=[10,"Sachin",true,"Virat",18] 
// 		    var abc=arr.indexOf("Sachin")
// 		    console.log(abc)

//6.join()
//Whenever we need to join all the elements inside the array join() method should be used
//join() will join all elements of an array and return it in the string format 

// let arr=[10,"Sachin",true,"Virat",18,false] 
// console.log(arr)
// console.log(arr.join())
// console.log(arr.join(''))
// console.log(arr.join(' '))
// console.log(arr.join('$'))

//6.join():
//used to join all the elements inside the array.
//It join all the elemnts in the array and return the output in string format

// var arr=["riya",20,"bnglr",true,["Rama"],false]
// console.log(arr)
// console.log(arr.join())   //returns in string
// console.log(arr.join(' '))

//7.includes():
//To check whether the element is present or not.
//if the element is presnt it returns true otherwise returns false

// let arr=[10,"priya",true,"Ram",19,false]
// console.log(arr.includes("priya"))
// console.log(arr.includes(16))

//8.reverse():
//used to reverse an array

// let arr=[10,"priya",true,"Ram",19,false]
// console.log(arr)
// console.log(arr.reverse())

//9.slice():
//used to extract particular elements from array .
//It will not alter the original array
//syntax:
//slice(startindex) or
//slice(startindex,endindex)
//WE CAN SAY IT IS INCLUSIVE.

// var arr=[10,20,30,40,50,60,70,80,90]
// console.log(arr.slice(4))
// console.log(arr.slice(2,5))

//10.splice():
//syntax:
//splice(startindex,length)
//extracts start at the start index and extracts the length no.of elements from array
//it alters the original array
//WE CAN SAY IT IS EXCLUSIVE DUE TO THE LENGTH.

// var arr=[10,20,30,40,50,60,70,80,90]
// console.log("original array"+arr)
// let spliced=arr.splice(2,4)                 //startindex,length
// console.log("spliced array"+spliced)
// console.log("original" +arr)

// var arr=[1,2,3,4,5,6]
// console.log(arr.splice(2,3))
// console.log(arr)

//AI_NOTES
const arr = [1, 2, 3];
arr.splice(5, 2); // Start exceeds array length
console.log(arr); // Output: [1, 2, 3]

const arr2 = [1, 2, 3];
arr2.splice(1, 10); // DeleteCount exceeds remaining elements
console.log(arr2); // Output: [1]


Real-World Examples

1. Removing unwanted items from a shopping cart:


const cart = ['item1', 'item2', 'item3', 'item4'];
cart.splice(cart.indexOf('item2'), 1); // Remove item2
console.log(cart); // Output: ['item1', 'item3', 'item4']


2. Inserting new elements into a sorted array:


const sortedArr = [1, 3, 5, 7];
sortedArr.splice(2, 0, 4); // Insert 4 at index 2
console.log(sortedArr); // Output: [1, 3, 4, 5, 7]


3. Updating a todo list:


const todoList = ['task1', 'task2', 'task3'];
todoList.splice(todoList.indexOf('task2'), 1, 'newTask2');
console.log(todoList); // Output: ['task1', 'newTask2', 'task3']
