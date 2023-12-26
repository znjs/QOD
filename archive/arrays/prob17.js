/**
 * 136. Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let mapper = {};
  for (let i of nums) {
    if (mapper[i]) mapper[i] += 1;
    else {
      mapper[i] = 1;
    }
  }
  for (let [key, value] of Object.entries(mapper)) {
    if (value === 1) {
      return key;
    }
  }
};
console.log(singleNumber([4, 1, 2, 1, 2]));
