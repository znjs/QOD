/**
 * @question : Find number of pairs whose sum is less than target
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const countPairs = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
    }
  }
  return count;
};

module.exports = { countPairs };
