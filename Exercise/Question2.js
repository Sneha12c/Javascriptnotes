// Flatten into desired structure
// {
//  "user.name": "Ram",
//  "user.address.country": "India",
//  "user.address.zip": "57680"
// }

let obj1 = {
 user: {
 name: "Ram",
 address: {
    country: "India",
    zip: "57680"
   }
 }
};

function Flatten(obj, prevkey='', res={}){
   Object.keys(obj).forEach((key)=>{
      const newkeyname = prevkey ? `${prevkey}.${key}` : key; 
      if(typeof obj[key] === "object" && obj[key]!==null){
        Flatten(obj[key], newkeyname, res);
      }
      else{
        res[newkeyname] = obj[key];
      }
      return res;
   });
}

// reduce method

let list = [1,2,3,4];

let sum = list.reduce((prevele, ele , index)=>{
   console.log(prevele, ele , index);
   return prevele + ele;
})

console.log(sum);
// Output
// 1 2 1
// 3 3 2
// 6 4 3
// 10

let prices = [{'price':200},{'price':500}, {'price':100}];

let cost = prices.reduce((prevele, ele )=>{
   console.log(prevele, ele);
   return prevele.price + ele.price;
})
console.log(cost);
// output
// { price: 200 } { price: 500 }
// 700 { price: 100 }
// NaN

// Solution
let cost2 = prices.reduce((prevele, ele)=>{
   return prevele + ele.price;
},0);
console.log(cost2); // 800

// flatten 2d array
let twodarray = [['ljb', 'bdh'], ['vsbchjw','vdhe'],['bbes','ghgchw'], [1,2,3]];

let finalarray = twodarray.reduce((prevele, ele)=>{
   return prevele.concat(ele);
})
console.log(finalarray);
// ['ljb','bdh', 'vsbchjw', 'vdhe','bbes','ghgchw',1,2,3]

// find duplicate element
let list1 = ["Lo", "No", "Lo", "Sun", "Lo", "No"]
let res = list1.reduce((prevele, ele)=>{
   if(prevele.includes(ele)){
     console.log('duplicated +', ele);
   }
   else{
     prevele.push(ele);
   }
   return list
},[])

// duplicated + Lo
// duplicated + No

// sort method does not return a new array , modifies the existing array
let arr = [2,3,4,7,8,9,0];
arr.sort();
console.log(arr);

list.sort((a,b)=>{
   // function scope & external data
   // return positive number: ...b...a...
   // return negative number: ...a...b...
   return b-a
})

let fruits = ['orange','banana','kiwi','APPLE','apple','Apple']
fruits.sort((a,b)=>{
    //return a.length-b.length
    let A = a.toUpperCase()
    let B = b.toUpperCase()
    // if(A>B) return 1
    // if(A<B) return -1
    if(A==B) return 0
    return A>B?1:-1
})

// how to deep clone array or object
let a = {
   msg: "hello",
   country: "India",
   list:[34, 45, [90, 80]],
   car: {brand:"Bazaz", info: {'owner':'snil'}}
}

function deepCopy(orginalValue){
   if(orginalValue== null || typeof orginalValue !== 'object'){
      throw 'illegal value'
   }
   let copy = Array.isArray(orginalValue) ? [] : {};
   for(let key in orginalValue){
      if(orginalValue[key]!==null && typeof orginalValue[key] !== 'object'){
         copy[key] = orginalValue[key]; 
      }
      else{
         copy[key] = deepCopy(orginalValue[key]);
      }
   }
   return copy;
}

let result = deepCopy(a);
console.log(result.car.info === a.car.info, re);
