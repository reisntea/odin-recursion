// All the functions are imported from index.js which itself gets imports from all the other js files
// Contains tests for all the functions

import { fibs, fibsRec, mergeSort } from "./index.js";

test("fibonacci sequence no recursion", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  expect(fibs(1)).toEqual([0]);
  expect(fibs(2)).toEqual([0, 1]);
});

test("fibonacci sequence with recursion", () => {
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  expect(fibsRec(1)).toEqual([0]);
  expect(fibsRec(2)).toEqual([0, 1]);
});

test("merge sort", () => {
 expect(mergeSort([])).toEqual([]);
 expect(mergeSort([73])).toEqual([73]);
 expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
 expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
 expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});