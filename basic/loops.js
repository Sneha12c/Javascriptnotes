 
for(let i=0; i<=10; i++){
  const element = i;
//   console.log(element);
}

let myArray = [ "pratiksha" , "harshita" , "bjdsj" ];

for(let index=0 ; index< myArray.length; index++){
//    console.log(myArray[index]);
}

let index = 0;

while(index< myArray.length){
  // console.log(myArray[index]);
  index++;
}

let score = 11;

// do{
//  console.log("gh");
// }while(score<=10);

const arr = [1 ,2 , 3 , 4 , 5];
// for(const key of Object){}

for(const num of arr ){
  //  console.log( num ); 
}

// MAP- The Map object holds key-value pairs and remembers the original insertion order of the keys
// A key in the Map may only occur once; it is unique in the Map's collection.
const mp = new Map();

mp.set( 'efghf' , 'bcdjs');
mp.set( 'hjdj' , 'jhj');
// console.log(mp);
for(const [key , value] of mp){
  //  console.log( key);
}
// for(const num in mp){
  // console.log(num); // not iterable
// }

const myobject = {
    "js" : "javascript",
    "cpp" : "c++"
} 

// for(const num of myobject){
  //  console.log(num); // myobject is not iterable 
// }

for(const num in myobject){
  // console.log(`${num} is connected to ${myobject[num]}`);
}
// js is connected to javascript
// cpp is connected to c++

// ForEach

const marks = [ 45 , 56 , 78 , 78 , 45 , 34 ];

marks.forEach( (val) => {
  //  console.log(val+2);
});

marks.forEach( function (val){
  // console.log(val);
});

function printme(val){
  console.log(val);
}

// marks.forEach(printme); // just pass the name of function not as a parameter

marks.forEach(function (val , index , arr){
  // console.log( val , index , arr);
});

const users = [
  { username: "sneha" , email : "sneha@gmail.com" , number: "n878789"},
  { username: "pratyush" , email : "pratia@gmail.com" , number: "n878huh789"},
  { username: "rohan" , email : "roahan@gmail.com" , number: "n3244789"}
];

users.forEach((val) =>{
  //  console.log(`${val.username} has email ${val.email}`);
});

// We can not store values of foreach nor by using return
// We use filter

 coding = [ "java" , "cpp" , "python" , "spring"];

// const val = coding.filter((val) => (val.length > 3) );
const val = coding.filter((val) => { return (val.length > 3)} );
// use return while using parenthesis
// console.log(val);

const arr1 = [];

coding.forEach((val)=>{
   if(val.length > 3)
   arr1.push(val);
});
// console.log(arr1);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const fict = books.filter((val)=> {
   return (val.genre === 'Fiction');
});

const oldbooks = books.filter((val)=> {
  return (val.publish <= 2000 );
});

// console.log(fict);
// console.log(oldbooks);

// using map and chaining 
const numbers = [ 1 , 2, 3, 4, 5, 6, 7 , 8 , 9 , 10];

const mynum = numbers.map((num) => { return (num*10)}).map( (num) => { return num+1});

// console.log(mynum);

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
//  in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

const mynumbers = [12 , 13 , 14 , 15];

const values = mynumbers.reduce((acc , currval)=>{ 
  console.log(acc);
  return acc + currval;
}, 0)

console.log(values);




