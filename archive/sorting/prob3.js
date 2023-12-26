/**
 * @question : Remove duplicate elements from an array
 * @param :{number []} array
 * @returns : {number []}
 */

function removeDuplicates(array) {
  let dict = {};
  for (let i of array) {
    if (dict[i]) dict[i]++;
    else dict[i] = 1;
  }
  return Object.keys(dict).map(Number);
}

module.exports = { removeDuplicates };
