// write a function that returns a second largest numbers in an array

// instruction
// -- create a function named secondLargest
// -- it will take one parameters array

function secondLargest(array) {
  // if array has less then 2 values we can return null or -1
  if (array.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[i];

      //(array[i] !== firstLargest) if array has duplicate values
    } else if (array[i] > secondLargest && array[i] !== firstLargest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}

const arr = [4, 9, 0, 2, 8, 7, 1, 9];
const result = secondLargest(arr);
console.log(result);
