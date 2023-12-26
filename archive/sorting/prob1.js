/**
 * @question : Find the second smallest number in an array using selection sort
 * @param :{number []} array
 * @returns : {number}
 */

function secondSmallest(array) {
  for (let i = 0; i < 2; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array[1];
}

module.exports = { secondSmallest };
