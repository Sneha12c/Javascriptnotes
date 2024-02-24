
// function
// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces, 
let a = 3
let b = 6

// function sumofnum (){
//     console.log("jh");
// }

function sumofnum ( num1 , num2 ){
  return num1 + num2
}

sumofnum // Reference
const res = sumofnum(a , b); // Execution
// console.log(res);

function loginusermsg(username){
    if(username === undefined ){
    console.log("Please enter the username ")
    return
    }
    return `${username} , just logged in`
}

// console.log(loginusermsg("shiva"))
// console.log(loginusermsg()) // undefined


function loginusermsg(username){
    if(!username){
     console.log("Please enter the username")
     return
    }
    return `${username} , just logged in`
}

function calculate(val1 ,...num){ // Rest operator
  return num;
}

// console.log( calculate(200 , 300 , 4000))

const newarray = [89 , 34 , 578 , 748];

function returnvalues(getarray){
  return getarray[2];
}

// console.log(returnvalues(newarray));
// console.log(returnvalues([45 , 78 , 90]));

// **************************SCOPE*************
if(true){
const A = 34
let b = 389
var c = 34
}
//  any value inside the bracket , those scope is called block scope
// any value outside the bracket , those scope is called global scope
// In JavaScript, variables declared with var have function scope, which means 
// they are only scoped to the function in which they are declared, not to blocks like if statements or loops.
//  So, in your code, the var a inside the function aboveValueChange is 
// actually a different variable than the one declared outside the function.
// value inside block scope can not be used in global scope
// console.log(A); // error
// console.log(b); // error
// console.log(c); // 34 


function shop(){
   let customer1 = "ram";
   function product(){
    let cloth1 = "shirt"
    console.log(customer1);
   }
  //  console.log(cloth1);  // Reference error
   product();
}
// shop();

// MINI HOISTING
addtwo(4)
function addtwo(num){
  return num+2
}
// addthree(5) // REFERence error
const addthree = function (num){
  return num+3
}
 
// *******************This and Arrow Function ***********
const user = {
   username : "hiren",
   price : 990,
   getvalue: function(){
    console.log(`${this.username} , this is a new world` );
   }
}
//  this keyword refers to current context 
// console.log(user.getvalue()); hiren , this is a new world
user.username = "ram"
// console.log(user.getvalue());  //ram , this is new world
// console.log(this ) // {} give an empty object but in browser it gives window as a global object

function checkthis(){
   let usernam = "fejj"
  //  console.log(this.usernam) //undefined ,  we can not use this keyword inside the function
  //  console.log(this) // we get some global object
}
// checkthis();

const Arrowfunction = ()=>{
  let user = "gjhd"
  // console.log(this.user) // undefined
  console.log("Hi , I am a arrow")
  return 3;
}
// console.log(Arrowfunction());
// Another syntax

const addtwo5 = (num1 , num2) => (num1+num2)  // Implicit run
console.log(addtwo5(3 , 4));

// *************** Immediately Invoked Function Expression
// ()() one parenthesis for function another for execution
// It is used for immediately invoking but also for preventing pollution of function scope from global scope variable

(function welcome() { 
  // named IIFE
  console.log(`Hello world`);
 })();

//  IIFE using arrow function
( (name) => {
  console.log(`huriejf ${name}`);
})("gdjeshfj");


