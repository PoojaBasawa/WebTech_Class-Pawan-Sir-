// string methods

//1. chartAt()
//2. toLowerCase()
//3. toUpper()
//4. Slice()
//5. SubString()
//6. Replace()
//7. ReplaceAll()
//8. Trim()
//9. Concat()

//1. CharAt():
// whenever from string if we need to extract a specific character we use charAt() method.

/*var str="hello world"
console.log(str.charAt(4))*/

//2. toLowercase():
// All the characters of the string will be converted to lower case.

/*var str="HELLO WORLD"
console.log(str.toLocaleLowerCase())*/

//3. toUppercase():
// All the characters of a string will be converted to uppercase()

/*var str="hello world"
console.log(str.toUpperCase())*/

//4.  Slice():
// whenever we want to extract a substring from a string we can use slice().
// In slice() we can provide -neg index values.

//SYNTAX:
// slice(startindex)
// slice(startindex,endindex)
/*var str="hello world"
console.log(str.slice(2))
console.log(str.slice(2,8))
console.log(str.slice(-3))*/

//5. subString():
// It's almost similar to slice() the differnece b/w substring() and slice() is 
// in substring it doesn't accept -neg index values.

/*var str="hello world"
console.log(str.substring(3))
console.log(str.substring(-3))*/        // it will not give any error but all the string will be printed.

//6. Replace():
// When want to replace a particular string with new string we use raplace() method.

/*var str="hello world"
console.log(str.replace("hello","hii"))*/

/*var str1="hello  hello  world"
console.log(str1.replace("hello","hii"))*/          // it will replace only one time

//7. ReplaceAll()
// To replace all the accurences with new string we can use replaceAll()

/*var str="hello hello world"
console.log(str.replaceAll("hello","hii"))*/ 

//8. Trim():
// Inorder, to remove the white spaces from the string we can use trim(), trim() remove only whitespaces before an after the string.
// It won't remove the white spaces present between the string.

/*var str="            hello world          "
console.log(str)
console.log(str.trim()+"welcome")*/

//9. ConCat():
// it is usde to concat the string.

let str="hello"
let str1="world"
console.log(str.concat(str1))