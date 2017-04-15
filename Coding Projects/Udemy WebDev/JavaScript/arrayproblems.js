/**
 * Created by Kiefer on 2017-04-09.
 */

function printReverse(arr) {
    // - 1 starts the arr at 5 index 3, and i-- subtracts 1 index
    // for loop ends at 3 because 3 === 0 index
    for(var i = arr.length - 1; i >= 0; i--){
        // console arr will console the current index
        console.log(arr[i]);
        return arr
    }
}

printReverse([3,6,2,5])

// isUniform starts

function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
        return true
    }
}

isUniform([1,1,1,1])
isUniform([1,2,2,2])
isUniform([1,1,1,2])

// sumArray starts

function sumArray(arr) {
    var total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total
}

sumArray([6,6,3," okay"," NO WAY"])

// sumMax starts

function max(arr) {
    // index 0 is max
    var max = arr[0];
    // start loop to find a bigger value on index 1, since index 0 is already max, i++ goes thru index
    for (var i = 1; i < arr.length; i++){
        // looks for number > max
        if(arr[i] > max){
            // if i finds number > greater than max, its now max
            max = arr[i];
        }
    }
    return max
}

max([1,2,3,4])

// bonus BELOW UNLESS STATED ******************************************

var nums = [45,65,77,34]

nums.forEach(function (num) {
    console.log(num)
})

// myForEach(arr, function)

myForEach(nums, function(num){
    console.log(num);
});

// function myForEach(arr, func)

function myForEach(arr, func) {
    // loop thru array
    for (var i = 0; i < arr.length; i++){
        // call func for each item in array
        func();
    }
}

var colors = ["red","Orange","Black"];

myForEach(colors, function(){});

// now using index

function myForEach(arr, func) {
    // loop thru array
    for (var i = 0; i < arr.length; i++){
        // call func for each item now with index name in array
        func(arr[i]);
    }
}

// anonymous function
myForEach(colors, alert);
myForEach(colors, console.log);
// get 3 alerts because colors has 3 values in its arr
myForEach(colors, function(){alert("HIGH")})
// colors loops thru and is given to func(); in this case color and
// this makes color === colors and shoots it into the console.log
myForEach(colors, function(color){console.log(color)})

// prototype

Array.prototype.myForEach = function (func) {
    for (var i = 0; i < this.length; i++){
        func(this[i])
    }
}

var friends = ["charlie","dave","mickey"]

friends.myForEach(alert)
friends.myForEach(function (name) {
    console.log("I love " + name)
})