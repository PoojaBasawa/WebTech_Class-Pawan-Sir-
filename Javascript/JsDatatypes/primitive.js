//Datatype: It is used to define type of data which we are adding to variable.

//1.number 
var num=27
let number=35.6589
console.log(num)
console.log(number)


//2.string type: any data is enclosed with '' or "" will comes under string type

var name="Ramu";
let city="Mumbai"
console.log("name =",name)
console.log("city =",city)
var age=17
if (age>=18){
    console.log("age =",age)
    //console.log("age ="+age)
    //, or + can be used
}
else{
    console.log("Your age is low")
}

// var age=20
// if(age<=18){
//     console.log("U R eligible bcz ur age is = ",age)
// }
// else{
//     console.log("not eligible bcz ur age is = ", age)
// }

//3.boolean type: any variables which contains value True or False

var isplaced=true
let isdone=false
console.log(isplaced)
console.log(isdone)
// the above 3 data types and object data type are more used datatypes in JS

// var age=18;
// var isAdult=age>10;
// console.log(isAdult);

// let user = {
//           name: "John",
//           email: "john@example.com",
//           isActive: true,
//         };

//         if (user.isActive) {
//           console.log("User is active");
//         } else {
//           console.log("User is inactive");
//         }

/*In JS we have special datatypes */
//4. undefined

var a
console.log(a)

//5.null
let b=nullvar
console.log(b)


// let user = {
//   id: 1,
//   name: "John",
//   address: null
// };

// if (user.address === null) {
//   console.log("User address is not available");
// }


//6.BigInt datatype:
/* \--> any value which is greater than > (2^53)-1 is comes under bigint.
   --> value which is less than < (2^53)-1 comes under number datatype */
ba=BigInt(12345698874569314698745632414598)
console.log(ba)

//output:12345698874569314104282460454912n -- observe last n means it is bigint

//7.symbol datatype
/* any data which is created using symbol() constructor comes under this data type */


                                /*======== typeof operator ========= */

// It is a special operator
//used to find the datatype of any variable
//syntax: typeof <variable_name>

var id=27
console.log(typeof id) //number
let name2="Sai"
console.log(typeof name2) //string
var bool=true
console.log(typeof bool) //boolean

//Object datatype

var person={}
console.log(typeof person) //object

var names=[]
console.log(typeof names) //object

// In JavaScript, semicolons (;) are used to separate statements. While they are not always necessary, they are highly recommended to avoid errors and improve code readability.

// Why semicolons are important:

// 1. Statement separation: Semicolons distinguish between independent statements.
// 2. Prevents errors: Missing semicolons can lead to syntax errors or unexpected behavior.
// 3. Code readability: Semicolons improve code clarity and organization.

//AI NOTES(PRIMITIVE & NONPRIMITIVE DATATYPES

// Primitive Data Types:

// Primitive data types are immutable, meaning their values cannot be changed once created.

// Characteristics:

// 1. Immutable
// 2. Stored in memory as a single value
// 3. Compared by value (===)
// 4. No methods or properties

// Examples:

// 1. Number (e.g., 123, 3.14)
// 2. String (e.g., "hello", 'hello')
// 3. Boolean (e.g., true, false)
// 4. Null (e.g., null)
// 5. Undefined (e.g., undefined)
// 6. Symbol (ES6+, e.g., Symbol('hello'))

// Non-Primitive (Reference) Data Types:

// Non-primitive data types are mutable, meaning their values can be changed after creation.

// Characteristics:

// 1. Mutable
// 2. Stored in memory as a reference
// 3. Compared by reference (===)
// 4. Have methods and properties

// Examples:

// 1. Object (e.g., {name: 'John', age: 30})
// 2. Array (e.g., [1, 2, 3])
// 3. Function (e.g., function() {})
// 4. Date (e.g., new Date())
// 5. Map (ES6+, e.g., new Map())
// 6. Set (ES6+, e.g., new Set())

// Key differences:

// 1. Immutability: Primitive types are immutable, while non-primitive types are mutable.
// 2. Memory storage: Primitive types are stored as single values, while non-primitive types are stored as references.
// 3. Comparison: Primitive types are compared by value, while non-primitive types are compared by reference.

