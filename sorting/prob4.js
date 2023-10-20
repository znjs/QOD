/**
 * @question : Remove all the elements which match the target value
 * @param :{number []} array
 * @param :{number} target
 * @returns : {number []}
 */

function removeTargetElements(array, target) {
  for (let i in array) {
    if (array[i] === target) array.splice(i, 1);
  }
  return array;
}

module.exports = { removeTargetElements };
