
const john = {
    firstName: 'John',
    lastName: 'Mathew',
    birthYear: 1990,
    job: 'student',
    friends: ['Mike', 'Peter', 'Dan'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2067 - birthYear;
    // },
    // calcAge: function () {
    //     // console.log(this);
    //     return 2067 - this.birthYear;
    // },
    calcAge: function () {
        this.age = 2067 - this.birthYear;
        return this.age;
    }
};

// console.log(john.calcAge(1990));
// console.log(john['calcAge'](1990));

// console.log(john.calcAge());
// console.log(john['calcAge']());

console.log(john.calcAge());
console.log(john.age);


