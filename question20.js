// *QUESTION: Given 2 dates return the one which comes before

const minDate = (dateOne, dateTwo) =>
  [
    dateOne.split("/").reverse().join("/"),
    dateTwo.split("/").reverse().join("/"),
  ]
    .sort()[0]
    .split("/")
    .reverse()
    .join("/");

console.log(minDate("02/05/2021", "24/01/2021"));
