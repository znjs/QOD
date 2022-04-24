// *QUESTION: Tokenize a string
//     Input: Banana and Mango
//     Token: a
//     Output: [B, n, n,  ,nd M, ngo]

const stringTokenize = (str, token) => {
  let tokenizedArr = [];
  let tokenizedStr = "";
  i = 0;
  while (i < str.length) {
    if (str[i] === token) {
      tokenizedArr.push(tokenizedStr);
      tokenizedStr = "";
    } else {
      tokenizedStr += str[i];
    }
    i++;
  }
  if (tokenizedStr) tokenizedArr.push(tokenizedStr);
  return tokenizedArr;
};

console.log(stringTokenize("Banana and Mango", "a"));
console.log(stringTokenize("aaaaaaaaaaaaaaa", "a"));
