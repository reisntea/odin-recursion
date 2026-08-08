// Imports functions from the other js files so that it can export them to index.test.js
import { fibs, fibsRec } from "./fibonacci";
import { mergeSort } from "./merge-sort";

export { fibs, fibsRec, mergeSort };