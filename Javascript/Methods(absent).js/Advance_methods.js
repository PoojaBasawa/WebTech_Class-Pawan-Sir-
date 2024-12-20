//1.forEach()
//2.map()
//3.filter()
//4.sort()

//1.forEach():
//used to access each and every element of an array.
//it doesnot return any value.
//it will not alter original array.


// let arr=[10,"priya",true,"Ram",19,false]
// var newarr=arr.forEach((ele,index)=>{
//         console.log(ele+" "+index)

// })
// console.log(newarr)
// console.log(arr)


//2.map():it should return some value
//returned value always added in new array.
//it doesnot alter the original array.

// var arr=[10,20,30,40,50,60,70,80,90]
// var newarr=arr.map((ele,index)=>{
// return ele*10
// })
// console.log(newarr)


//3.filter():
//used to filter out the elemnts in the array
//filter callback function will return always boolean value and it will not alter original array


// var arr=[101,300,20,155,600]
// newarr=arr.filter((ele,index)=>{
//      return ele>200
// })
// console.log(newarr)
// console.log(arr)

// console.log(arr)

//4.sort():
//used to sort the array in asc or desc order

// var names=["ram","anu","priya","hari","nimo"]
// console.log(names.sort())     //sorting by alphabetical order

//sorting the num elemnts in asc order
arr=[16,3,78,65]
var newarr=arr.sort((a,b)=>{
    return a-b
})
console.log(newarr)


//desc order
arr=[16,3,78,65]
var newarr=arr.sort((a,b)=>{
    return b-a
})
console.log(newarr)