// selection statements  or conditional statement


// we can control the excution of the program using control or selection statement. we can execute certain condition become true.


//Types of control statements:

//1. If else
//2. else
//3. if
//4. switch
//5. termary operator





//1.If():

//SYNTAX:
/*if(condition){
    set of code
}*/




/*function FindEven(num){
    if(num%2==0){
        console.log("the given number is even")
    }
}
FindEven(4)
FindEven(5)*/




//2. If() & else():

/*function FindOdd(num){
    if(num%2==0){
        console.log("the given number is even")
    }
    else{
        console.log("the given number is odd")
    }
}
FindOdd(3)
FindOdd(4)*/




//3. Ifelse():

/*function FindNum(num){
    if(num%2==0){
        console.log("the given number is even")
    }
    else{
        console.log("the given number is odd")
    }
}
FindNum(3)
FindNum(4)*/

// elseif():

/*function wish(message){
    if(message==="gm"){
        console.log("good morning")

    }
    else if(message==="ga"){
        console.log("good afternoon")


    }
    else{
        console.log("this is nothing to print")
    }
}
wish('ga')
wish("gm")
wish("ra")*/

// Switch():

function wish(message){
    switch(message){
        case"gm":{
        console.log("good morning")
        break;
        }

    
    case "ga":{
        console.log("good afternoon")
        break;
    }
    case "ge":{
        console.log("this is nothing to print")
        break;
    }
    default:{
        console.log("there is nothing to wish")
        break;
    }
}
}
wish('ga')
wish("gm")
wish("ra")


//5. termary operator


// condition?  // true statement:      // false statemnet


var firstname="sachin"
firstname.includes("virat")?console.log("my name is virat"):
console.log("your name is something else")