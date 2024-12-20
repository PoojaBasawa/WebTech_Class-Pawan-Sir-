//clousers in js
// it is a technique to access of the other function
//variable inside inner function
//or
//it is function to define function inside another function
//syntax:
//function outer(){
//........
//--------
//function inner(){
//-----
//-----
     //}
//}
//ex
function outer(){
    var city="bangalore"
    console.log("outer variable" + city)
    console.log("i am outer function")
    function inner(){
        console.log("inner variable" + city)
    console.log("i am inner function")
    }
    return inner()
}
outer()


