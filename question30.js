// *QUESTION: Given a string replace string with number times each character is repeated.
/**
 * ?Input: aaacdbbbb
 * ?Output: a3c1d1b4
 */

const alphaCountString = (str) => {
  const stringDict = {};
  let finalString = "";
  for (let i in str) {
    if (Object.keys(stringDict).includes(str[i])) {
      stringDict[str[i]]++;
    } else {
      stringDict[str[i]] = 1;
    }
  }
  Object.entries(stringDict).forEach(
    ([key, value]) => (finalString += String(key) + String(value))
  );
  return finalString;
};

console.log(alphaCountString("aaacdbbb"));
