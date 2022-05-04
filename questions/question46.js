// *QUESTION: FIZZ at multiple of 3, BUZZ at multiples of 5, FIZZBUZZ at multiple of 3 & 5

const fizzBuzz = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) arr.push("FIZZBUZZ");
    else if (i % 3 === 0) arr.push("FIZZ");
    else if (i % 5 === 0) arr.push("BUZZ");
    else arr.push(i);
  }
  return arr.join(",");
};

console.log(fizzBuzz(20));
