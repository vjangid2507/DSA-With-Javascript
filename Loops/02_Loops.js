// array and loops related problems

// 1). Write a function that searches for an element in an array and return the index, if the element is not present then just return -1.

// instruction
// -- create a function named searchElementByIndex
// -- it will take two parameters array and searching number

// function searchElementByIndex(array, number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       return i;
//     }
//   }
//   return -1;
// }

// const arr = [4, 2, 0, 10, 8, 30];
// const findElementIndex = searchElementByIndex(arr, 31);
// console.log(findElementIndex);

// 2). Write a function that returns the number of negative numbers in an array (how many negative number present in array that count).

// instruction
// -- create a function named countNegatives
// -- it will take one parameters array

// function countNegatives(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }
// const arr = [2, -9, 17, 0, 1, -10, -4, 8];
// const negativeNumbersCount = countNegatives(arr);
// console.log(negativeNumbersCount);

// 3). Write a function that returns the largest number in an array.

// instruction
// -- create a function named findLargest
// -- it will take one parameters array

// function findLargest(array) {
//   let largest = array[0];
//   // let largest = -Infinity; //least smallest number
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest) {
//       largest = array[i];
//     }
//   }
//   return largest;
// }

// const arr = [5, 0, 7, 10, 8, 17, 1];
// const largestNumber = findLargest(arr);
// console.log(largestNumber);

// 4). Write a function that returns the smallest number in an array.

// instruction
// -- create a function named findSmallest
// -- it will take one parameters array

function findSmallest(array) {
  let smallest = array[0];
  // let smallest = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}

const arr = [5, 6, 7, 10, 8, 17, 1];
const smallestNumber = findSmallest(arr);
console.log(smallestNumber);
