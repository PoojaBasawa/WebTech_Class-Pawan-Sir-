// i have a product & i want to store information 
// of that product like product name, price,category,
// rating,stock

// var product={
//     pname:"I phone 15pro",
//     price:110000,
//     category:"Electronic",
//     rating:4.5,
//     stock:false
// }
// console.log(product)

// One object can perform 4 Operation
//1. Read or Access the data
//2. Insert or Write the data
//3. Update the data
//4. Delete the data

//1. Read or Access the data(How to accesss to or read specific property from the object)
//syntax: object_name.keyname OR object_name['keyname']


//Only access the pname
// var product={
//     pname:"I phone 15pro",
//     price:110000,
//     category:"Electronic",
//     rating:4.5,
//     stock:false
// }
// console.log(product.pname)
// console.log(product['rating']) 

//2. Insert or Write the data(How to modify or update the value of a property from the object)
//syntax: object_name.keyname to update=new value

// var product={
//     pname:"I phone 15pro",
//     price:110000,
//     category:"Electronic",
//     rating:4.5,
//     stock:false
// }
// console.log(product)
// product.pname="Samsumg s24 ultra"
// product.price=150000
// product.rating=5
// product.stock=true
// console.log(product)

//output you can see before and after modification

//3. Update the data(How to insert or add new property inside the object)
//syntax: object_name.keyname=newvalue OR object_name['keyname']=newvalue

// var product={
//     pname:"I phone 15pro",
//     price:110000,
//     category:"Electronic",
//     rating:4.5,
//     stock:false
// }
// console.log(product)
// product.color="blue"
// product['storage']="256 gb"
// product.brand="apple"
// console.log(product)

//4. Delete the data(How to delete property or remove the property from the object)
//syntax: delete object_name.keyname
//delete is a special keyword in javascript 

// var product={
//     pname:"I phone 15pro",
//     price:110000,
//     category:"Electronic",
//     rating:4.5,
//     stock:false
// } 
// console.log(product)
// delete product.price
// delete product.rating
// console.log(product)

//How to create a nested Object(Object inside the Object)

// var user={
//     name:"Virat",
//     id:18,
//     iplaced:true,
//     address:{
//         state:"Karnataka",
//         city:"Bangalore",
//         pincode:"560040",
//         area:{
//             area1:"1st main road",
//             area2:"MG Road"
//         }
//     }
// }
 //1. Operation
// console.log(user) 
// console.log(user.id)
// console.log(user.address.city)
// console.log(user.address.area.area2) 

//2. Operation
// user.name="Dhoni"
// console.log(user)

//3. Operation
// user.age=33

//4. Operation


// How to add function inside the object
// var person={
//     name:"Virat",
//     age:36,
//     gender:"male",
//     play:function(){
//         console.log("Virat is playing cricket") 
//         console.log(this.name+" is playing cricket")
//         console.log("my age is "+this.age) 
//     },
//     city:"Mumbai"
// }
// console.log(person)
// person.play() //function call purpose () parathysis is used

//"this" keyword to used to invoke the current object

//How to retrive only keysfrom the object
//SYNTAX: Object.keys(object_name)

// How to add function inside the object
// var person={
//     name:"Virat",
//     age:36,
//     gender:"male",
//     play:function(){
//         console.log("Virat is playing cricket") 
//         console.log(this.name+" is playing cricket")
//         console.log("my age is "+this.age) 
//     },
//     city:"Mumbai"
// }
// console.log(person)
// var keys=Object.keys(person)
// console.log(keys)

//How to retrieve the only the values from the object?
//SYNTAX: Object.values(object_name)

var person={
    name:"Virat",
    age:36,
    gender:"male",
    play:function(){
        console.log("Virat is playing cricket") 
        console.log(this.name+" is playing cricket")
        console.log("my age is "+this.age) 
    },
    city:"Mumbai"
}
var value=Object.values(person)
console.log(value) 