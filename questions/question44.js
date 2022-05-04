// *QUESTION: Write a program which takes months and returns true if there are 31 days

const monthWithThirtyOneDays = (month) =>
  ["JANUARY", "MARCH", "MAY", "JULY", "SEPTEMBER", "NOVEMBER"].includes(
    month.toUpperCase()
  );

console.log(monthWithThirtyOneDays("march"));
console.log(monthWithThirtyOneDays("april"));
