/**
 * @question :  Restore the Array From Adjacent Pairs
 * @link : https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */

const restoreArray = function (adjacentPairs) {
  let result = [...adjacentPairs.shift()];
  let firstElement = result[0];
  let lastElement = result[result.length - 1];
  let len = adjacentPairs.length;

  while (len > 0) {
    for (let i in adjacentPairs) {
      let [num1, num2] = adjacentPairs[i];
      if ([firstElement, lastElement].findIndex((num) => num === num1) > -1) {
        let index = [firstElement, lastElement].findIndex(
          (num) => num === num1
        );
        if (index === 0) {
          result.unshift(num2);
        } else {
          result.push(num2);
        }
        adjacentPairs.splice(i, 1);
        len--;
        firstElement = result[0];
        lastElement = result[result.length - 1];
      } else if (
        [firstElement, lastElement].findIndex((num) => num === num2) > -1
      ) {
        let index = [firstElement, lastElement].findIndex(
          (num) => num === num2
        );
        if (index === 0) {
          result.unshift(num1);
        } else {
          result.push(num1);
        }
        adjacentPairs.splice(i, 1);
        len--;
        firstElement = result[0];
        lastElement = result[result.length - 1];
      }
    }
  }
  return result;
};

console.log(
  restoreArray([
    [2, 1],
    [3, 4],
    [3, 2],
  ])
);
