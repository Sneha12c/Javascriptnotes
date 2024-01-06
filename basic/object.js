// There are two ways of declaring objects
// using literal
// using constructor (singleton formed not multiple instances)

const mysym = Symbol("hdjij");
// Literal way
const student = {
     name: "djdn",
     email : "bchsad@ncdn.com",
     rollno : 67,
     standard : 4,
     [mysym] : "mykeyd" , // syntax for defining symbol
     "fullname": "ghsubcj",
     marks : [23 , 34 , 45]
}
// Accessed through two methods
// console.log(student.email) // cannot be used when key is string
// console.log(student["fullname"]) 
// console.log(student[mysym]) // syntax for using symbol
student.email = "bhsq$njsan"
//Freezes an object. Other code cannot delete or change its properties.
// Object.freeze(student);
student.email = "vhsbdjqbn&bhbw";
// console.log(student);
// {
//     name: 'djdn',
//     email: 'bhsq$njsan',
//     rollno: 67,
//     standard: 4,
//     fullname: 'ghsubcj',
//     marks: [ 23, 34, 45 ],
//     [Symbol(hdjij)]: 'mykeyd'
//   }

student.func1 = function(){
    console.log("Hello World !");
}

student.func2 = function(){
    console.log(`This is my ${this.rollno}`)
}

// console.log(student.func1); // [Function (anonymous)]
// console.log(student.func2()); // This is my 67
// console.log(student.func1()); // Hello World ! 



// using constructor , internally same but it make singleton objects

const user = {};
user.id = 7281
user.email = "hdjwnj@hjdsn"
user.isloggedin = false

// console.log(user);

// We can define nested objects in this way and can access it
const newuser = {
    email: "some@google.com",
    fullname : {
        userfullname: {
          lastname: "kumar",
          firstname: "ram",
        }
    }
}

// console.log(newuser.fullname.userfullname.lastname)

const obj1 = { 1:'w' , 2: 'l'};
const obj2 = {3:'g' , 5:'hj' , 7:'hj'};
const obj3 = { obj1 , obj2};
// console.log(obj3);
// const obj4 = Object.assign({} , obj1 , obj2);
// console.log(obj4);
// using spread operator
// console.log({...obj1 , ...obj2 , ...obj4});

// Object.keys retrieves the names of all the enumerable properties from an object
const car = { make: 'toyoto' , model:'Camel'};
// console.log(Object.keys(car));
// console.log(Object.values(car)); // give values

// Object.entries() combine both keys and values to produce an array

// Object.freeze(car); // once object is freezed , it can never be changed
car.model = 'giraffe'
// console.log(Object.entries(car));
// console.log(car.hasOwnProperty('model')) // give boolean value

// JavaScript object destructuring which assigns properties of an object to individual variables.
const services = {
    serviceid : 687271,
    seviceprice : 34,
    serviceprovider : "sneha"
}

const {serviceprovider : sp } = services
// console.log(sp);
// The JSON namespace object contains static methods for parsing values from and converting values to JavaScript Object Notation
// Unlike most global objects, JSON is not a constructor. You cannot use it with the new operator or invoke the JSON object as a function.
//  All properties and methods of JSON are static (just like the Math object).
// JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax, 
// but is distinct from JavaScript: most of JavaScript is not JSON


