/**
 * Created by Kiefer on 2017-04-08.
 */

//create specialNum
var specialNum = 7;

//ask user for chosenNum
var stringchosen = prompt("Guess a number");
var guess = Number(stringchosen);

//check chosenNum
if (guess === specialNum) {
    alert("RIGHT!");
}

//otherwise check is higher
else if (guess > specialNum){
    alert("Too High")
}

//otherwise check if lower
else if (guess < specialNum){
    alert("Too Low")
}