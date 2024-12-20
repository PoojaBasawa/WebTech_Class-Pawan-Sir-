//i have a product and i want to store
//information of that product like productname,
//price,category,rating,stock

// var product={
//     pname :'iphone',
//     price : 150000,
//     category : "electornic",
//     rating : 4.5,
//     stock : false
// }
// console.log(product)

//one object can perform 4 operations
//1.read or access the data.
//2.insert or write the data.
//3.update the data.
//4.delete the data

//1.how to read or access specific property from the object:
//. is special operator in js
//syntax:
//object_name.keyname or //keyname is which value u want to access
//object_name['keyname']
// var product={
//         pname :'iphone',
//         price : 150000,
//         category : "electornic",
//         rating : 4.5,
//         stock : false
// }
// console.log(product.pname)
// console.log(product['rating'])

//2.how to modify or update the value of a property from the object:
//syntax:
//object_name.keyname=assign value//keyname is where u want to modify the value
// var product={
//     pname :'iphone',
//     price : 150000,
//     category : "electornic",
//     rating : 4.5,
//     stock : false
// }
// console.log(product)
// product.pname='samsung'
// product.price=50000
// product.rating=3
// console.log(product)

//3.how to insert or add new property inside the object:
//syntax:
//objectname.keyname=assign value or
//objectname['keyname']=assign value
// var product={
//     pname :'iphone',
//     price : 150000,
//     category : "electornic",
//     rating : 4.5,
//     stock : false
// }
// console.log(product) 
// product.color='black'
// product['storage']=256
// product.brand='apple'
// console.log(product)

//4.how to delete or remove the perticular property from object:
//syntax:
//delete objectname.keyname
//delete is a special keyword in js
var product={
    pname :'iphone',
    price : 150000,
    category : "electornic",
    rating : 4.5,
    stock : false
}
console.log(product) 
delete product.price
delete product.rating
console.log(product)