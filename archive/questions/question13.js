// *QUESTION: Write a program that masks the last 4 letters of a string

// const maskLastFour = (str) => {
//   return str.slice(0, str.length - 4) + "####";
// };

const maskLastFour = (str) => {
  let strLength = str.length;
  let result = "";
  for (let i = 0; i < strLength - 4; i++) result += str[i];
  return result + "####";
};

console.log(maskLastFour("1234567890"));
