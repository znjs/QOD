// *QUESTION: write a program which calculates the profit or loss of a product

const plCalculator = (costPrice, sellingPrice) =>
  costPrice > sellingPrice
    ? `${costPrice - sellingPrice} Loss`
    : `${sellingPrice - costPrice} Profit`;

console.log(plCalculator(1500, 2000));
console.log(plCalculator(3125, 1125));
