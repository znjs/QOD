/**
 * @company : Amazon, Google
 * @inputSample : [20,40,60,80,90,120,240] , 210
 * @outputSample :
 * @question : find a pair index whose sum is equal to given number
 * @solution : Two pointer method
 */

/**
 *
 * @param {number[]} arr
 * @param {number} sum
 * @returns [number, number] || -1
 */
function findPair(arr, sum) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    if (arr[l] + arr[r] === sum) {
      return [l, r];
    } else if (arr[l] + arr[r] < sum) {
      l++;
    } else {
      r--;
    }
  }
  return -1;
}

module.exports = { findPair };
