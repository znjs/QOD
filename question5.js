// *QUESTION: Write a function which takes a side of a hexagon and returns area of hexagon

const CONSTANT = (Math.sqrt(3) * 3) / 2;
const hexagonArea = (side) => (CONSTANT * side * side).toFixed(2);

console.log(hexagonArea(10));
