// WAF to count digits of a number
/* use cases
1. if number is 0 return 1 digit
2. if number is -ve convert it into +ve then starts counting
*/

function countDigits(num) {
  // handling 0
  if (num === 0) return 1;

  // converting -ve number into +ve number
  num = Math.abs(num);

  let count = 0;
  while (num > 0) {
    // using Math.floor because in JS "/" operatoe returns number with decimal value
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

const number = 123;
const result = countDigits(number);
console.log(result);
