const mostOccurredNumber = (arr) => {
  const frequencyObject = {};
  for (let i of arr) {
    frequencyObject[i] = (frequencyObject[i] || 0) + 1;
  }
  let values = Object.values(frequencyObject).sort((a, b) => a - b);
  values = values[values.length - 1];
  let keyArr = [];
  for (let i in frequencyObject) {
    if (frequencyObject[i] === values) {
      keyArr.push(i);
    }
  }
  return keyArr.sort((a, b) => b - a)[0];
};

console.log(mostOccurredNumber([1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8]));
