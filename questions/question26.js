// *QUESTION: write a function to print first N odd numbers in reverse order

const oddInReverse = (num) => {
  let numbers = [];
  temp = 1;
  while (numbers.length !== num) {
    numbers.push(temp);
    temp += 2;
  }
  for (let i in numbers) {
    console.log(numbers[numbers.length - 1 - i]);
  }
};

oddInReverse(3);
