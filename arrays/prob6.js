/**
 * @company : Amazon
 * @inputSample :
 * [[1,3,5,7],
 * [10,11,16,20],
 * [23,30,34,60]], 11
 * @outputSample : true
 * @question : find if a number exists in a matrix of sorted rows
 */

/**
 *  @param {number[][]} matrix
 *  @param {number} target
 *  @returns {boolean}
 *  @timeComplexity : O(log(mn))
 * */

function searchMatrix(matrix, target) {
  let top = 0;
  let bottom = matrix.length - 1;
  while (!(bottom - top <= 1)) {
    if (matrix[Math.floor((top + bottom) / 2)][0] <= target)
      top = Math.floor((top + bottom) / 2);
    else bottom = Math.floor((top + bottom) / 2);
  }
  let targetRow = matrix[bottom][0] <= target ? matrix[bottom] : matrix[top];

  let low = 0;
  let high = targetRow.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (targetRow[mid] === target) return true;
    else if (targetRow[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}

module.exports = { searchMatrix };
