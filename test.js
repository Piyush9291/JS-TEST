
// Q1. Reverse a string without using reverse()

// let str = "hello";
// let revers = ""


// for(let i = str.length-1; i >=0; i--){
//      revers += str[i]
// }
// console.log(revers)

// let ans = str.split("").reverse().join()
// console.log(ans)


// Q2. Count vowels in a string
// let str = "hello";

// let count = 0;
// let vowels = "aeiouAEIOU"

// for(let i =0; i < str.length; i++){

//     if(vowels.includes(str[i])){
//         count++;
//     }
// }
// console.log("vowel count:" ,count)


// Q3. Check if a string is a palindrome

// let word = "madam";

// let palindrome = word === word.split("").reverse().join(" ")
// console.log(palindrome)


// 2. Loop & Conditional Questions

// // Q4. Print numbers 1 to 100, but for multiples of 3 print "Fizz", for 5 "Buzz", and both "FizzBuzz"

// // Q5. Find the largest number in an array
// let nums = [10, 25, 45, 60, 5];

// // Q6. Print the factorial of a number (e.g., 5 => 120)
// let n = 5;


// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         document.write("fizzbuzz")
//     }
//     else if (i % 3 === 0) {
//         document.write("fizz")
//     }
//     else if (i % 5 === 0) {
//         document.write("Buzz")
//     }else {
//         console.log(i)
//     }
// }

// let nums = [10, 25, 45, 60, 5];

// let max = nums[0]

// let ans = Math.max(...nums)
// console.log(ans).

// for(let i = 1; i < nums.length; i++){

//     if(nums[i] > max){
//         max = nums[i];
//     }
// }
// console.log(max)


// // Q6. Print the factorial of a number (e.g., 5 => 120)
// let n = 5;

// let fac = 1;

// for(let i= 1; i <=n; i++){ 
//     fac *= i;
// }
// console.log(fac)


// . Array Questions

// Q7. Remove duplicates from an array
// let arr = [1, 2, 3, 2, 4, 1];

// Q8. Find the sum of all elements in an array

// Q9. Sort an array in descending order


// let arr = [1, 2, 3, 2, 4, 1];
// let ans = [...new Set(arr)]
// console.log(ans)

// let arr = [1, 2, 3, 2, 4, 1];
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)


// Q9. Sort an array in descending order
// let arr = [1, 2, 3, 2, 4, 1];

// arr.sort(function(a,b){
//     return b-a
// })
// console.log(arr)


// let arr = [1, 2, 3, 4,];

// let double = arr.map((e) => e * 2)
// console.log(double)


// let fil = arr.filter((e) => e % 2 === 0)
// console.log(fil)


// 3. Add 10 to every number in array
// let scores = [50, 40, 60];
// // Output: [60, 50, 70]

// let ans = scores.map((e) => e +=10 )
// console.log(ans)

// 6. Get only adults (age 18+)
// let people = [
//     { name: "Piyush", age: 21 },
//     { name: "Mini", age: 17 }
//   ];
// Output: [ { name: "Piyush", age: 21 } ]


//   let ans = people.filter((person) => person.age >= 18)
//   console.log(ans)


//Question = > Change Text on Button Click (HTML + JS)

// function changeText(){
//   document.getElementById("text").innerText = "New Text"
// }
// changeText()


// function changeText(){
//   document.getElementById("btn").addEventListener( "click", function(){
//     document.getElementById("text").innerText = "New text"
//   })
// }
// changeText()

// Question . Create a Simple Counter

// let count = 0;
// function increment(){
//   count++;
//   document.getElementById("count").innerText = count;
// }

// function incrementt(){
//   count--;
//   document.getElementById("count").innerText = count;
// }

// Check if a number is positive, negative, or zero
// let num = 5;

// if (num > 0) {
//   console.log("positive")
// } else if (num < 0) {
//   console.log("negtive")
// } else {
//   console.log("zero")
// }

// Check if a number is even or odd

// let sum = 2;

// if(sum % 2 == 0){
//   console.log("even")
// }else{
//   console.log("odd")
// }


// let number = [2,3 ,4,5 ,6,7]

// let ans = number.map((num) => num * 2)
// console.log(ans)


// let arr = number.forEach((val) => console.log(val , "Piyush"))
// console.log(arr)



// const fruits = [ "apple" , "banana", "cherry", "mango", "orange"];

// const slicedFruits = fruits.slice(1, 4);

// console.log(slicedFruits);



//  onject constuctor

//  function student(first, last , agee , cls){
//     this.username = first ;
//     this.lastname = last;
//     this.age = agee;
//     this.class = cls;
//  }

//  const s1 = new student("piyush" , "singh" , "20" , "collage")
//  s1.nationality = "India"
//  console.log(s1)


// 1 revere a string 

// let first = "piyush"

// const ans = first.split("").reverse().join("")
// console.log(ans);

// 2 Check if a number is even or odd
// ➔ Input: 5 ➔ Output: "Odd"

// let arr = 5;

// if(arr % 2 ===0){
//     console.log("even")
// } else{
//     console.log("odd")
// }


// Find the largest number in an array
// ➔ Input: [1, 5, 3, 9, 2] ➔ Output: 9

// let arr =  [1, 5, 3, 9, 2] 

// let ans = Math.max(...arr)
// console.log(ans)


// Remove duplicates from an array
// ➔ Input: [1,2,2,3,4,4,5] ➔ Output: [1,2,3,4,5]

// let arr = [1,2,2,3,4,4,5]

// let ans = [new Set(arr)]
// console.log(ans)

// Check if a string is a palindrome (reads the same forward and backward)
// ➔ Input: "madam" ➔ Output: true

// let first = "madam"

// let ans = first === first.split("").reverse().join("")
// console.log(ans);


// Sum all numbers in an array
// ➔ Input: [1,2,3,4] ➔ Output: 10


// let number = [1,2,3 ,4]
// let sum = 0;

// for(let i =0; i < number.length; i++){
//       sum += number[i]
// }
// console.log(sum)

// Swap two variables without using a third variable
// ➔ Input: a = 5, b = 10 ➔ Output: a = 10, b = 5

// let a = 5;
// let b = 10;

// a = a + b  5 + 10
// b = a -b  15 - 10 = 5;
// a = a -b  15 - 5 = 10

// console.log("a =", a); 
// console.log("b =", b); 


// Find factorial of a number
// ➔ Input: 5 ➔ Output: 120 (because 5×4×3×2×1 = 120)

// let num = 5;
// let fectorial = 1;

// for(let i=1 ; i <= num; i++){
//     fectorial *= i
// }

// console.log(fectorial)


// Find the second largest number in an array
// ➔ Input: [10, 5, 8, 20, 15] ➔ Output: 15


// let arr = [10, 5, 8, 20, 15]

// let ans = arr.sort((a,b) => b - a)

// console.log(ans[1])
// console.log(ans)

// *
// **
// ***
// ****
// *****

// let rowss = 5;

// for(let i =0; i <= 5; i++){
//     // document.write("*")
//     for(let j =1; j <= i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }





// *
// ***
// *****
// *******
// *********

// let rows = 5

// for (let i = 0; i <= 5; i++) {

//     for (let j = 1; j <= i; j++) {
//         document.write("*")
//     }

//     for (let k = 1; k <= (2 * i - 1); k++) {
//         document.write("*")
//     }
//     document.write("<br>");

// }

// let line = 5;

// for (let i = 0; i <= line; i++) {

//     for (let j = 1; j <= 1; j++) {
//         document.write(j)
//     }
//     document.write("<br>")

// 