
// loops

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
}


const johnArray = [
    'John',
    'Mathew',
    '30',
    'student',
    ['Mike', 'Peter', 'Dan']
];

// looping over an array
for (let index = 0; index < johnArray.length; index++) {
    console.log(johnArray[index]);
}


const types = [];
for (let index = 0; index < johnArray.length; index++) {
    // types[index] = typeof johnArray[index];
    types.push(typeof johnArray[index]);
}
console.log(types);

const years = [1990, 1980, 1989, 2009, 2016, 2020]
const ages = [];
for (let index = 0; index < years.length; index++) {
    ages.push(2067 - years[index]);
}
console.log(ages);

// continue and break
for (let index = 0; index < johnArray.length; index++) {
    if (typeof johnArray[index] !== 'string') continue;
    console.log(johnArray[index]);
}
