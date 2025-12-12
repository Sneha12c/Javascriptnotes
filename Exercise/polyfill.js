
// Currying is a advanced  technique of working with function. It is a transformation of function 
// that translate a function from callable as func(a , b , c) into callble as func(a)(b)(c)

function curry(func){
  return function curried(...args){
    if(func.length <= args.length ){
      return func.apply(this, args);
    }
    else{
      return function(...args2){
        // return curried.apply(this, args.concat(args2));
        return curried(...args, ...args2);
      }
    }
  }
}

function sum(a, b, c){
  return a+b+c;
}

let curriedsum = curry(sum);
console.log(curriedsum(3, 4, 5));
console.log(curriedsum(3)(4,5));

// Implement curry with placeholder support
function currywithph(func){
  return function curriedwithph(...args){
    let complete = args.length >= func.length && !args.slice(0 , func.length).includes(currywithph.placeholder);
    if(complete){
      return func.apply(this , args);
    }
    return function(...newarg){
      const res = args.map(arg => arg ===currywithph.placeholder && newarg.length ? newarg.shift(): arg);
      return curriedwithph(...res, ...newarg);
    }
  }
}
currywithph.placeholder = Symbol("placeholder");
const _ = currywithph.placeholder;

function join(a, b, c){
  return `${a}_${b}_${c}`;
}

let curriedsumwithph = currywithph(join);
console.log(curriedsumwithph(1,_, 2)(3));
console.log(curriedsumwithph(_,1, _)(3)(2));

// Implement your own flat function
function flat(arr, length=1){
  // if(!Array.isArray(arr) || length<=0){
  //   return arr;
  // }
  // let res = [];
  // for(let i=0; i<arr.length; i++){
  //   if(!Array.isArray(arr[i])){
  //     res.push(arr[i]);
  //   }
  //   else{
  //     newarr = flat(arr[i],length-1);
  //     res = [...res, ...newarr];
  //   }
  // }
  // return res;
  return length ? arr.reduce((acc, curr)=>{
    return [...acc, ...Array.isArray(curr)? flat(curr, length-1): [curr]];
  },[]) : arr;
}

const arr = [1, [2], [3, [4]]];
console.log(flat(arr))
// [1, 2, 3, [4]]
console.log(flat(arr, 1));
// [1, 2, 3, [4]]
console.log(flat(arr, 2));


// forEach polyfill implementation
// forEach does not wait for promises to resolve within its callback before moving to the next iteration
Array.prototype.foreachpolyfill = function(callback ){
  if(!Array.isArray(this)){
    throw new TypeError("Array.prototype.forEach called on null or undefined")
  }   
  if(typeof callback !== "function"){
    throw new TypeError("");
  }
  for(let i=0; i<this.length; i++){
    if(typeof this[i]!="undefined"){
      callback(this[i], i , this);
    }
  }
}

const anime = ['one piece', 'detective conan', undefined, 'dbz', 'slime', 'spyxkid'];
anime.foreachpolyfill((element, index, arr) => console.log(element));

Array.prototype.mappolyfill = function (callback){
  let newarr = [];
  for(let i=0; i<this.length; i++){
    if(i in this)
    newarr.push(callback(this[i], i, this));
  }
  return newarr;
}

let mapres = anime.mappolyfill((ele , index)=>{
  return (ele + index);
})
console.log(mapres);

// reduce polyfill implemenation
Array.prototype.reducepolyfill = function (callback, initialValue){
  let previousVal = initialValue || undefined;
  for(let i=0; i<this.length; i++){
    if(this[i] != "null"){
      previousVal ? callback(previousVal, this[i], i ) : previousVal=this[i];
    }
  }
  return previousVal;
}

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
let res = myArray.reducepolyfill((prev, curr)=>{
   if(!prev.includes(curr)){
     return [...prev, curr];
   }
   return prev;
}, [])

console.log(res);

// Array.isArray ployfill implementation

function isArraypolyfill(arg){
   return Object.prototype.toString.call(arg) === '[object Array]';
}
console.log(isArraypolyfill({ user: "hi"}));
console.log(isArraypolyfill([1, 2, 3]));

// Implement basic throttle
// Throttling is a technique that limits how often a function can be called 
// in a given period of time.

function throttling(func , delay){
   let waiting = false;
   return function(...args){
    if(!waiting){
      waiting = true;
      setTimeout(()=>{
        waiting= false;
      }, delay);
      func.apply(this, args);
    }
    else{
      // do nothing
    }
   }
}

// throtling with option leading and trailing
function throttling1(func, delay , option={leading: true, trailing: true}){
  let waiting = false;
  let lastarg = null;
  return function(...args){
    if(!waiting){
      waiting = true;
      startwaitingPeriod = ()=> setTimeout(()=>{
        if(option.trailing && lastarg){
          func.apply(this, lastarg);
          lastarg = null;
          startwaitingPeriod();
        } else{
          waiting = false;
        }
      }, delay);
      
      if(option.leading){
        func.apply(this, args);
      }
      else{
        lastarg = args;
      }
      startwaitingPeriod();

    }
    else{
      lastarg = args;
    }
  }
}
                                                            
// Debouncing is a technique 
function debouncing(func , delay=3000){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this , args);
    }, delay);
  }
}

