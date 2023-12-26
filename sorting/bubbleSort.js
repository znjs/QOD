/**
 * @name bubbleSort
 * @description Sorts an array using the bubble sort algorithm
 * @param {number[]} arr
 * @return {number[]}
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

module.exports = { bubbleSort };

// testingPath : /__tests__/sorting.test.js
