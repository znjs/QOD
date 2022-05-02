// *QUESTION: You have been given a string

const combinationFinder = (summerFruits, fruits) => {
  let summerFruitsDict = {};
  let fruitsDict = {};
  for (let i of summerFruits) {
    summerFruitsDict[i] = (summerFruitsDict[i] || 0) + 1;
  }
  for (let i of fruits) {
    fruitsDict[i] = (fruitsDict[i] || 0) + 1;
  }
  let resultCount = 0;
  for (let i in summerFruitsDict) {
    resultCount += fruitsDict[i] || 0;
  }
  return resultCount;
};

console.log(combinationFinder("aA", "aaAAbbbb"));
