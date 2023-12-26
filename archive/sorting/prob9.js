/**
 * @question :Largest Perimeter Triangle
 * @link : https://leetcode.com/problems/largest-perimeter-triangle/
 * @param {number[]} A
 * @return {number}
 */

const getPerimeter = (nums) => {
  if (
    nums[0] + nums[1] <= nums[2] ||
    nums[1] + nums[2] <= nums[0] ||
    nums[0] + nums[2] <= nums[1]
  )
    return 0;

  return nums[0] + nums[1] + nums[2];
};

var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => a - b);

  for (let i = nums.length - 1; i >= 2; i--) {
    const perimeter = getPerimeter([nums[i], nums[i - 1], nums[i - 2]]);
    if (perimeter) return perimeter;
  }

  return 0;
};
