// strings & template literals

const firstName = 'Bhanu';
const job = 'teacher';
const birthYear = 1990;
const currentYear = 2083;

// formatting 
const bhanu = 'I am ' + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(bhanu);

// formating using templatw literal
const bhanuNew = `I am ${firstName}, a ${currentYear - birthYear} year old ${job} !`;
console.log(bhanuNew);

// create multiline string
console.log(`string
with
multiple
line`);

// if else

const ageJohn = 19;
const isJohnOldEnough = ageJohn >= 18;

if (isJohnOldEnough) {
    console.log('John can start driving licence 🚗');
}


const age = 15;
if (age >= 18) {
    console.log('John can start driving licence 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`John is too young. wait another ${yearsLeft} years 😊`)
}


const yearOfBirth = 1990;
let century;
if (yearOfBirth <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

