
function change_my_text(){
    
    document.getElementById('head').innerHTML="You are hacked ! for 3 seconds."
    
}

// Functions

// Functions are the helpers which have instructions to perform a specfic task
// 2 things are there in functions
// 1. Function Defination ==> These are the instructions and things which a specific function wil do. 
// 2. Function Calling  ==> Initiating the function.

// ==> Create a function which can add 2 numbers and give super as result

function addition(){

    var number1=500;  // number1 is storing the interger 100.
    var number2=200;  // number1 is storing the interger 100.

    var result = number1 + number2;
    
    return result; 

}

var sum = addition(); // fucnction Call
console.log(sum , "This the Addition of the numbers ", sum)