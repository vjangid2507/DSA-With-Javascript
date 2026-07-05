/* P1
 ****
 ****
 ****
 ****
 */

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

/* P2
 *
 **
 ***
 ****
 *****
 */
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

/* P3
 1
 12
 123
 1234
 12345
 */

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

/* P4
 12345
 1234
 123
 12
 1
 */

// let n = 5;
// for (let i = 5; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

/* P5 here dot indicates space
 ....*
 ...**
 ..***
 .****
 *****
 */

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   // adding empty spaces
//   for (let sp = i; sp <= n - 1; sp++) {
//     row = row + " ";
//   }
//   // adding stars
//   for (let j = 1; j <= i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

/* P6
 1
 10
 101
 1010
 10101
 101010
 */

// let n = 6;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 !== 0) {
//       row = row + "1";
//     } else {
//       row = row + "0";
//     }
//   }
//   console.log(row);
// }

// 2nd solution
// let n = 6;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   let toggle = 1;
//   for (let j = 1; j <= i; j++) {
//     row = row + toggle;
//     if (toggle === 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }

/* P6
 1
 01
 010
 1010
 10101
 010101
 */

let n = 6;
let toggle = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + toggle;
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
