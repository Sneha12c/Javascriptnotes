
let myarray = [ 8 , 9 , true , 45, 'rtyu']
// JavaScript arrays are resizable and can contain a mix of different data types. 

// console.log(myarray[2])
// values can be accessed only through non-negative integers
// javascript array copy operation make shallow copies( copies whose properties have same referces )

let myarr2 = new Array( 'varun' ,'sunny' , 'ranveer' , 'ranbir');
// console.log(typeof myarr2); // object

myarray.push(4)
myarray.shift(); // removes the first element from an array and returns that removed element. This method changes the length of the array.
// console.log(myarray);
myarray.pop();
myarray.unshift(1); //  instances adds the specified elements to the beginning of an array and returns the new length of the array.
// console.log(myarray);

// console.log( myarray.indexOf(45) );
// console.log( myarray.includes(6)); // boolean
const createarray = myarray.join(); // returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string

// console.log(createarray) // typeof string

// const myn1 = myarray.slice(1 , 3);// returns a shallow copy of a portion of an array into a new array object selected from start to end
// console.log(myn1)
// console.log('B ' , myarray)
// const myn2 = myarray.splice(1 , 3); //instances changes the contents of an array by removing or replacing existing elements and adding new elements in place
// console.log(myn2);
// console.log( 'C' , myarray)

// myarray.push(myarr2);
// console.log(myarray);
const newarr = myarray.concat(myarr2);  // to merge two arrays
// console.log(newarr);

// using spread operator
const nextarr = [...myarr2 , ...myarray , ...newarr ];
// console.log(nextarr);

const nextarr2 = [1 , 2 , [4 , 5 , 6] , [7 , 8 , [98 , 89] , 8]];
// console.log(nextarr2.flat(Infinity)); // [   1, 2,  4,  5, 6,  7, 8, 98, 89, 8 ]
// console.log( Array.isArray("ghjhkj")) // false
// console.log( Array.from("bjsdbcjsnj"));
// console.log( Array.from({ name: "njdsncka"})); // empty array

let score1 = 100;
let score2 = 300;
let score3 = 632876;
console.log( Array.of(score1 , score2 , score3 ));

console.log(myarr2.reverse());

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

