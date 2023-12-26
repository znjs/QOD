// *QUESTION: Given a str, return the length of the last word

const lengthOfLastWord = (str) => {
  let letterCount = 0;
  for (let i of str) {
    if (i === " ") letterCount = 0;
    else letterCount++;
  }
  return letterCount;
};

console.log(lengthOfLastWord("we are neogrammers"));
