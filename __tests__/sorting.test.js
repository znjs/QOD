const { bubbleSort } = require("../sorting/bubbleSort");
const { insertionSort } = require("../sorting/insertionSort");
const { selectionSort } = require("../sorting/selectionSort");

describe("Sorting", () => {
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
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([1, 2, 2, 3, 6, 2, 1, 5, -2, 8, 12])).toEqual([
      -2, 1, 1, 2, 2, 2, 3, 5, 6, 8, 12,
    ]);
  });
});
