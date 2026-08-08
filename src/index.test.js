// All the functions are imported from index.js which itself gets imports from all the other js files
// Contains tests for all the functions

import { fibs, fibsRec } from "./index.js";

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
