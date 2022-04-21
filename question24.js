// *QUESTION: Write a program which converts decimal number to binary

// const decimalToBinary = (num) => parseInt(num).toString(2);

const decimalToBinary = (num) => {
  let decimalNum = "";
  while (num) {
    decimalNum += num % 2;
    num = parseInt(num / 2);
  }
  return decimalNum.split("").reverse().join("");
};

console.log(decimalToBinary(4));
