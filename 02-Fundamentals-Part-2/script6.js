// order of element matters as that's how we access elements
const johnArray = [
    'John',
    'Mathew',
    '30',
    'student',
    ['Mike', 'Peter', 'Dan']
];

// object literal syntax - order doesn't matter
const john = {
    firstName: 'John',
    lastName: 'Mathew',
    age: 30,
    job: 'student',
    friends: ['Mike', 'Peter', 'Dan']
};
console.log(john);

// . operator - used real property name
console.log(john.lastName);
console.log(john['lastName']);


// if we need to first compute property name then use this else use .
const nameKey = 'Name';
console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);


// ask a prompt -  example
const interestedIn = prompt('What do you want to know about John? Choose between firstName, lastName, age, job, and friends');

if (john[interestedIn.toLowerCase()]) {
    console.log(john[interestedIn.toLowerCase()]);
} else {
    console.log('Wrong request ! Choose between firstName, lastName, age, job, and friends');
}


john.location = 'London';
john['twitter'] = '@johntemp';
console.log(john);


console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[0]}`)












