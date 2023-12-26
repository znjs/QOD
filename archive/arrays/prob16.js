/**
 * 268. Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  let mapper = {};
  for (let i of nums) {
    mapper[i] = true;
  }
  let arr = Object.keys(mapper);
  let i = 0;
  console.log(arr);
  for (; i < arr.length; i++) {
    if (arr[i] != i) return i;
  }
  return i;
};

var missingNumber = function (nums) {
  let n = nums.length + 1;
  let total = (n * (n - 1)) / 2;
  for (let num of nums) {
    total -= num;
  }
  return total;
};

console.log(missingNumber([0, 1]));
