// *QUESTION: Given a string s, reverse only all the vowels in the string and return it

const vowelReverse = (str) => {
  const VOWELS = "aeiouAEIOU".split("");
  let strArr = str.split("");
  let strDict = [];
  for (let i in strArr) {
    VOWELS.includes(strArr[i])
      ? strDict.push({ index: i, char: strArr[i], type: "vowel" })
      : strDict.push({ index: i, char: strArr[i], type: "consonant" });
  }
  let vowelsPosition = strDict
    .filter((item) => item.type === "vowel")
    .map((item) => item.index);
  for (let i in strDict) {
    if (VOWELS.includes(strDict[i].char)) {
      strDict[i].index = vowelsPosition.pop();
    }
  }
  strArr = [];
  for (let i in strDict) {
    strArr[strDict[i].index] = strDict[i].char;
  }
  return strArr.join("");
};

console.log(vowelReverse("neoGCamp"));
console.log(vowelReverse("engine"));
