// *QUESTION: Write a function which reverse the words in a string keeping the order of the words same

const stringReverse = (str) => {
  let reverseStr = "";
  for (let i in str) {
    reverseStr += str[str.length - 1 - i];
  }
  return reverseStr;
};

const wordsReverse = (str) => {
  let words = str.split(" ");
  for (let i in words) {
    words[i] = stringReverse(words[i]);
  }
  return words.join(" ");
};

console.log(wordsReverse("we are neoGrammers"));
