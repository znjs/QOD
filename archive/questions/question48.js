// *QUESTION given a matrix return the transposed version od it

const transposeMatrix = (matrix) => {
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
  return result;
};

console.log(
  transposeMatrix([
    [0, 1],
    [2, 3],
  ])
);
