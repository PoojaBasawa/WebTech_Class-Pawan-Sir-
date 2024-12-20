// Math Object
// math is an inbuilt object in js which can be used to perform some specific math expression/operation.

console.log(Math.PI)
console.log(Math.sqrt(49))
console.log(Math.pow(12,4))
console.log(Math.round(4.9))
console.log(Math.floor(2.5))
console.log(Math.trunc(13133.221313))
console.log(Math.sign(-45))
console.log(Math.sign(60))
console.log(Math.random())

// Generate a number between 1 to 6.
var random=Math.random()*6+1
console.log(random)

var random=Math.trunc(Math.random()*6+1)  // 6 is the number of possible results. 
console.log(random)                       // 1 is the start number. Math.trunc() will remove the decimal part