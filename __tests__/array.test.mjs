const { linearSearch } = require("../arrays/prob0");
const { binarySearch, recursiveBinarySearch } = require("../arrays/prob1.mjs");

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
