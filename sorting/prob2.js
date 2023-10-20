/**
 * @question : Find the 2 numbers in an array whose sum is a given number
 * @param :{number []} array
 * @param :{number} sum
 * @returns : {number []}
 */

function twoSum(array, sum) {
  let dict = {};

  for (let i of array) {
    if (dict[i]) dict[i]++;
    else dict[i] = 1;
  }

  for (let i of Object.keys(dict)) {
    if (dict[sum - i]) return [+i, sum - i];
  }

  return -1;
}

console.log(twoSum([1, 2, 3, 4, 5], 9));
module.exports = { twoSum };
