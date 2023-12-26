/**
 ** 88. Merge Sorted Array in-place
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  let i = 0;
  let j = 0;
  while (i < m + n) {
    if (nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  if (j < n) {
    nums1.splice(i, 0, ...nums2.slice(j));
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
