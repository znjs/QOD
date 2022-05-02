// *QUESTION: Write a function which checks if a given number is a palindrome, consider only alpha-numeric characters

const isAlphaNumeric = (sample) => {
  const pattern = /^[0-9a-zA-z]+$/;
  return pattern.test(sample);
};

const isPalindrome = (str) => {
  str = str.replaceAll(" ", "");
  if (isAlphaNumeric(str)) {
    for (let i in str) {
      if (str[i] !== str[str.length - 1 - i]) return false;
    }
  }
  return true;
};

console.log(isPalindrome("ap a pa")); //true
console.log(isPalindrome("engine")); //false
