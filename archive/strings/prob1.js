/**
 * @question : Valid AnaGram
 * @param: {str1} string
 * @param: {str2} string
 * @returns: boolean
 */

const compareObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let i of Object.keys(obj1)) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  for (let i of Object.keys(obj2)) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};

export const validAnagram = (str1, str2) => {
  const str1Ref = {};
  const str2Ref = {};

  for (let i of str1) {
    if (str1Ref[i]) {
      str1Ref[i] = str1Ref[i] + 1;
      continue;
    }
    str1Ref[i] = 1;
  }
  for (let i of str2) {
    if (str2Ref[i]) {
      str2Ref[i] = str2Ref[i] + 1;
      continue;
    }
    str2Ref[i] = 1;
  }

  return compareObjects(str1Ref, str2Ref);
};

console.log(validAnagram("anagaram", "nagarama"));
