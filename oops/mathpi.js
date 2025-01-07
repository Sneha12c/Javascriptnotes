const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

//   {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// We can not change value of pi because its property is not writable

const user = {
    name : "rohit",
    email : "rohit@gmail.com",
    password : "1243",
    logme : function(){
      console.log("bhfbrw");
    }
}

console.log(Object.getOwnPropertyDescriptor(user , "name"))

for(let [key , value] of Object.entries(user)){
    if(typeof value != "function"){
     console.log(key , value);
    }
 } 

Object.defineProperty(user , "name" , {
    writable : false,
    enumerable : false,
})

for(let [key , value] of Object.entries(user)){
   if(typeof value != "function"){
    console.log(key , value);
   }
}


