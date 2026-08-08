// All the functions are imported from index.js which itself gets imports from all the other js files
// Contains tests for all the functions

import { analyzeArray, caesarCipher, calculator, capitalize, reverseString, shiftChar } from "./index.js";

test("capitalize words", () => {
  expect(capitalize("word")).toBe("Word");
  expect(capitalize("video")).toBe("Video");
});

test("capitalize stress test", () => {
  expect(capitalize("")).toBe("");
  expect(capitalize("1video")).toBe("1video");
});

test("reverse string", () => {
  expect(reverseString("thingy")).toBe("ygniht");
  expect(reverseString("pop-out")).toBe("tuo-pop");
});

test("reverse string stress test", () => {
  expect(reverseString("")).toBe("");
  expect(reverseString("quick brown fox")).toBe("xof nworb kciuq");
});

test("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(4, 0)).toBe(4);
});

test("subtract", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(4, 0)).toBe(4);
});

test("divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(4, 1)).toBe(4);
});

test("multiply", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
  expect(calculator.multiply(4, 0)).toBe(0);
});

test("caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
  });
  expect(analyzeArray([1,4,7])).toStrictEqual({
   average: 4,
   min: 1,
   max: 7,
   length: 3
  });
});