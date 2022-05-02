// *QUESTION: Given two strings check if the first string csn match the second string after some number of shifts

const shiftLeft = (str) => {
  return str.slice(1, str.length) + str[0];
};

const shiftStringCheck = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let length = s1.length;
  while (length) {
    if (s2 === s1) return true;
    s1 = shiftLeft(s1);
    length--;
  }
  return false;
};

console.log(shiftStringCheck("xyza", "zaxy"));
