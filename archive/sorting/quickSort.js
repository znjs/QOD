/**
 * @param: {number[]} nums
 * @returns: {number[]}
 */

// ?out-place sorting
const quickSort = (nums) => {
  if (nums.length <= 1) return nums;
  const left = [];
  const right = [];
  const pivot = nums[nums.length - 1];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }
  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);
  return [...leftSorted, pivot, ...rightSorted];
};

// ?in-place sorting
const partition = (arr, p, q) => {
  const pivot = arr[p];
  let i = p;
  for (let j = p + 1; j <= q; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i], arr[p]] = [arr[p], arr[i]];
  return i;
};

const quickSort2 = (arr, p = 0, q = arr.length - 1) => {
  if (p < q) {
    let mid = partition(arr, p, q);
    quickSort2(arr, p, mid - 1);
    quickSort2(arr, mid + 1, q);
  }
  return arr;
};

console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([-3, 5, 1, 8, 10, -2]));
console.log(quickSort2([-3, 5, 1, 8, 10, -2]));
