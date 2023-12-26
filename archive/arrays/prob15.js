/**
 * 118. Pascal's Triangle
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let i = 0;
  let pascalTriangle = [[1]];
  i++;
  if (numRows === 1) return pascalTriangle;
  pascalTriangle.push([1, 1]);
  if (numRows === 2) return pascalTriangle;
  while (i < numRows) {
    i++;
    let temp = [1];
    for (let j = 1; j < pascalTriangle[i - 1].length; j++) {
      temp.push(pascalTriangle[i - 1][j] + pascalTriangle[i - 1][j - 1]);
    }
    temp.push(1);
    pascalTriangle.push(temp);
  }
  return pascalTriangle;
};

console.log(generate(5));
