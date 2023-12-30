let person = "shiva"
let number = 687
// not good
// console.log(person + number + " value")
// instead use backtick
// console.log(`Hello , my name is ${person} and my number is ${number}`);
// prefer to use backtick this is new
const s = 'ghtiknk'

// console.log(s.codePointAt(2)); //returns a non-negative integer that is the Unicode code point value of the character starting at the given index
// console.log(s.toUpperCase());

// console.log(s.concat( '&' , person)); //  values concatenates the string arguments to this string and returns a new string.

// console.log(s.charAt(2))
// console.log(s.indexOf('n'));
const newstring = s.substring(4 , 6); // cannot give negative values it will start from 0;
// console.log(newstring); //  returns the part of this string from the start index up to and excluding the end index

const nextstring = s.slice(-9 , -3); // tracts a section of this string and returns it as a new string, without modifying the original string.
// console.log(nextstring); // ghti can take negative values also and go in reverse direction

const st = "    hhk   \n"
const str = st.trim(); // removes whitespace and line terminators from both ends of this string and returns a new string, 
// without modifying the original string. we can use trimend and trimstart
// console.log(st);
// console.log(str)

const url = 'ram%20@gmail.com';
// console.log(url.includes('%')); // return a boolean value
// console.log(url.replace('%20' , '89')); // make a new string and modify it
// console.log(url.includes('%')); // does not change orginal string 
// console.log(url.replaceAll('a' , 'aa'))
// console.log(url.split('a')); // return an array using arguments separator and limits

const splitsymbol = {
    [Symbol.split](str){
       let pos = 0;
       let num = 1;
       const result = [];
       while(pos < str.length){
        const matchpos = str.indexOf(num , pos);
        if(matchpos===-1){
         result.push(str.substring(pos));
         break;
        }
        result.push(str.substring(pos , matchpos));
        pos = matchpos + String(num).length;
        num++;
       }
       return result
    }
}
const myString = "a1bc2c5d 3e4f";
// console.log(myString.split(splitsymbol));

const x = new String("Hello world "); // returns the primitive value of given string object
// console.log(x); // [String: 'Hello world']
// console.log(x.valueOf()); // 'Hello world'

// console.log(`I want to say ${x.repeat(4.7)}`); //returns a new string which contains the specified number of copies of this string RangeError 
// Thrown if count is negative or if count overflows maximum string length. 4.5 repeat 4 times


// console.log(myString.search(' '))  // returning the index of the first match in the string.
// console.log(myString.padStart(56 , '978789')) // padend can be used repeat with particular string

const valu = 'AGHKJKNJOEDSadeghjbcdjdjoijdo';
const reg = 'JKNJ'; // use global and ignore flags to match with value A to E 
// console.log(valu.match( reg)); // [ 'A', 'E', 'D', 'a', 'd', 'e', 'b', 'c','d', 'd', 'd']

console.log(String.fromCharCode(1900, 43, 97, 91)); //  returns a string created from the specified sequence of UTF-16 code units.

