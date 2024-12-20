// charAt()
var str="Hello World"
console.log(str.charAt(9))

// toLowerCase()
var str="Hello World"
console.log(str.toLowerCase())

// toUpperCase()
var str="Hello World"
console.log(str.toUpperCase())

// slice()
var str="Hello World"
console.log(str.slice(2))
console.log(str.slice(2,8))
console.log(str.slice(-3))

//subString()
var str="hello world"
console.log(str.substring(3))
console.log(str.substring(-3))  // it will not give any error but all the string will be printed.

// replace()
var str="hello world"
console.log(str.replace("hello","hii"))

var str1="hello  hello  world"
console.log(str1.replace("hello","hii"))   // it will replace only one time.

// replaceAll()
var str="hello hello world"
console.log(str.replaceAll("hello","hii"))

// trim()
var str="hello world"
console.log(str)
console.log(str.trim()+" welcome")

// concat()
let str2="hello"
let str3="world"
console.log(str2.concat(str3))
