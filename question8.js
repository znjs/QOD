// *QUESTION: write a function which takes a string and returns number of words

const noOfWords = (str) => {
  let count = 0;
  for (let i in str) {
    if (str[i] === " ") count++;
  }
  return ++count;
};

console.log(noOfWords("We Are NeoGcamp"));
