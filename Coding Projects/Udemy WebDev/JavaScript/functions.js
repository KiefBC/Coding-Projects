/**
 * Created by Kiefer on 2017-04-08.
 */

function isEven(x) {
    if(x % 2 === 0){
        return "Yes"
    }
    else if(x % 2 !== 0){
        return "Fuck OFF"
    }
}

function isEven(num){
    //return if true
    if (num % 2 === 0){
        return true
    }
    //return false otherwise
    else {
        return false
    }
}

function isEven(num){
    return num % 2 === 0;
}

function factorial(num){
    // define a result variable
    var result = 1;
    // calculate factorial and store value in result
    for(var i= 2; i <= num; i++){
        result *= i;
    }
    // return the result variable
    return result
}

// 1 x 2 x 3 x 4

function factorial(num){
    // define a result variable
    var result = num;
    // calculate factorial and store value in result
    for(var i = num-1; i >= 1; i--){
        result *= i;
    }
    // return the result variable
    return result
}

// 4 x 3 x 2 x 1

function kebabToSnake(x) {
    // var userinput = prompt();
    var newchar = '_';
    x = userinput.split('-').join(newchar);
    return x
}

// My Attempt

function kebabToSnake(str) {
    // replace all - with _
    var newStr = str.replace(/-/g , "_");
    // return str
    return newStr
}

function sing() {
    console.log("Cut My Life")
    console.log("Into Pieces")
}

setInterval(sing, 500);
// clearInterval() to stop interval

setInterval(function () {
    console.log("I am anonymous function");
    console.log("This is awesome")
}, 2000);