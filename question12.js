// *QUESTION: rotate a string by n positions clockwise and anti-clockwise both

const rotateString = (str, number) => {
  if (number > str.length) {
    number = number % str.length;
  }

  let clockWise = "";
  let antiClockWise = "";
  clockWise = str.slice(number) + str.slice(0, number);
  antiClockWise =
    str.slice(str.length - number) + str.slice(0, str.length - number);
  console.log("Clockwise", clockWise);
  console.log("antiClockWise", antiClockWise);
};

console.log(rotateString("1234567890", 2));
