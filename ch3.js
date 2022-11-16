// Minimum

function min(a, b) {
  return a < b ? a : b;
}

// Recursion
function isEven(n) {
  // n is even if -n is even
  n = n >= 0 ? n : -n;
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n-2);
  }
}

// Bean counting
function countBs(s) {
  let len = s.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(s, c) {
  let len = s.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === c) {
      count++;
    }
  }
  return count;
}