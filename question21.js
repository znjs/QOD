// *QUESTION: Write a program that prints the most repeated character in a string

const mostOccurringChar = (str) => {
  let charObj = {};
  for (let i in str) {
    if (Object.keys(charObj).includes(str[i])) {
      charObj[str[i]]++;
    } else charObj[str[i]] = 1;
  }
  let mostOccurredChar = Object.keys(charObj)[0];
  let uniqueChars = Object.keys(charObj);
  for (let i in uniqueChars) {
    if (charObj[uniqueChars[i]] > charObj[mostOccurredChar]) {
      mostOccurredChar = uniqueChars[i];
    }
  }
  return mostOccurredChar;
};

console.log(mostOccurringChar("engine"));
