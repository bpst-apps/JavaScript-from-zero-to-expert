'use strict';

const x = '23';

const calcAge = (birthYear) => 2067 - birthYear;

// problem statement
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// steps to solve problem
const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  return max - min;
};

const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);
