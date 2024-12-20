//arrays:
//it is a indexed collection of different data
//arrays are kind of datastructure where we can 
//store any data and there is no restriction about the data we are storing.
//and those data we are going to store we call it as an element.
//in js array we can add any type of datatype inside it.

//how to declare an array?
//1.array literal
//2.array constructor.

//array literal:
// var array_name=[]
// or
// let array_name=[]
// or
// const array_name=[]

//ex:
// let arr=[20,'virat',true,20,{name:'raj',age:10}]
// console.log(arr)

//array constructor:
// var array_name=new array()
//or
//let
//or
//const
//ex:
// const arr=new Array(20,'virat',true,20,{name:'raj',age:10})
// console.log(arr)

//how to access data present in array:
// let arr=[20,'virat',true,20,{name:'raj',age:10}]
// console.log(arr[2])
// console.log(arr[4])
// console.log(arr[1])
// console.log(arr[4].age)

//how to get size of an array
//we can use length property to find the size of an array
// let arr=[20,'virat',true,20,{name:'raj',age:10}]
// console.log(arr.length-1)
//-1 to get index nuumber of value

//how to create 2d array:
// let arr=['virat',18,true,[10,50,false],'raj','bangalore']
// console.log(arr)
// console.log(arr[4])
// console.log(arr[3][1])

//array methods:there are total 36 methods.
//1.push()
//2.pop()
//3.unshift()
//4.shift()
//5.indextOf()
//6.join()
//7.includes()
//8.reverse()
//9.slice()
//10.splice()

//push():when we need to push any data to an array we can use push method 
//push method always appends the data the end of an array.
//ex:
// var arr=[]
// arr.push("virat")
// arr.push(10)
// arr.push(true)
// console.log(arr)

//pop():whenever we need to remove the elements from the array we can use pop method.
//pop() removes the element which is present at the last index of an array
//ex:
// let arr=[10,"sachin",true,"virat",20,false]
// console.log(arr)
// arr.pop()
// arr.pop()
// console.log(arr)

//unshift():when we need to push the data to the
// beginnig of the array we use unshift method.
//ex:
// let arr=[10,"sachin",true,"virat",20,false]
// console.log(arr)
// arr.unshift(100)
// console.log(arr)
// arr.unshift('welcone')
// console.log(arr)

//shift():to remove the element from the begining of an array we can use shift method.
// let arr=[10,"sachin",true,"virat",20,false]
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.shift()
// console.log(arr)

//indexOf():this method is used to find the index value of perticular element. if the 
//element is available inside the array then the indexof method will return index value
//and if an element is not present in an array then it returns -1 value.
// let arr=[10,"sachin",true,"virat",20,false]
// console.log(arr)
// console.log(arr.indexOf("sachin"))
// console.log(arr.indexOf(100))

//join():whenever we need to join all the elements inside the array we can use join method.
//join method will join the all the elements of an array and return it in the string format.
// let arr=[10,"sachin",true,"virat",20,false]
// console.log(arr)
// console.log(arr.join())
// console.log(arr.join(' '))
// console.log(arr.join('$'))

//includes():check whether the data passed to head is present inside the array 
//or not if its present then it returns true otherwise it returns false.
// let arr=[10,"sachin",true,"virat",20,false]
// console.log(arr.includes(10))
// console.log(arr.includes("sachin"))

//reverse():inorder to reverse an array we use reverse method
// let arr=[10,"sachin",true,"virat",20,false]
// console.log(arr.reverse())

//slice():whenever we need to extract perticular element from array 
//we can use particular method it will not alter the original array
//syntax:
//slice(startindex)
//slice(startindex,endindex)
//ex:
// var arr=[10,20,30,40,50,60,70,80,90]
// console.log(arr.slice(4))
// console.log(arr.slice(2,6))
// console.log(arr)

//splice():extraction starts at the start index
//extracts the length number of elements from the array
//it will alter the original array
//syntax:
//splice(startindex,length)
//ex:
// var arr=[1,2,3,4,5,6,7,8,9]
// console.log("original arr"+arr)
// let splicedarr=arr.splice(2,4)
// console.log("spliced arr"+splicedarr)
// console.log("original array after splice"+arr)


var arr=[10,20,30,40,50,60,70,80,90]
var newarr=arr.map((ele,index)=>{
    return ele*10
})
console.log(newarr)
console.log(arr)