// *QUESTION: Rotate a square matrix by 90 degrees

const rotateMatrix = (matrix) => {
  // TRANSPOSE THE MATRIX
  const numOfRows = matrix.length;
  let result = [];
  for (let i = 0; i < numOfRows; i++) {
    result.push([]);
  }
  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfRows; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  // REVERSE EACH ROW
  for (let i = 0; i < numOfRows; i++) {
    result[i] = result[i].reverse();
  }
  return result;
};

console.log(
  rotateMatrix([
    [0, 1],
    [2, 3],
  ])
);

/**
 * [0,1]    [0,2]
 * [2,3]    [1,3]
 *
 * [2,0]
 * [3,1]
 */

/**
 * 0,0 => 0,1
 * 0,1 => 1,1
 * 1,0 => 0,0
 * 1,1 => 1,0
 */
