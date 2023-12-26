//? Print 1 to N using recursion

function printToN(n) {
  if (n === 1) {
    console.log(1);
    return;
  }
  console.log(n);
  printToN(n - 1);
}

printToN(10);
