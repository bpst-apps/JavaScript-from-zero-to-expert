// ******************************* variables & values *******************************
let js = 'amazing';

// console.log(40 + 10 + 22 - 5);

console.log('Bhanu');

let firstName = 'Bhanu Pratap Singh';
console.log(firstName);
// block comment example
/*
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// way to define constants
let PI = 3.14;

// variable naming conventions
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob)

// assigment
myCountry = 'India';
myContinent = 'Asia';
myCountryPopulation = '135 Cr';

console.log(myCountry);
console.log(myContinent);
console.log(myCountryPopulation);

// ******************************* data types *******************************
// value can be - object or primitive
// example of premitive
let lastName = 'Thakur'
let age = 30

// example of object
let me = {
    name: 'Bhanu'
};

// lets focus on primitive data types as of now
// 7 types - number, string, boolean, undefined, null, symbol and bigint

// 1. number - floating point numbers - used for decimals and integers
let salary = 10000;
let pay = 10000.0;

// 2. string - sequence of characters - used for text
let address = 'Bangalore';

// 3. boolean - logical type that can only be true or false - used for taking decisions
let fullAge = true;

// 4. undefined - value taken by a variable that is not yet defined ('empty value)
let children;

// 5. null - also means 'empty value' however used in someother context

// 6. symbol (first introduced in ES2015) - value that is unique and cannot be changed [not useful for now]

// 7. bigint (ES2020) - larger integers than the number type can hold 

// Note: JavaScript has dynamic typing : we do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 'Bhanu');

javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun);

// undefined data type
let childName;
console.log(typeof childName);

childName = 'Tom';
console.log(typeof childName);

// error/bug in typeof --> object!!!! how this is possible!!!
console.log(typeof null);

// ******************************* let, const & var *******************************
// let & const introduced in ES6
// var keyword is old way of declaring keywords
// let is block scoped & var is function scope

let personAge = 30;
personAge = 31; // mutate variable - redefine the value

// let used to create empty variables
let test;

// const is used if variable value won't change in future
const birthYear = 1990;
// this will give error
// birthYear = 1991; 

// this will give error
// const myJob;

var myJob = 'programmer';
myJob = 'teacher';

// this will work however not recommended way to define variable
newTestVariable = 'test';
console.log(newTestVariable);


// ******************************* basic operators *******************************
// arithmetic operators

// calculate age 
const currentYear = 2087
const ageBhanu = currentYear - 1990;
const ageMeera = currentYear - 2012;
console.log(ageBhanu, ageMeera);

// multiple operators
console.log(ageBhanu * 2, ageBhanu / 10, 2 ** 3);

// concatenate strings
const myFirstName = 'Bhanu';
const myLastName = 'Thakur';
console.log(myFirstName + ' ' + myLastName);

// template string method
console.log(`${myFirstName} ${myLastName}`);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 200
x++; // x = x + 1
x--;
x--; // 99
console.log(x);

// comparison operators
console.log(ageBhanu > ageMeera); // >, <, >=, <=
console.log(ageMeera >= 18);
console.log(ageMeera <= 74);

const isFullAge = ageMeera >= 75;

console.log(currentYear - 1990 > currentYear - 2012);


// ******************************* operator precedence *******************************

let a, b;

a = b = 25 - 10 - 5; // assignment - right to left
console.log(a, b);

const averageAge = (ageBhanu + ageMeera) / 2;
console.log(averageAge);


// ******************************* coding challenge #1 *******************************

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
