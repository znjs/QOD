// *QUESTION: given an array of num's with length n, return the element which occurred atleast n/2 times in the array

const halfOccurrence = (arr) => {
  const arrFrequency = {};
  let num = -Infinity;
  for (let i of arr) {
    arrFrequency[i] = (arrFrequency[i] || 0) + 1;
  }
  for (let i in arrFrequency) {
    if (arrFrequency[i] >= arr.length / 2) num = i;
  }
  return num > 0 ? num : -1;
};

console.log(halfOccurrence([2, 2, 1, 1, 1, 2, 2]));
