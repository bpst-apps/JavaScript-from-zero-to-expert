// equality operators == vs ===

const age = 18;

// strict equality operator - not perfom cohersion
if (age === 18) console.log('You just become an adult');

// loose equality opeator
if ('20' == 20) console.log('It will work on loose equality');

// it will not work
if ('20' === 20) console.log('It will work on loose equality');

/*
const favourite = prompt("What's your favorite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) console.log('Cool! 23 is an amzaing number!')

if (favourite === 23) console.log('Cool! 23 is an amzaing number!')
*/

const favouriteNumber = Number(prompt("What's your favorite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber == 23) {
    console.log('Cool! 23 is an amzaing number!')
} else if (favouriteNumber == 9) {
    console.log('9 is also cool number!')
} else {
    console.log('Numner is not 23 or 9')
}

// diffrence operator (not equal)
// !== (strict), != (loose)

if (favouriteNumber !== 23) console.log('Why not 23?')