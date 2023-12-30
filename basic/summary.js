
// based on data that we store and that we can access , two types
// Primitive : String , Number , Boolean ,Null , Undefined , Symbol ,BigInt

const email = Symbol("snehh@gmail.com")
const anotheremail = Symbol("dfg@gmail.com");

// console.log(email == anotheremail); // false as symbol used for uniqueness
const Longnumber = 3572928139120378287n
// console.log(typeof Longnumber)


// Non-primitive(Reference)
// Array , Object , Function

// Javascript is a dynamically-typed language as in this language we do not require to define the type of the variable explicitly and it is 
// determined at the time of runtime . This gives flexibility but can lead to potential runtime errors

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function (object function)
//        Object  =>  object

// MEMORY MANAGEMENT
// Heap => Non-Primitive ( get a reference) and Stack => Primitive (get a copy of variable) 

let firstpersonname = "Ram"
let secondpersonname = firstpersonname;
secondpersonname = "Shyam"
// console.log(firstpersonname)
// console.log(secondpersonname)

let firstobj = {
    name :"goa",
    age : 43
}

secondobj = firstobj;

secondobj.age = 89

// console.log(firstobj.age) 89 // value change beacause reference value is changed
// console.log(secondobj.age) 89



