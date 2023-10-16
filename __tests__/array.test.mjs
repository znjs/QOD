const { linearSearch } = require("../arrays/prob0");
const { binarySearch, recursiveBinarySearch } = require("../arrays/prob1.js");
const { findPair } = require("../arrays/prob4");
const { maxProfit } = require("../arrays/prob5");
const { searchMatrix } = require("../arrays/prob6");
console.log(searchMatrix);
describe("Searching Algorithms", () => {
  test("Linear Search", () => {
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test("Binary Search", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test("Recursive Binary Search", () => {
    expect(recursiveBinarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(recursiveBinarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
});

describe("Array Problems", () => {
  test("Array Problems", () => {
    expect(findPair([20, 40, 60, 80, 90, 120, 240], 210)).toEqual([4, 5]);
    expect(findPair([20, 40, 60, 80, 120, 240], 210)).toEqual(-1);
  });
});

test("maxProfit", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfit([1, 10, 5, 3, 6, 4])).toBe(9);
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
});

test("Search for element found", () => {
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      11
    )
  ).toBe(true);
});

test("Search for element notfound", () => {
  expect(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 12, 16, 20],
        [23, 30, 34, 60],
      ],
      11
    )
  ).toBe(false);
});
