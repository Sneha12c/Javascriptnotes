class user{
    constructor(username){
      this.username = username;
    }
    
    logme() {
        console.log(this.username);
    }
}

class Teacher extends user{
    constructor( username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    }
    
    addcourse(){
      console.log(`A new course was added by ${this.username}`);
    }
}

const teach = new Teacher('uil' , 'uil@gmail.com' , '243');
const use = new user('nrejn');

teach.addcourse();
teach.logme();
use.logme();
// use.addcourse(); // error

console.log(teach === use); // false
console.log(teach === Teacher); // false
console.log(teach instanceof Teacher); // true


// staticprop

class Calculator {
  // A static method
  static add(a, b) {
    return a + b;
  }
}

// You can call the static method directly on the class
console.log(Calculator.add(5, 3)); // Output: 8

const mob = new Calculator();
// console.log(mob.add(2 , 3)); //error

// Static methods are often used to create utility functions or properties that are related to a class 
// but don't need to be tied to an instance of that class.


