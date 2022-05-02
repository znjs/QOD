// *QUESTION: lucky seven => if sum of 3 consecutive numbers in an array is 7 then print true else false

const luckySeven = (arr) => {
  let list = [...arr];
  while (list.length) {
    if (list.length >= 3) {
      if (list[0] + list[1] + list[2] === 7) return true;
      list.shift();
    } else return false;
  }
  return false;
};

console.log(luckySeven([1, 2, 4, 6]));
