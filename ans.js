// ✅ Day 1 (Easy Starter)

// Question 1
// Check if number is even or odd.

// let num = 2

// if(num % 2 === 0){
//   console.log("odd")
// }
// else{
//     console.log("even")
// }

// Question 2
// Find the sum of all numbers in an array.

// let array = [ 1,3,5,7,9]
// let sum = 0

// for(let i = 0; i < array.length; i++){
//     sum += array[i]
// }
// console.log(sum)

// Question 3
// Find largest number in an array.

// let largest = [20 , 39 , 40 , 47 ,58 ,12 ,34]

// let ans = Math.max(...largest)

// console.log(ans)


// Question 4
// Reverse a string.

// let revers = "string"

// let ans = revers.split("").reverse().join("")

// console.log(ans)

// Question 5
// Swap two numbers without using third variable.

// let a = 30;
// let b = 20;

// a = a + b;
// b = a - b
// a = a - b

// console.log(a)
// console.log(b)
// console.log(c)

// /Question 6
// Print numbers from 1 to 50 using loop.

// for(let i = 1; i <= 50 ; i++){
//      document.write(i)
// }

// Question 7
//  Print all even numbers between 1 to 100.

// let ans = []

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         ans.push(i)
//     }
// }
// document.write(ans)

// Question 8
// Find factorial of a number.

// let num = 5;
// let fac = 1;


// for(let i = 1; i <= num; i++){
//     fac *= i
// }
// console.log(fac)


// Question 9

// Print a simple star triangle pattern:

// let rows = 5;

// for(let i = 0; i <= rows ; i++){

//     for(let j = 1; j <= i; j++){
//         document.write("*");
//     }
//     document.write("<br>");
// }