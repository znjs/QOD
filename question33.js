/* 
*QUESTION:
Given an aray of numbers, pick any two numbers a and b, we could get the difference
by Math. abs (a - b).Write a function to get the largest difference.
*/

const absoluteDiff = (nums) => {
  let largest = -Infinity;
  let smallest = Infinity;
  for (let num of nums) {
    if (smallest > num) smallest = num;
    if (largest < num) largest = num;
  }
  return largest - smallest;
};

console.log(absoluteDiff([-23, -45, -1, -5, -6]));
