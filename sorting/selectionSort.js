/**
 * @name selection sort
 * @description Sorts an array using the selection sort algorithm
 * @param {number[]} arr
 * @return {number[]}
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    minPos = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minPos]) {
        minPos = j;
      }
    }
    [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
  }
  return arr;
}

module.exports = { selectionSort };
