//how to create a nested object:
//syntax:
//var objectname{
  //property1
  //property2
  //property3{
  //property1
  //property2
  //property3{
  //property1
  //property2
  //}
  //}
//}
//ex:
//1.read data
// var user={
//     name:"virat",
//     id:18,
//     address:{
//         state:"karnataka",
//         city:"bangalore",
//         pincode:5474646,
//         area:{
//             area1:"1st main road",
//             area2:"2nd main road"
//         }
//     }
// }
// console.log(user)
// console.log(user.id)
// console.log(user.address.city)
// console.log(user.address.area.area1)

//1.insert data
// var user={
//     name:"virat",
//     id:18,
//     address:{
//         state:"karnataka",
//         city:"bangalore",
//         pincode:5474646,
//         area:{
//             area1:"1st main road",
//             area2:"2nd main road"
//         }
//     }
// }
// console.log(user)
// user.address.area.area3="3rd main road"
// console.log(user)

//2.update data:
// var user={
//   name:"virat",
//   id:18,
//   address:{
//       state:"karnataka",
//       city:"bangalore",
//       pincode:5474646,
//       area:{
//           area1:"1st main road",
//           area2:"2nd main road"
//       }
//   }
// }
// console.log(user)
// user.address.area.area1="3rd main road"
// console.log(user)

//3.delete data
var user={
            name:"virat",
            id:18,
            address:{
            state:"karnataka",
            city:"bangalore",
            pincode:5474646,
            area:{
            area1:"1st main road",
            area2:"2nd main road"
         }
     }
  }
  console.log(user)
  delete user.address.area.area1
  console.log(user)


//how to add function inside object:
// var person={
//     name:"virat",
//     age:26,
//     gender:"male",
//     play:function(){
//         console.log("virat is playing")
//     }
// }
// console.log(person)
// person.play()

//this keyword:used to revoke current value from the object.
// var person={
//     name:"virat",
//     age:26,
//     gender:"male",
//     play:function(){
//         console.log(this.name,"is playing")
//         console.log("age is",this.age)
        
//     }
// }
// console.log(person)
// person.play()

//how to retrieve only keys from the object
//syntax:
//object.keys(object_name)
//ex:
// var person={
//   name:"virat",
//   age:26,
//   gender:"male",
// }
// var key=Object.keys(person)
// console.log(key)

//how to retrieve only values from the object
//syntax:
//Object.values(object_name)
//ex:
// var person={
//   name:"virat",
//   age:26,
//   gender:"male",
// }

// var value=Object.values(person)
// console.log(value)
