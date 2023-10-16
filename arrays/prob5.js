/**
 * @company : Amazon, Microsoft
 * @inputSample : [7,1,5,3,6,4] -> stock prices
 * @outputSample : 5
 * @Question : Given an array of stock prices what is the max profit a person can make
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

module.exports = { maxProfit };
