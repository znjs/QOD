/**
 * @question :Set Matrix Zeroes
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const getAdjacentVertices = (i, j, verticalLen, horizontalLen) => {
  let left = j - 1;
  if (left < 0) left = horizontalLen - 1;
  let right = j + 1;
  if (right >= horizontalLen) right = 0;
  let top = i - 1;
  if (top < 0) top = verticalLen - 1;
  let bottom = i + 1;
  if (bottom >= verticalLen) bottom = 0;
  return [
    [top, j],
    [bottom, j],
    [i, left],
    [i, right],
  ];
};

var setZeroes = function (matrix) {
  let zeroPositions = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroPositions.push([i, j]);
        let res = getAdjacentVertices(i, j, matrix.length, matrix[0].length);
        zeroPositions.push(...res);
      }
    }
  }
  for (let [i, j] of zeroPositions) {
    matrix[i][j] = 0;
  }
  console.dir(matrix);
};

setZeroes([
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
]);
