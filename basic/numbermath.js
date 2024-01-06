const num = 200;
// console.log(num); // 200

const rollno = new Number(4569);
// console.log(rollno); // [Number: 4569]

// console.log(rollno.toFixed(3)); // values formats this number using fixed-point notation return a string
// console.log(rollno.toPrecision(2)); // return a string
// console.log(rollno.toExponential(4));
// console.log(rollno.toLocaleString()); // US string 'en-IN for indian system
// const val = Math.pow(2 , 78);
// console.log(Number.isSafeInteger(val));


// ************** Maths ******************
// console.log(Math) //Object [Math] {}
// console.log(Math.abs(-9)); 9
// console.log(Math.ceil(3.4)); 4
// console.log(Math.floor(5.8)); 5

// console.log(Math.random()) // give values between 0 and 1
// console.log(Math.floor(Math.random()*10) + 1) // give values between1 and 10 

const min = 45
const max = 100

// console.log(Math.floor(Math.random()*(max -min+1))+min); ****imp***

// *************** Date ***********************

const today = new Date();

// console.log(today) // not readab le 2023-12-30T20:21:08.461Z
// console.log(today.toDateString()); // Sat Dec 30 2023
// console.log(today.toString()); // Sat Dec 30 2023 20:21:08 GMT+0000 (Coordinated Universal Time)
// console.log(today.toISOString()) // 2023-12-30T20:21:08.461Z
// console.log(today.toJSON()); // 2023-12-30T20:21:08.461Z
// console.log(today.toLocaleDateString()); // 12/30/2023
// console.log(today.toLocaleTimeString()) // 8:23:10 PM
console.log(typeof today); // Object

let mycreated = new Date(2043 , 13 , 23 , 4 ,5); // 13 to 2
// console.log(mycreated.toDateString()) // Tue Feb 23 2044
let newdate = new Date("2034-02-23")
// console.log(newdate.toLocaleString()); // 2/23/2034, 12:00:00 AM

let timestamp = Date.now();

// console.log(timestamp);
// console.log(newdate.getSeconds())
// console.log(mycreated.getTime());
// console.log(Math.floor(timestamp/1000))
// console.log(mycreated.getTimezoneOffset()); // Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).

console.log(newdate.toLocaleString( 'default' , {
    weekday: 'long',
    year: "numeric",
  month: "long",
  day: "numeric",
}))

