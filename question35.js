// *QUESTION: Given an array of integers move all 0's to end of the array keeping the order of other elements same

const shiftZeros = (arr) => {
  let zeroCount = 0;
  let finalArr = [];
  for (let i of arr) {
    if (i === 0) zeroCount++;
    else finalArr.push(i);
  }
  while (zeroCount) {
    finalArr.push(0);
    zeroCount--;
  }
  return finalArr;
};

console.log(shiftZeros([0, 2, 0, 3, 12, 0]));
