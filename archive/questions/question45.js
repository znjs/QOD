// *QUESTION: find number of consonants and vowels in a string

const vowelsAndConsonants = (str) => {
  const VOWELS = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };
  let charCount = 0;
  let result = { vowels: 0, consonants: 0 };
  for (let i of str) {
    if (VOWELS[i.toLowerCase()]) result.vowels++;
    charCount++;
  }
  result.consonants = charCount - result.vowels;
  return result;
};

console.log(vowelsAndConsonants("neogCamp"));
