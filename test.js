const fs = require('fs');

const values = JSON.parse(fs.readFileSync('./sample.json'));



const _ = require('lodash');

function sum(numbers) {
  return _.reduce(numbers, (a, b) => a + b, 0);
}

function average(numbers) {
  return sum(numbers) / (numbers.length || 1);
}

function makeWindow(before) {
  return function (_number, index, array) {
    const start = Math.max(0, index - before);
    const end   = Math.min(array.length, index + 1);
    return _.slice(array, start, end);
  }
}

function movingAverage(numbers) {
  const winSize = 10;
  const values = _.chain(numbers)
    .map('ArrayGyro[0].x')
    .map(makeWindow(winSize))
    .map(average)
    .filter((value, i) => i !== 0 && i % winSize === 0)
    .map(value => value > 1 || value < -1)
    .value();
  return values;
}

const foo = movingAverage(values, 10);
console.log(JSON.stringify(foo, null, 2));
