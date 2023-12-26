/**
 * @question : Selection Sort
 * @param {Array} arr
 * @returns {Array}
 * @timeComplexity : O(n^2) -> sum of number of comparisons and swaps -> no of comparisons is always n(n-1)/2, number of swaps is O(n)
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

module.exports = { selectionSort };
