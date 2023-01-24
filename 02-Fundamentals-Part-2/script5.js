const friends = ['Mike', 'Tom', 'Dan', 'Peter'];

// add element at end
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// add element at begining
friends.unshift('John');
console.log(friends);

// remove element
const popedElement = friends.pop() // last element removed
console.log(friends);
console.log(popedElement);

friends.shift(); // remove first element
console.log(friends);


console.log(friends.indexOf('Tom'));
console.log(friends.indexOf('Tomy'));

console.log(friends.includes('Tom'));
console.log(friends.includes('Tomy'));