const user = {
   username : "harsh",
   logincount : 8,
   loggedin : true,
    
   getuserdetail : function(){
    console.log(`username is ${this.username}`);
    console.log(this);
   }
}

// console.log(user.username);
// console.log(user.getuserdetail());
// console.log(this);

// Constructor function give new instance on using new keyword 

function User(username , logincount , loggedin){
  this.username = username;
  this.logincount = logincount;
  this.loggedin = loggedin;
  this.greeting = function(){
   console.log(`Welcome to ${this.username}`)
  }
  return this;
}

const userone = new User("rohit" , 4 , true);
const usertwo = new User("harsh" , 12, false);
console.log(userone.constructor);
console.log(usertwo);

// In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of
//  code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. 
//  Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own,
//   and so on until an object is reached with null as its prototype. By definition, null has no prototype and acts as
//  the final link in this prototype chain.

function multipleby3( num){
   return (num*3);
}

multipleby3.prime = 2;

console.log(multipleby3(5));
console.log(multipleby3.prime);
console.log(multipleby3.prototype);

function createuser(username , score){
   this.username = username;
   this.score = score;
}

createuser.prototype.incsore = function(){
   this.score = score++;
}
createuser.prototype.print = function(){
   console.log(` Score is ${this.score}`);
}

const user1 = new createuser("raj" , 5);
const user2 = new createuser("jar" , 67);
user1.print();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the 
newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly 
created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
 (object, array, function, etc.), the newly created object is returned.

*/

const mycars = [ "maths" , "english"];

const subuser = {
    maths : "numbers",
    english : "letters",
    gettypeofenglish : function(){
      console.log(`Type of ${this.english}`);
    }
}

Object.prototype.god = function(){
   console.log("God is present everywhere");
}

Array.prototype.heygod = function(){
   console.log("hey , God is present everywhere");
}

subuser.god();
mycars.god();
// Object.heygod();
// inheritance

const Userwr = {
   name: "chai",
   email: "chai@google.com"
}

const Teacher = {
   makeVideo: true
}

const TeachingSupport = {
   isAvailable: false
}

const TASupport = {
   makeAssignment: 'JS assignment',
   fullTime: true,
   __proto__: TeachingSupport
}

Teacher.__proto__ = Userwr

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "wewillwon    "

String.prototype.trueLength = function(){
   console.log(`${this}`);
   console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ram    ".trueLength()
"  iceTea".trueLength()

// CALL and THIS

function setusername(){
  this.username = username;
}

function 




