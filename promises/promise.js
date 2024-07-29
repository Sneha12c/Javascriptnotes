// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promise1 = new Promise(function(resolve , reject){
    // do async await task
    // database , cryptography
    setTimeout(function(){
     console.log("promise settimeout completed");
     resolve();
    } , 1000);
})

promise1.then(function(){
    console.log("promise resolved");
})

new Promise(function(resolve , reject){
   setTimeout(function(){
     console.log("async task 2");
     resolve();
   } , 1000)
}).then(function(){
  console.log("promise2 completed")
})

const promise3 = new Promise(function(reject , resolve){
   setTimeout(function(){
    console.log("async task 3 ");
    resolve({username:"harsh" , email: "fgh@gmail.com"});
   } , 1000)
})
promise3.then(function(user){
  console.log(user);
})

const promisefour = new Promise(function( resolve , reject){
    setTimeout(function(){
      let error = true;
      if(!error){
       resolve({username: "harsh" , password : "123"});
      }
      else{
       reject('Something went wrong');
      }
    }, 2000);
})

promisefour.then((data)=>{
  console.log(data);
  // return data cannot be stored in the variable
  return data.username;
}).then((username)=>{
  console.log(username);
}).catch((error)=>{
  console.log(error);
})