// *QUESTION: write a function which calculates the sum of all digits

const sumOfDigits = (num) => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  return sum;
};

console.log(sumOfDigits(123));
