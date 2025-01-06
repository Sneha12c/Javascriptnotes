// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let newtext = (text.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g));
// console.log(newtext);
// console.log(newtext.split(' '));

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
shoppingCart.unshift('Meat');
console.log(shoppingCart);
if(!shoppingCart.includes('Sugar')){
   shoppingCart.push('Sugar');
}
console.log(shoppingCart);
// shoppingCart.remove('Honey');
let ind = 0;
shoppingCart.foreach((ele)=>{
   if(ele != 'Honey'){
     ind++;
    }
    else{
    //  break;
    }
})
console.log(ind);
shoppingCart.slice(ind , 1);
console.log(shoppingCart);

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// 1st solution
let personwithmostskill = "" , maxi=0;
for(const u in users){
    // console.log(users[u]);
   if(users[u].skills.length > maxi){
    maxi = users[u].skills.length;
    personwithmostskill = u;
   }
}

// console.log(personwithmostskill);

// 2nd solution
let mernskill = [ 'MongoDB', 'Express', 'React', 'Node'];

let personhavemernskill = [];

for(let ele in users){
   let allskill = users[ele].skills;
   let allskillpresent = true;
   for(let s of mernskill){
     if(!allskill.includes(s)){
      allskillpresent = false;
     }
   }
   if(allskillpresent){
    personhavemernskill.push(ele);
   }
}

// console.log(personhavemernskill);

let copyusers = Object.assign({} , users);

copyusers.Sneha = {
    email: 'sneha@.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 22,
    isLoggedIn: true,
    points: 53
}

const newusers = Object.entries(copyusers);
// console.log(newusers);

const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]
  
function calculaterating(ratings){
  let sum = 0 , cnt=0;
  for(let r of ratings){
   sum += r.rate;
   cnt++;
  }
  return (sum/cnt);
}

let rateofproducts = [];
for(let p of products){
  let rat = calculaterating(p.ratings);
  rateofproducts.push(rat);
}

// console.log(rateofproducts);

function likeproduct(userId , productid){
    for(let p of products){
      let likearray = p.likes;
      if(p._id === productid){
        if(!likearray.includes(userId)){
         likearray.push(userId);
        }  
      }
    }
}

function showdatetime(){
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth()+1;
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

showdatetime();

function sumAllNums() {
    console.log(arguments)
}
   
sumAllNums(1, 2, 3, 4)

const sumofval = (...arg)=>{
   let sum = 0;
   for(let i of arg){
    sum += i;
   }
   return sum;
}
console.log(sumofval([1 , 2 , 4]));

const [x, y] = [2, (value) => value ** 2]
console.log(x , y(7));

const str = "abcdefghijklmnopqrstuvwxyz0123456789";

function useridgenerator(){
    let s = "";
    for(let i=0; i<7; i++){
      let ind = Math.floor(Math.random()*36);
      s += str[ind];
    }
    console.log(s);
}

useridgenerator();

function generatehexa(){
    strhexa = "abcdefghijklmnopqrstuvwxyz0123456789";
    let s = "#";
    for(let i=0; i<6; i++){
      let ind = Math.floor(Math.random()*36);
      s += str[ind];
    }
    return s;
}

function generatergb(){
    let s = "rgb( ";
    for(let i=0; i<2; i++){
      s+= Math.floor(Math.random()*275);
      s+= ', '
    }
    s+= Math.floor(Math.random()*275);
    s += ' )';
    return s;
}

function generatecolor(type , cnt){
    if(type == 'hexa'){ 
    let arr = [];
    for(let i=0; i<cnt; i++){
     arr.push(generatehexa());
    }
    for(let j of arr)
        console.log(j);
    return arr;
    }
    if(type == 'rgb'){
     let arr = [];
     for(let i=0; i<cnt; i++){
      arr.push(generatergb());
     }
     for(let j of arr)
        console.log(j);
     return arr;
    }

}

// generatecolor('hexa' , 3);
// generatecolor('rgb' , 2);

function fisherYatesShuffle(arr){
    let newarr = [...arr];
    let len = arr.length;
    for(let i=len-1;i>=0; i--){
     let j = Math.floor(Math.random()*(i+1));
     [newarr[i] , newarr[j]] = [newarr[j] , newarr[i]]; 
    }
    return newarr;
}

const array = [1, 2, 3, 4, 5];
console.log(fisherYatesShuffle(array)); 

function isempty(anyval){
    if(anyval == null)
        return true;
    if(typeof anyval == 'string' || Array.isArray(anyval)) return anyval.length===0
        
    if(typeof anyval === 'object' ) return Object.keys(anyval).length === 0
    return false;
}


