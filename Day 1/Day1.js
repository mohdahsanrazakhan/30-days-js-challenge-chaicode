// Activity 1: Variable Declaration
// Solution Task 1:
var num = 10;
console.log(num);
// Solution Task 2:
let str = "Ten";
console.log(str);

// Activity 2: Constant Declaration
// Solution Task 3:
const bool = true;
console.log(bool);

// Activity 3: Data Types
// Solution Task 4:
let obj = {
  name: "Mark",
  age: 10
};
console.log(obj);

let arr1 = ["Mark", "Vishal"];
let arr2 = Array(10, 20);
let arr3 = new Array("Khan", 10, true)
console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr1);

// Activity 4: Reassigning Variables
// Solution Task 5:
let age = 10;
console.log(age);
age = 20;
console.log(age);

// Activity 5: Understanding const
// Solution Task 6:
const subject = "JavaScript";
console.log(subject);
// TypeError: Assignment to constant variable
subject = "ReactJS"; 
console.log(subject);
// Please comment out the above 2 lines of code to run remainting

// Feature Request
// Solution 1:
var language = "JavaScript";
const createdAt = 1995;
let jsIsBestLanguage = true;
let jsHistory = {
  inventedBy: "Brendan Eich",
  developedFor: "Netscape 2"
}
let jsVersion = ["ES1 - 1997", "ES2 - 1998", "ES3 - 1999", "ES5 - 2009", "ES6 - 2015, 16, 17, 18, 19, 20"]

console.log(`Value: ${language} | Type: ${typeof language}`)
console.log(`Value: ${createdAt} | Type: ${typeof createdAt}`)
console.log(`Value: ${jsIsBestLanguage} | Type: ${typeof jsIsBestLanguage}`)
console.log(`Value: ${jsHistory} | Type: ${typeof jsHistory}`)
console.log(`Value: ${jsVersion} | Type: ${typeof jsVersion}`)

// Solution 2:
let year = 2024;
console.log(year);
year = 2025; // let is mutable so it can override the 2025 over 2024.
console.log(year);

const since = 1995;
console.log(since);
since = 2000; // const is immutable so it cannot override the values, so it throws TypeError
console.log(since);