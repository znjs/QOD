// *QUESTION: write a function which prints the area, surface area, volume of a cube given a side

const cubeStats = (side) => {
  console.log("Area: ", side * side);
  console.log("Perimeter: ", 4 * side);
  console.log("Surface Area: ", 6 * side * side);
  console.log("Volume: ", Math.pow(side, 3));
};

cubeStats(4);
