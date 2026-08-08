function analyzeArray (array) {
  return {
    average: getAverage(array), 
    max: getMax(array),
    min: getMin(array),
    length: getLength(array)
  };
}

function analysis (average, min, max, length) {
  this.average = average;
  this.min = min;
  this.max = max;
  this.length = length
}

function getAverage (array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0,) / getLength(array);
}

function getMax (array) {
  return array.toSorted((a, b) => b - a)[0];
}

function getMin (array) {
  return array.toSorted((a, b) => a - b)[0];
}

function getLength (array) {
  return array.length;
}

export { analyzeArray };