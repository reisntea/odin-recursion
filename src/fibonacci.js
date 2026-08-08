function fibs (num) {
  // fringe cases since fibArray includes first two numbers
  if (num === 0) return [];
  if (num === 1) return [0];

  // fib sequence is f(n) = f(n - 1) + f(n - 2)
  // So array starts with the first two numbers in the sequence
  const fibArray = [0, 1];

  // Adds a number to array in each loop following the fib sequence
  for (let i = 2; i < num; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}

function fibsRec (num, array = []) {
  // num counts down each recursion and once it reaches zero it means the array is done
  if (num === 0) return array;

  // First two checks are for the fringe cases for the first two numbers
  if (array.length === 0) {
    array.push(0);
  } else if (array.length === 1) {
    array.push(1);
  } else {
    array.push((array[array.length - 1] + array[array.length - 2]));
  }
  
  // Recursively calls this function again with the array
  return fibsRec(num - 1, array);
}

export { fibs, fibsRec };