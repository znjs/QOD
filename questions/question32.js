/*
Given an object obj, we have to invert its key and value for each entry. Inversion will result in
value being used as key and key as value.
Note:- There will be no repeated values to maintain the uniqueness.
Eg:
Input
obj = {
  name: "Doraemon",
  age: 5,
  hairColor: "none",
  eyes: "oval",
};
Output :
obj = {
  Doraemon: "name",
  5: "age",
  none: "hairColor",
  oval: "eyes",
};
*/

const invertObject = (obj) => {
  const inverseObj = {};
  for (let i in obj) {
    inverseObj[obj[i]] = i;
  }
  return inverseObj;
};

obj = {
  name: "Doraemon",
  age: 5,
  hairColor: "none",
  eyes: "oval",
};

console.log(invertObject(obj));
