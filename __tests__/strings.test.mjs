const { reportExpenses } = require("../strings/prob0");

test("Report Expenses", () => {
  expect(reportExpenses(["$1.23", "-$5", "-$4.23"])).toEqual({
    expenseSum: 9.23,
    expenseCount: 2,
  });
});
