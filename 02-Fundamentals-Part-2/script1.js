'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive');

// we will get error
// const private = 534;
// const if = 25;

// functions - piece of code that can be reused again and again

function logger() {
    console.log('My name is Bhanu');
}

// invoking/calling/running the function
logger();
logger();
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// this will work, we can use function declaration before defining the function
const age3 = calcAge1(1990);
console.log(age3);

function calcAge1(birthYear) {
    // const age = 2087 - birthYear;
    // return age;
    return 2077 - birthYear;
}

// function declaration
const age1 = calcAge1(1990);
console.log(age1);

// this will not work, as we can not use function expession before defining it
// const age4 = calcAge2(1990);
// console.log(age4);

// anonymous function
// function expression
const calcAge2 = function (birthYear) {
    return 2077 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age1);


// arrow function
const calcAge3 = birthYear => 2077 - birthYear;
const age5 = calcAge3(1990);
console.log(age5);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2047 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, 'John'));


