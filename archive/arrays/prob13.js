/**
 *26. Remove Duplicates from Sorted Array
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length;
  let i = 0;
  let prev = null;
  while (len >= 0) {
    len--;
    if (i === 0) {
      prev = nums[i];
      i++;
      continue;
    }
    if (prev === nums[i]) {
      nums.splice(i, 1);
    } else {
      prev = nums[i];
      i++;
    }
  }
  console.log(nums);
  return nums.length;
};

var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  var k = 0;

  nums.map((num) => {
    if (num !== nums[k]) {
      k++;
      nums[k] = num;
    }
  });

  return k + 1;
};
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }

  return k;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
