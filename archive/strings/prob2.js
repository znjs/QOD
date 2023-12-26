/**
 * @question : Group Anagrams
 * @param: {strArr} string[]
 * @returns: string[][]
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

const sortString = (str) => {
  return str.split("").sort().join("");
};

export const groupAnagram = (strArr) => {
  let strObj = {};
  for (let i of strArr) {
    if (strObj[sortString(i)]) {
      strObj[sortString(i)].push(i);
      continue;
    }
    strObj[sortString(i)] = [i];
  }
  let res = [...Object.values(strObj)]
    .sort((a, b) => a.length - b.length)
    .map((arr) => [...arr].sort());
  return res;
};

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

const generateStrObj = (str) => {
  const obj = {};
  for (let i of str) {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
      continue;
    }
    obj[i] = 1;
  }
  return obj;
};

export const groupAnagramIterOne = (strArr) => {
  let len = strArr.length;
  let track = [];
  let result = [];
  for (let i = 0; i < len - 1; i++) {
    let temp = [];
    for (let j = i + 1; j < len; j++) {
      let obj1 = generateStrObj(strArr[i]);
      let obj2 = generateStrObj(strArr[j]);
      console.log(track, "track");
      if (
        compareObjects(obj1, obj2) &&
        !track.includes(strArr[i] && !track.includes(strArr[j]))
      ) {
        temp.push(strArr[j], strArr[i]);
      }
    }
    if (temp.length < 1 && !track.includes(strArr[i])) {
      result.push([strArr[i]]);
    } else {
      track.push(...temp);
      result.push(temp);
    }
  }
  if (!track.includes(strArr[strArr.length - 1]))
    result.push([strArr[strArr.length - 1]]);
  return result;
};
