// *QUESTION: Rearrange characters in a string such that no two adjacent are same

/**
 * Input: aaabc
 * Output: abaca
 *
 * Input: aaaabc
 * Output: Not Possible
 */

// const rearrangeChars = (str) => {
//   const stringDict = {};
//   let finalString = "";
//   for (let i in str) {
//     stringDict[str[i]] = (stringDict[str[i]] || 0) + 1;
//   }
//   console.log(stringDict);
//   while (new Set(Object.values(stringDict)).length > 1) {
//     Object.entries(stringDict).forEach(([key, value]) => {
//       if (value) {
//         finalString = finalString + key;
//         stringDict[key] = value - 1;
//       }
//     });
//   }
//   console.log(finalString);
// };

const rearrangeChars = (str) => {
  const charMapKeys = [];
};

console.log(rearrangeChars("aaabc"));
