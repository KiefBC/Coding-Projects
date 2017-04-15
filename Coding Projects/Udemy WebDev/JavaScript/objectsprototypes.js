/**
 * Created by Kiefer on 2017-04-09.
 */

// suppose i wanted to model a single person: name, age, city
// i could use an array like this Name-Age-Town
var person = ["Cindy",32,"Canada"];

// to retrieve the persons hometown
person[2] //this is now meaningful code

// what if i accidently reversed the order?
// we would get Name-Town-Age Travis-21 (Now Africa)-21 (Now Africa)
var person2 = ["Travis","Africa",21]

// OR WE COULD OBJECT IT!
// everything within the {   } are an 'object'

var person = {
    name: "Cindy",
    age: 32,
    city: "Canada"
};

var person = {
    name: "Travis",
    age: 21,
    city: "Africa"
};

// bracket notation, similar to arrays:
console.log(person["name"]);
// dot notation:
console.log(person.name);

var dog = {
    name: "Rusty",
    age: 3,
    city: "Sooke"
};

dog.age
dog["age"]

// cannot use dot notation if property starts with number ie - random.1blah !== random.["1blah"] random.blah

// to update age
person["age"] += 1
person.age += 1
// to update city
person.city = "London"
person["city"] = "Chigao"

//CREATING OBJECTS

// make an empty object
var person = {}
// and then add to it
person.name = "Travis";
person.age = 21;
person.city = "LA";

// all at once
var person = {
    name: "Travis",
    age: 21,
    city: "Africa"
};

// another way of intitializing an object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

// objects can hold all sorts of data

var junkObject = {
    age: 57,
    color: "purple",
    isHungry: true,
    friends: ["Goku","Vegeta"],
    pet: {
        name: "rusty",
        species: "hybrid",
        age: 2
    }
};

// can add new property that is not there
// dot nation is easier to read
junkObject.cowl = "Scaredy Cat";
junkObject["fiesty"] = "Temperment";

// *****************
// QUIZ TIME BITCHES
// *****************

var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbie"},
        {name: "Baker"}
    ],
    color: "baby blue",
    isEvil: "maybe"
};

// to retreive malfoy
// start with obj someObject
// .friends to get the property of friends and [0] for the first property or index'd name
// .name to get the name of the friends property on index 0
someObject.friends[0].name