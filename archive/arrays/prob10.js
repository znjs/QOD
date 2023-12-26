/**
 * @question :Find Peak Element
 * @link :https://leetcode.com/problems/find-peak-element/
 * @param: {number[]} nums
 * @return {number}
 */

const findPeakElement = (nums) => {
  if (nums.length === 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[0] > nums[1]) {
      return 0;
    }
    if (
      i === nums.length - 1 &&
      nums[nums.length - 2] < nums[nums.length - 1]
    ) {
      return nums.length - 1;
    }
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) return i;
  }
  return -1;
};

console.log(findPeakElement([1, 2, 3, 1]));
