/**
 * @question : Bubble Sort
 * @complexity : O(n^2) -> sum of number of comparisons and swaps -> no of comparisons is always n(n-1)/2, number of swaps is O(n^2)
 * @isInPlace : true
 * @param {Array} arr
 * @returns {Array}
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

module.exports = { bubbleSort };
