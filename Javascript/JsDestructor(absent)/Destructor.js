//destructing of object and array
//it is technique in javascript to unpack properties
//or element from object or array and assigning variable
//ex
// let person={
//     name:"virat",
//     age:25,
//     city:"mumbai",
//     gender:"male"
//}
//old approach

// let name=person.name
// let age=person.age
// let city=person.city
// console.log(name+" "+age+" "+city)
//not works don't refer above example


let user = { 
		  name: "pooja", 
		  age: 34 
		};
		console.log(user.name + " " + user.age);

//new approach
// const{name,age,city,gender}=person
// console.log(city)
// console.log(age)

//array destructing
let product=["iphone-15-pro","samsung","vivo-v24"]
let element1=product[0]
let element2=product[1]
let element3=product[2]
console.log(element1+" "+element2+" "+element3)
//old approach

const[ele1,ele2,ele3,ele4]=product
console.log(ele1)
console.log(ele2)
//new approach 