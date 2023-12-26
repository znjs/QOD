// [1, 0, 0, 2, 0, 2] => 3
// [0, 2, 1, 0, 0, 2] => 1
// [0, 0, 2, 1, 0, 2, 0] => 1
// [0, 2, 0, 0, 0, 0, 1, 0, 2] => 2
// [0, 0, 0, 0, 1, 0, 0] => 0

const nearestTwo = (arr) => {
  let onePos = arr.indexOf(1);
  let twoPos = [];
  let min = Infinity;
  for (let i in arr) {
    if (arr[i] === 2) {
      twoPos.push(i);
    }
  }
  if (!twoPos.length) return 0;
  for (let i in twoPos) {
    if (min > Math.abs(onePos - Number(twoPos[i])))
      min = Math.abs(onePos - Number(twoPos[i]));
  }
  return min;
};

console.log(nearestTwo([0, 0, 1, 0, 2, 0, 0, 2]));
console.log(nearestTwo([0, 2, 0, 0, 0, 0, 1, 0, 2]));
console.log(nearestTwo([1, 0, 0, 2, 0, 2]));
