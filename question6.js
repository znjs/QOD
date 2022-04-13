// *QUESTION: Write a function which takes and array and a number and returns the index of the number in the array

const indexOf = (arr, num) => {
  for (let i in arr) {
    if (arr[i] === num) return i;
  }
  return -1;
};

console.log(indexOf([1, 2, 3, 4, 5], 2));
console.log(indexOf([1, 2, 3, 4, 5], 10));
