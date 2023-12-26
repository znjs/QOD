/**
 * @company : Adobe
 * @inputSample : [1,2,3,4,5,6,7,8,9,10], 4
 * @outputSample : 3
 * @questions : Ternary search on sorted array
 * @timeComplexity : O(log3(n))
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

function ternarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 3);
    let mid2 = Math.floor((2 * (low + high)) / 3);
    if (arr[mid1] === target) return mid1;
    else if (arr[mid2] === target) return mid2;
    else if (arr[mid1] > target) high = mid1 - 1;
    else if (arr[mid2] < target) low = mid2 + 1;
    else {
      low = mid1 + 1;
      high = mid2 - 1;
    }
  }
  return -1;
}

module.exports = { ternarySearch };
