//string:collection of characters enclosed within a '' or " " is called as string.
//Ex:
// var str="virat"//valid
// var str1=virat//invalid
// var name="s"//valid

//string concatenation:combining one or more strings together is called as concatenation
//in order to concat two strings we should use + operator.
//ex:
// var fname="virat"
// var lname="kohli"
// console.log(fname+lname)

//how to find the length of a given string
//to find length of a string we use length property
// let city="bangalore"
// console.log(city.length)

//string comparision:
//we can compare two strings by using ==(loose equality) or ===(strict equality)
//ex for ==
//==:it will check the type and then value it will do 
//=== operation it types or not equal in that case it will do type conversion
// var a="hello"
// var b="hello"
// console.log(a==b)-----true

// var a="hello"
// var b="hello world"
// console.log(a==b)-----false

// var a="5"
// var b=5
// console.log(a==b)-----true

//right.number
//left:string//then it do type conversion to number
// var a="5"
// var b=5
// console.log(b==a)//true
//right.string
//left:number//type conversion to string

//ex for ===
//if types or not equal it will return false if types or equal 
//and then it will check with the value
var a = "5"
var b = 5
console.log(a===b)//false