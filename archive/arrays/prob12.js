/**
 * @question : Set Zeros
 * @link : https://leetcode.com/problems/set-matrix-zeroes
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeros = (matrix) => {
  const z = { row: [], col: [] };
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        z.row.push(i);
        z.col.push(j);
      }
    }
  }

  for (let i of z.row) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let j of z.col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = 0;
    }
  }
  console.log(matrix);
};

setZeros([
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
]);
