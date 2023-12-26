// * QUESTION: write a function which take an array and 2 numbers, in which all the occurrences of first number are replaced by second

const replace = (arr, findNumber, replaceNumber) => {
  const finalArr = [];
  for (let i in arr) {
    if (arr[i] === findNumber) finalArr.push(replaceNumber);
    else finalArr.push(arr[i]);
  }
  return finalArr;
};

console.log(replace([1, 2, 3, 4, 3, 2, 1], 1, 10));
