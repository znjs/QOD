const { bubbleSort } = require("../sorting/bubbleSort");
const { divideAndConquer } = require("../sorting/divideAndConquer");
const { insertionSort } = require("../sorting/insertionSort");
const { secondLargest } = require("../sorting/prob0");
const { secondSmallest } = require("../sorting/prob1");
const { twoSum } = require("../sorting/prob2");
const { removeDuplicates } = require("../sorting/prob3");
const { removeTargetElements } = require("../sorting/prob4");
const { countPairs } = require("../sorting/prob5");
const { selectionSort } = require("../sorting/selectionSort");

test("Bubble Sort", () => {
  expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("Selection Sort", () => {
  expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("Insertion Sort", () => {
  expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("Second Largest", () => {
  expect(secondLargest([6, 5, 4, 3, 3, 2, 1])).toEqual(5);
});

test("Second Smallest", () => {
  expect(secondSmallest([6, 5, 4, 3, 3, 2, 1])).toEqual(2);
});

test("Two Sum", () => {
  expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([4, 5]);
});

test("Remove Duplicates", () => {
  expect(
    removeDuplicates([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])
  ).toEqual([1, 2, 3, 4, 5]);
});

test("Remove Target Elements", () => {
  expect(removeTargetElements([1, 2, 3, 4, 43, 2, 3, 4, 2, 4], 4)).toEqual([
    1, 2, 3, 43, 2, 3, 2,
  ]);
});

test("Count Sums", () => {
  expect(countPairs([-1, 1, 2, 3, 1], 2)).toBe(3);
  expect(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)).toBe(10);
});

test("Divide And Conquer Sorting", () => {
  expect(divideAndConquer([3, 2, 43, 1, 3, 2])).toEqual([1, 2, 2, 3, 3, 43]);
});
