// *QUESTION: Given a sting s, find the first non-repeating character in it and return its index if it doesn't exist, return -1

const firstNonRepeatingChar = (s) => {
  let charTracker = [];
  let removeChar = [];
  for (let i of s) {
    if (charTracker.includes(i)) {
      removeChar.push(i);
    } else charTracker.push(i);
  }
  removeChar = Array.from(new Set(removeChar));

  for (let i of removeChar) {
    charTracker.splice(charTracker.indexOf(i), 1);
  }
  return s.indexOf(charTracker[0]);
};

console.log(firstNonRepeatingChar("nnneeooggccaammpp"));
console.log(firstNonRepeatingChar("neogcamp"));
