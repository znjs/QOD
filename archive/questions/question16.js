// *QUESTION: given a random number of integers find the largest of all

const findMax = (...nums) => {
  let maxNum = -Infinity;
  for (let i in nums) {
    if (maxNum < nums[i]) maxNum = nums[i];
  }
  return maxNum;
};

console.log(findMax(1, 20, 3, 4));
