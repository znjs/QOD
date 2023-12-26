// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// *Implementing chunk method

function chunk(arr, limit) {
  let result = [];
  let temp = [];
  for (i of arr) {
    if (temp.length < limit) {
      temp.push(i);
    } else {
      result.push(temp);
      temp = [i];
    }
  }
  if (temp.length) result.push(temp);
  return result;
}

// console.log(chunk(["a", "b", "c", "d"], 3));

// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

function compact(arr) {
  let result = [];
  for (let i of arr) if (i) result.push(i);
  return result;
}

console.log(compact([0, 1, false, 2, "", 3]));
