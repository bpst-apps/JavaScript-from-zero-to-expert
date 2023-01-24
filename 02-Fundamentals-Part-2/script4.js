
const friend1 = 'Mike';
const friend2 = 'Tom';
const friend3 = 'Dan';

// create array
const friends = ['Mike', 'Tom', 'Dan', 'Peter']
console.log(friends);


const years = new Array(1990, 1984, 2008, 2020);
console.log(years);

// access element of array
console.log(friends[0]);
console.log(years[3]);

// using length property
console.log(friends.length);
console.log(years[years.length - 1]);

friends[2] = 'Jay';
console.log(friends);