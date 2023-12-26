/**
 * @link :https://leetcode.com/problems/shuffle-the-array
 * @question : Shuffle the Array
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = function (nums, n) {
  let numCount = nums.length;
  let subArray = [];
  let result = [];

  while (nums.length > 0) {
    subArray.push(nums.splice(0, n));
  }

  while (numCount > 0) {
    for (const element of subArray) {
      let ETI = element.shift();
      if (ETI) {
        result.push(ETI);
        numCount--;
      }
    }
  }
  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
