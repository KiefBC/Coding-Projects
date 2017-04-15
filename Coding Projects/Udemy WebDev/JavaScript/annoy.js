/**
 * Created by Kiefer on 2017-04-08.
 */

// var answer = prompt("ARE WE THERE YET");
//
// while(answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("ARE WE THERE YET");
// }
//
// alert("YAY WE MADE IT");

// VERSION 2 - checks if yes is used in answer

var answer = prompt("ARE WE THERE YET");

while(answer.indexOf("yes") === -1){
    var answer = prompt("ARE WE THERE YET");
}

alert("YAY WE MADE IT");