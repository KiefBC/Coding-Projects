/**
 * Created by Kiefer on 2017-04-07.
 */

var age = Number(prompt("How old are you?"));

if(age < 0) {
    console.log("You cannot come");
    alert("ERROR! NO COMRENDAY");
}

else if(age === 21) {
    console.log("Happy 21st birthday!");
}

if (age === NaN) {
    console.log("ODD AGE BRO");
}
