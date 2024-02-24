// Javascript exexution context refers to when file will be created , how script run and will be executed
// Javascript is single Threaded
// First step is global execution context and it is pointing to variable this keyword and every environment has different global ec 
// browser  - global ec or this value is window object
//  2 Functional Execution Context 3.) Eval Execution Context

// File is run in two phase 1.) Memmory Creation phase
// 2.) Exexution phase
// In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one. When the function finish , new environment and execution phase is deleted
// browser > inspect > Sources      create a snippet with few functions and visually experience the call stack.

// Control flow - when we want to execute some part of code some part of not 

const userloggedin = true
const temperature = 41
if(temperature < 50 && 2 != -2){
 console.log("temperature less than 50")
}
// comparison operator - < , > , == , >= , <= , != , !== , === (check type also)

const score = 300

if(score < 500){
   let name = "hjse";
    // var name = "nnvd"
   console.log( `Hey , how are you ? ${name}`);
}
// console.log( `Hey , how are you ? ${name}`); // error because let is used in block scope

const marks = 98
// if(marks> 100 ) console.log("less than 100 ") , console.log("greater than 50"); // Implicit scope

if(marks < 50){
   console.log("Not much goof");
}
else if(marks <100){
   console.log("That's good");
}
else{
   console.log("very good");
}

// switch case used in redux toolkit

// switch(key) {
//   case value:
//     break;
//   default:
//   break;
// }

let month = 3

switch (month){
   case 1:
    console.log("Jan");
    break;
   case 2:
    console.log("Feb");
    break;
   case 3:
    console.log("Mar");
   //  break;
   case 4:
    console.log("April");
    break;
   default:
    console.log("Month success")
    break;
}
//  if we remave break , THEN IT will run all code except default

// falsy values => false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 
// truthy values => " " , 'false' , "0" , [] , {} , function(){} 

const useremail = [];
// to check if array is empty
if(useremail.length === 0){
   console.log("Array is empty");
}

// to check if object is empty
const someobject = {}

if(Object.keys(someobject).length === 0){
  console.log("Object is empty");
}

// Nullish Coalescing Operator
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side 
// operand is null or undefined, and otherwise returns its left-hand side operand.
let val1;
val1 = 10 ?? 20;
val2 = null ?? 12;
val3 = undefined ?? 15;

console.table({val1 , val2 , val3});

// Ternary Operator => condition ? true : false