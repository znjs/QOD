/**
 * @question : You have an array of strings representing income and expenses from a company's balance sheet. The strings contain positive and negative dollar amounts, for example '-$100' or '$23'. The strings may not always contain a dollar sing in front, and may not always have decimal.
Positive numbers represent income and negative is expenses. Elements in the array that are not strings or which can not be interpreted as valid dollar amounts should be discarded. Expense of (-0) should not be counted.

Your job is to determine how many expenses are in array, and their sum, This sum should be the absolute value of expenses.

Examples: reportExpenses(["$1.23", '-$5', '-$4.23']) 
Output should be "expsnseCount: 2, expenseSum: 9.23"
 */

function reportExpenses(expArray) {
  let expenseCount = 0;
  let expenseSum = 0;
  for (let i of expArray) {
    let str = i;
    console.log(str);
    let dollarIndex = str.indexOf("$");
    if (dollarIndex !== -1) {
      console.log(str.slice(dollarIndex + 1));
      if (i[0] === "-") {
        expenseCount++;
        expenseSum += parseFloat(i.slice(dollarIndex + 1));
      }
    }
  }
  return { expenseSum, expenseCount };
}

console.log(reportExpenses(["$1.23", "-$5", "-$4.23"]));

module.exports = { reportExpenses };
