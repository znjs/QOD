/**
 *? Question: Print all pairs with given sum
 * Examples :
 * Input  :  arr[] = {1, 5, 7, -1, 5},
 *           sum = 6
 * Output : (1, 5) (7, -1) (1, 5)
 *
 * Input  :  arr[] = {2, 5, 17, -1},
 *           sum = 7
 * Output :  (2, 5)
 */

function findSumPairs(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) result.push([arr[i], arr[j]]);
    }
  }

  return result;
}
console.log(findSumPairs([1, 5, 7, -1, 5], 6));
