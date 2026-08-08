function mergeSort (array) {
  // Creates copy of array so it can change it and return the ordered result when it's done
  const result = array.slice(0);

  // If the array is greater than 1 than it needs to be sorted
  // If it's not greater than 1 then it just needs to be returned as is so it can be merged
  if (result.length > 1) {
    // Splits the array into two halves, leftArray and rightArray
    const halfSize = Math.floor(result.length / 2);

    const leftArray = result.slice(0, halfSize);
    const rightArray = result.slice(halfSize);

    // Recursively call the the function on both halves
    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    // Call merge on the sorted halves and the result
    merge(sortedLeftArray, sortedRightArray, result);
  }

  return result;
}

// Modifies the array argument (doesn't return a copy)
function merge (leftArray, rightArray, array) {
  const leftSize = leftArray.length;
  const rightSize = rightArray.length;
  // Variables that function as indices for all arrays
  let i = 0;
  let j = 0;
  let k = 0;

  // Sorts the two arrays by modifying the value in the array
  // If the value in the leftArray is larger than the rightArray than we set the current index in k to that value
  // and then increment the index of the leftArray and the array by 1. Essentially, going through the array
  // and vice versa.
  while (i < leftSize && j < rightSize) {
    if (leftArray[i] < rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  // Check for any leftover values after sorting, for when either leftArray or rightArray are finished before the other
  // Adds all the values from the array that's not finished to the array.
  while (i < leftSize) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightSize) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

export { mergeSort };