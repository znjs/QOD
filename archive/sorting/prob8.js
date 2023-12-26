/**
 * @question :Majority Element
 * @param: {number[]} nums
 * @returns {number}
 */

const majorityElement = (nums) => {
  let occurrence = {};
  let maxNum = 0;
  let count = 0;
  for (let i of nums) {
    if (occurrence[i]) {
      occurrence[i]++;
      if (occurrence[i] > count) {
        maxNum = i;
        count = occurrence[i];
      }
      continue;
    }
    occurrence[i] = 1;
  }
  //   let max = { key: -1, value: -1 };
  //   for (let i of Object.keys(occurrence)) {
  //     console.log(occurrence[i], max, "compare");
  //     if (occurrence[i] > max.value) {
  //       max = { key: i, value: occurrence[i] };
  //     }
  //   }
  //   return Number(max.key);
  return maxNum;
};

console.log(majorityElement([3, 2, 3]));
