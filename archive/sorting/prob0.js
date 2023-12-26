/**
 * @question : Find the second largest number in an array
 * @param :{number []} array
 * @returns : {number}
 */

function secondLargest(array) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array[array.length - 2];
}

console.log(secondLargest([6, 5, 4, 3, 3, 2, 1]));

module.exports = { secondLargest };
