// *QUESTION: Write a function which takes a string and a number(n) and shift each letter in the string by n positions

const encodeString = (str, num) => {
  num = num % 26;
  let charArr = str.split("");
  charArr = charArr.map((char) => {
    if (
      (char.charCodeAt(0) + num >= 65 && char.charCodeAt(0) + num <= 90) ||
      (char.charCodeAt(0) + num >= 97 && char.charCodeAt(0) + num <= 122)
    ) {
      return char.charCodeAt(0) + num;
    }
    return char.charCodeAt(0) + num - 26;
  });
  charArr = charArr.map((charCode) => String.fromCharCode(charCode));
  return charArr.join("");
};

console.log(encodeString("neogCamp", 3000));

//Char Code for edge cases
//A => 65
//a => 97
//Z => 90
//z => 122
