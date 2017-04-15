/**
 * Created by Kiefer on 2017-04-09.
 */

var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["Terry", "Mike", "Jake"],
    // we can add functions as properties to objets which is called Method
    // so method is a function that is a propetyt that isinside of an object
    add: function(x,y){
        return x + y;
    }
};

// cant call add by itself, must be dot notation = obj.add()
obj.add(10,5);
// console is an object, and log is a method on the obj
console.log();


// cant use speak twice
function speak() {
    return "WOOF";
}

function speak() {
    return "MEOW";
}

// so we create methods within objects that use the same name ie - speak
var dogSpace = {};
dogSpace.speak = function () {
    return "WOOF";
}

var catSpace = {};
catSpace.speak = function () {
    return "MEOW";
}

// THIS

//empty obj
var comments = {};
//give the obj some property
comments.data = ["Goo", "Hah","NO"]

function print(arr){
    arr.forEach(function (el) {
        console.log(el)
    });
}

// function doesnt need placeholder because its just giving a result
comments.print = function (){
    // in this instance, this refers to the obj 'comments'
    this.data.forEach(function (el) {
        console.log(el);
    });
}

comments.print()