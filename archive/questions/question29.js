// *QUESTION: Find largest and smallest word in  a string
/**
 * Input : "This is a test string"
 * Output : Minimum length word: a
 *          Maximum length word: string
 */

const extremeWords = (str) => {
  const wordDict = {};
  str = str.split(" ");
  for (i in str) {
    if (Object.keys(wordDict).includes(String(str[i].length))) {
      wordDict[str[i].length].push(str[i]);
    } else {
      wordDict[str[i].length] = [str[i]];
    }
  }
  console.log(wordDict);
  console.log("Longest Word: ", wordDict[Object.keys(wordDict).pop()].pop());
  console.log("Shortest Word: ", wordDict[Object.keys(wordDict).shift()].pop());
};

extremeWords("This is a String and a lengthy one the i");
