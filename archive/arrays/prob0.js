/**
 * *Linear Search
 * *Given an array of integers, find the index of a target value using a linear search algorithm.
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

function linearSearch(arr, target) {
  for (let i in arr) {
    if (arr[i] === target) return Number(i);
  }
  return -1;
}

module.exports = { linearSearch };
