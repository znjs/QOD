// *QUESTION: Given 2 string check if they are anagram of first

const anagramCheck = (wordOne, wordTwo) => {
  let wordOneDict = {};
  let wordTwoDict = {};
  for (let letter of wordOne) {
    wordOneDict[letter] = (wordOneDict[letter] || 0) + 1;
  }
  for (let letter of wordTwo) {
    wordTwoDict[letter] = (wordTwoDict[letter] || 0) + 1;
  }
  for (let key in wordOneDict) {
    if (!wordTwoDict[key]) {
      return false;
    }
  }
  for (let key in wordTwoDict) {
    if (!wordOneDict[key]) {
      return false;
    }
  }
  return true;
};

console.log(anagramCheck("elbow", "below"));
