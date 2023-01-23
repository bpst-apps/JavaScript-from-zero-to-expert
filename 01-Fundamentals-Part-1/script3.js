// type conversion
const inputYear = '1990';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Bhanu')); // NaN
console.log(typeof NaN);

console.log(String(56));

// type coercion
console.log('I am ' + 32 + ' years old');

console.log('23' - '5' - 4);
console.log('23' * '2');


// guess the output
let n = '1' + 1;
n = n - 1;
console.log(n);

let val = 2 + 3 + 4 + '5'
console.log(val)

let newVal = '10' - '4' - '3' - 2 + '5'
console.log(newVal)