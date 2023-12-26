// *QUESTION: You are given an m x n matrix integer grid where accounts[i][j] is the amount of money the ith customer has in jth bank. return the wealth of wealthiest customer

const wealthiestWealth = (accounts) => {
  const numOfCustomers = accounts.length;
  const numOfBanks = accounts[0].length;
  for (let i = 0; i < numOfCustomers; i++) {
    accounts[i] = accounts[i].reduce((acc, value) => acc + value, 0);
  }
  return Math.max(...accounts);
};

console.log(
  wealthiestWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

/**
 * [1,2,3]
 * [3,2,1]
 *
 * [i][j] => ith customer jth bank
 */
