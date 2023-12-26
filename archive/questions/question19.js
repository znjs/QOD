// *QUESTION: Write a program which takes 3 angles of triangles and displays which type of triangle it is scalene, isocles, equilateral

const typeOfTriangle = (a1, a2, a3) => {
  if (a1 === a2 && a2 === a3) return "equilateral triangle";
  if (a1 === a2 || a2 === a3 || a3 === a1) return "isosceles triangle";
  return "scalene triangle";
};

console.log(typeOfTriangle(30, 60, 90));
