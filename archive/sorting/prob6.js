/**
 * @question : Sort colors
 * @link :https://leetcode.com/problems/sort-colors/
 * @param: {number[]} nums
 * @return {void}
 */

const sortColors = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let ITR = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[ITR] > nums[j]) {
        ITR = j;
      }
    }
    if (ITR) {
      [nums[i], nums[ITR]] = [nums[ITR], nums[i]];
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
