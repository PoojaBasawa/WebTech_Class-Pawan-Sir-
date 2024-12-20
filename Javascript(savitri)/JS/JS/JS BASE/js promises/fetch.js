//fetch()
//fetch is a method which works internally as a
//promise. fetch method is used to make a metwork
//request or to call q API in js
//fetch will return a promise in js

//ex for fetch method to make api calling

fetch('https://jsonplaceholder.typicode.com/todos/1')//
.then((result)=>{
    //console.log(result)
    return result.json()
})
.then((jsondata)=>{
    console.log(jsondata)
    console.log(jsondata.title)
})//fulfill result
.catch((error)=>{
    console.log(error+"promise failed")
})//reject result