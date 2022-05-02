// *QUESTION: Check if the given string is an pangram  are not
// ?Pangram: A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once.

// *METHOD 1

const pangramCheck = (str) => {
  str = str.toLowerCase();
  const stringCharacters = {};
  for (let i in str) {
    if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
      if (Object.keys(stringCharacters).includes(str[i])) {
        stringCharacters[str[i]]++;
      } else {
        stringCharacters[str[i]] = 1;
      }
    }
  }
  if (Object.keys(stringCharacters).length === 26) return true;
  return false;
};

console.log(pangramCheck("qwertyuiopasdfghjklzxcvbnm"));

// *METHOD 2
const isPangram = function (str) {
  const alpha = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    " ",
  ];

  const temp = str.toLowerCase();
  for (let i = 0; i < temp.length; i++) {
    if (!alpha.includes(temp[i])) {
      return false;
    }
  }
  return true;
};

console.log(isPangram("qwertyuiopasdfghjklzx "));

/**
 * TIME COMPLEXITY: O(n)
 * SPACE COMPLEXITY: O(n)
 * for both the methods
 */
