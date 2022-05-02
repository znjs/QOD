// *QUESTION: Write program that takes a day and displays weather it is a weekday or weekend

const dayOfTheWeek = (day) => {
  switch (true) {
    case ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(
      day.toLowerCase()
    ):
      console.log(day, "is weekday");
      break;
    case ["saturday", "sunday"].includes(day.toLowerCase()):
      console.log(day, "is weekend");
      break;
    default:
      console.log("Invalid day of the week");
      break;
  }
};

dayOfTheWeek("Saturday");
