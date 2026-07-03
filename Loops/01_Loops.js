// counting
for (let i = 0; i < 5; i++) {
  console.log("Hello", i + 1);
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello", i);
}

// reverse counting
for (let i = 5; i > 0; i--) {
  console.log("Hello", i);
}

// this will never run
for (let i = 5; i < 4; i--) {
  console.log("Hello", i);
}

// this condition will always be true (infinite loop)
for (let i = 1; i > 0; i++) {
  console.log("Hello", i);
}

// function inside a loop
function greet() {
  console.log("Hello");
}
for (let i = 0; i < 5; i++) {
  greet();
}

// array and loops
const arr = [10, 6, 2, 0, 8, 3, 80];
console.log(arr[5]);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// odd even numbers in array
const arr = [10, 6, 2, 0, 8, 3, 80];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("even number", arr[i]);
  } else {
    console.log("odd number", arr[i]);
  }
}

// while loop
let i = 0;
while (i < 5) {
  // this is the body of loop
  console.log("Hello", i + 1);
  i++;
}
