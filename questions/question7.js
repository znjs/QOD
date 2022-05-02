// *QUESTION: Given a string return the String with all words capitalized

const toSentenceCase = (str) => {
  let strMatrix = str.split(" ").map((word) => word.split(""));
  strMatrix = strMatrix.map((wordArr) => {
    let letter = wordArr[0].toUpperCase();
    wordArr.shift();
    return [letter, ...wordArr].join("");
  });
  return strMatrix.join(" ");
};

console.log(toSentenceCase("we are neoGcamp"));
