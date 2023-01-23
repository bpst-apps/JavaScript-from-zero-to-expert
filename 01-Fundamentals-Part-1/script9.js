
// ternary operator
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I want to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink)


console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

////////// Code challenge


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)