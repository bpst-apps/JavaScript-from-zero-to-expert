

const johnArray = [
    'John',
    'Mathew',
    '30',
    'student',
    ['Mike', 'Peter', 'Dan']
];

for (let index = johnArray.length; index >= 0; index--) {
    console.log(index, johnArray[index]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------- Starting exercise ${exercise} -------------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repitition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end ...');
    }
}