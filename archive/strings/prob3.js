/**
 * @question :Merge Strings Alternately
 * @link :https://leetcode.com/problems/merge-strings-alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let minLen = Math.min(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < minLen; i++) {
    result = result + word1[i] + word2[i];
  }
  if (word1.length > minLen) {
    result += word1.slice(minLen);
  }
  if (word2.length > minLen) {
    result += word2.slice(minLen);
  }
  return result;
};
