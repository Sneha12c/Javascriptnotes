
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

// JavaScript Implementations:
//https://css-tricks.com/debouncing-throttling-explained-examples/

// Classnames
function classNames(...args) {
  const classes = [];
  args.forEach((arg)=>{
    if(!arg){
      return;
    }
    const argType = typeof arg;
    if(argType === 'string' || argType === 'number'){
      classes.push(arg);
      return;
    }
    if(Array.isArray(arg)){
      classes.push(classNames(...arg));
      return;
    }
    if(argType === 'object') {
      for(const key in arg) {
        if(Object.hasOwn(arg , key) && arg[key]) {
          classes.push(key);
        }
      }
      return;
    }
  })
  return classes.join(' ');
}

// Flatten
function Flatten(arr){
    if(!Array.isArray(arr)) return [];
    return arr.reduce((prev , curr)=>{
       if(Array.isArray(curr)){
         return prev.concat(Flatten(curr));
       }
       prev.push(curr);
       return prev;
    },[]);
}

// Deep Equal
function deepequal(a , b){
    // same reference
   if(a===b){
     return true;
   }
   // handle null
   if (a === null || b === null) return false;
   let typea = typeof a;
   let typeb = typeof b;
   // different types
   if(typea !== typeb) return false;
   // Non-object types
   if(typea !== 'object') return false;
   // handle Array 
   if(Array.isArray(a)){
     if(!Array.isArray(b) || a.length !== b.length ) return false;
     for(let i=0; i<a.length; i++){
        if(!deepequal(a[i], b[i])) return false;
     }
     return true;
   }
   keysa = Object.keys(a);
   keysb = Object.keys(b);
   if(keysa.length !== keysb.length) return false;

   for(const k of keysa){
    if(!Object.prototype.hasOwnProperty.call(b , k)) return false;
    if(!deepequal(keysa[k], keysb[k])) return false;
   }

   return true;
}

// Event Emitter
class Eventemitter{
    constructor(){
       this.events = new Map();
    }

    on(eventName, listener){
       if(!this.events.has(eventName)){
        this.events.set(eventName, new Set());
       }
       this.events.get(eventName).add(listener);
       return this;
    }

    off(eventName, listener){
       const listeners = this.events.has(eventName);
       if(!listener){
        return this;
       }
       listeners.delete(listener);
       if(listener.size === 0){
        this.events.delete(eventName);
       }
       return this;
    }
    
    emit(eventName, ...args){
       const listeners = this.events.has(eventName);
       if(!listeners) return false; 
       [...listeners].forEach((listener)=>{
         listener(...args);
       })
       return true;
    }
}


// Map Async Limit
// @param {Array} arr - The array to iterate over.
// @param {number} limit - The maximum number of iterators to run at any time.
// @param {Function} iteratorFn - An async function to apply to each item.
// @returns {Promise<Array>} A promise that resolves with an array of results

function mapAsyncLimit(iterator, limit , callbackfn){
    return new Promise((resolve, reject)=>{
        let total = iterator.length;
        if(total === 0){
            resolve([]);
            return;
        }
        const results = [];
        let index = 0;
        let running = 0;
        let completed = 0;
        async function runNext() {
          if(completed === total){
            return resolve(results);
          }
          if(index < total && running < limit){
            let curr = index;
            index++;
            running++;
            try{
              let res = await callbackfn(iterator[index], index, iterator);
              results[curr] = res;
              running--;
              completed++;
              runNext();
            }catch(err){
              reject(err);
            }
          }
        }
        for(let i=0; i<total && i<size; i++){
            runNext();
        }
    })
    
}

// Deep Clone
function deepClone(value){
   if(typeof value !== 'object' && value === null){
    return value;
   }
   if(Array.isArray(value)){
    return value.map((item)=> deepClone(item));
   }
   return Object.fromEntries(
    Object.entries(([key , value]) => [key ,deepClone(value)]),
   );
}


