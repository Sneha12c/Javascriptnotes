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

const promise3 = new Promise(function( resolve , reject){
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
}).finally(()=>{
  console.log("all promises resolved")
})
//  function in finally will always run

const promisefive = new Promise(function(resolve , reject){
   setTimeout(()=>{
    let error = true;
    if(!error){
      resolve({username: "python" , pass : "573"});
    }
    else{
     reject('Error : js wrong something');
    }
   }, 2000);
})

async function consumepromisefive(){
  // async and await cannot handle error so use try and catch
 try {
 const promise = await promisefive;
 console.log(promise);
 }
 catch(error){
 console.log(error);
 }
}
consumepromisefive();

// async function getallusers(){
//   try{
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   // converting response into json will take time so use await
//   console.log(data);
//   }
//   catch{
//    console.log('Error ' , error);
//   }
// }
// getallusers();

fetch('https://jsonplaceholder.typicode.com/users').
then(function(response){
  return response.json();
}).then(function(data){
   console.log(data);
}).catch(function(error){
  console.log(" error " , error);
})

//  THE Fetch API provides an interface for fetching resources
//  (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.
// The Fetch API uses Request and Response objects (and other things involved with network requests),
//  as well as related concepts such as CORS and the HTTP Origin header semantics.
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
//  It returns a Promise that resolves to the Response to that request — as soon as the server responds with
//   headers — even if the server response is an HTTP error status. 
// You can also optionally pass in an init options object as the second argument (see Request).
// fetch request give error when there is network problem
// The mechanism of fetch() is ocur in two parts - web browser and data handling ( on fulfilled and on rejection)
// in data handling two objects are created which cannot be accessed and when we get response from web browser or nodejs to a network 
// if response is sucess go to on fullied object else goes to on rejection object 
// which have respinsibility to give response in global memmory 

