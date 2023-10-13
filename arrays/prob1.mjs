/**
 * *Binary Search
 * *Given a sorted array of integers, find the index of a target value using a binary search algorithm.
 * *A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half.
 * @param {number[]} arr
 * @param {number[]} target
 * @returns {number}
 */
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

/**
 * @description Recursive Binary Search
 * @param {number[]} arr
 * @param {number} target
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */

function recursiveBinarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target)
    return recursiveBinarySearch(arr, target, mid + 1, high);
  else return recursiveBinarySearch(arr, target, low, mid - 1);
}

module.exports = { binarySearch, recursiveBinarySearch };
