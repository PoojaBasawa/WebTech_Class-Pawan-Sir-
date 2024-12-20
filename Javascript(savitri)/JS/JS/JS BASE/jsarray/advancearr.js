//advance array methods:
//1.forEach()
//2.map()
//3.filter()
//4.sort()

//forEach():if we want to access each and every  element of an array we are using forEach method()
//forEach method will not return any value and it will not alter original array
//ex:
// let arr=[10,"sachin",true,"virat",50,false]
// var newarr=arr.forEach((ele,index)=>{
// console.log(ele+" ",+index)
// })
// console.log(newarr)
// console.log(arr)

//map():should return some value
//returned value always added in the array
//map() will not alter the original array
// ex:
// var arr=[10,20,30,40,50,60,70,80,90]
// var newarr=arr.map((ele,index)=>{
//     return ele*10
// })
// console.log(newarr)
// console.log(arr)

//filter():it is used to filter element or data from the array based 
//on certain condition
//filter callback function will return always boolean value
//it will not  alter the original array
//it will create a new array
// var arr=[101,300,20,355,600]
// let newarr=arr.filter((ele,index)=>{
//     return ele>200
// })
// console.log(newarr)
// console.log(arr)

//sort():used to sort the array in ascending or descending order
//ex:
// var names=["sachin","akash","savitri","karthik"]
// console.log(names.sort())

//in a ascending order:
// var arr=[10,3,5,17]
// var newarr=arr.sort((a,b)=>{
//     return a-b
// })
// console.log(newarr)