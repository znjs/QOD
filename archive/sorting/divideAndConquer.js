/**
 * @question : Sort an array using divide and conquer algorithm
 * @param {Array} arr
 * @returns {Array}
 */

const combineSortedArrays = (arr1, arr2) => {
  let result = [];
  let i = 0,
    j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      result.push(arr2[j]);
      j++;
      continue;
    }
    if (j >= arr2.length) {
      result.push(arr1[i]);
      i++;
      continue;
    }
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
      continue;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  return result;
};

const divideAndConquer = (arr) => {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let a1 = divideAndConquer(arr.slice(0, mid));
  let a2 = divideAndConquer(arr.slice(mid));
  return combineSortedArrays(a1, a2);
};

module.exports = { divideAndConquer };
console.log(combineSortedArrays([2], [1]));

console.log(divideAndConquer([3, 2, 43, 1, 3, 2]));
