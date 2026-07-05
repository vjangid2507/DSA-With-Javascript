// WAF to find a number is Palindrome or not
// Palindrome => An integer is a palindrome when it reads the same forward and backward

/* Example 1
Input x = 121;
outout = true;
Explanation: 121 reads as 121 from left to right and from right to left
*/

/* Example 2
Input x = -121;
outout = false;
Explanation: From left to right, it reads -121 and from right to left it becomes 121-, 
therefore it is not palindrome number
*/

/* Example 3
Input x = 10;
outout = false;
Explanation: Reads 01 from right to left, therefore it is not palindrome number
*/

function isPalindrome(x) {
  if (x < 0) return false;
  let copyX = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = (10 * rev) + rem;
    x = Math.floor(x / 10);
  }

  return rev === copyX;
}

const number = 0;
const result = isPalindrome(number);
console.log(result);
