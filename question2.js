// * QUESTION: Without using inbuilt methods write a function which returns the length of an array

const arrayLength = (arr) => {
  let length = 0;
  for (let _ in arr) {
    length++;
  }
  return length;
};

console.log(arrayLength([1, 2, 2, 4, 5, 6, null, undefined]));
