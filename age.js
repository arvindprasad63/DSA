// The conditional (ternary) operator is the only javascript
// that takes three operands

// var age = 18;
// if(age >= 18){
//     console.log("you can vote");
// }else{
//     console.log("you can't vote");
// }

// var age = 17;
// console.log((age >= 18)? "you can vote" : "you can't vote"
// );




        var num = 4;
        factorial = 1;
        for(var i = 1; i <= num; i++)
        {
            // factorial = factorial * i;
            factorial *= i;
        }
        console.log("Factorial of %d = %d", num, factorial);