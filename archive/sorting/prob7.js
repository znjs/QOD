/**
 * @question :Kth Largest Element in an Array
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */

const findKthLargest = (nums, k) => {
  for (let i = nums.length - 1; i > nums.length - k - 1; i--) {
    let ITR = i;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[ITR] < nums[j]) {
        ITR = j;
      }
    }
    [nums[ITR], nums[i]] = [nums[i], nums[ITR]];
  }
  console.log(nums);
  return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
