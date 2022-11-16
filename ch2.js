// Looping a triangle
let output = "";

for (let i = 0; i < 7; i++) {
  output += "#";
  console.log(output);
}

// Fizzbuzz

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }
  if (!output) {
    output = i.toString();
  }
  console.log(output);
}

// Chessboard

let size = 8;
let solution = "";
let char = " ";
for (let i = 0; i < size; i++) {
  let line = "";
  for (let j = 0; j < size; j++) {
    line += char;
    if (j !== size-1) {
      char = (char === "#") ? " " : "#";
    }
  }
  line += "\n";
  solution += line;
}
console.log(solution);