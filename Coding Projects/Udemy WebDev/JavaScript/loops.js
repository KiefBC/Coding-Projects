/**
 * Created by Kiefer on 2017-04-08.
 */

// var num = -10;
// var num1 = 10;
// var num3 = 300;
// var num4 = 5;
//
console.log("PRINT ALL NUMBERRS BETWEEN -10 AND 19")
// while (num <= 19){
//     console.log(num);
//     num++;
//
// }

for (var i = -10; i <= 19; i++){
    console.log(i)
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
// while (num1 <= 40){
//     console.log(num1);
//     num1 += 2;
// }

// while (num1 <= 40){
//     if (num1 % 2 === 0){
//         console.log(num1);
//     }
//     num1 += 1;
// }

for (var i = 10; i <= 40; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
// while (num3 <= 333){
//     console.log(num3);
//     num3 += 3;
// }

// while (num3 <= 333){
//     if (num3 % 2 !== 0){
//         console.log(num3);
//     }
//     num3 += 1;
// }

for (var i = 300; i <= 333; i++){
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50")
// while (num4 <= 50){
//     if (num4 % 5 === 0 && num4 % 3 === 0){
//         console.log(num4)
//     }
//     num4 += 1;
// }

for (var i = 5; i <= 50; i++){
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}