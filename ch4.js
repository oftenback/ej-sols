// The Sum of a Range

function range(start, end, step = 1) {
  let sol = [];
  if (start > step && step > 0 || start < step && step < 0 || step === 0) {
    return "Invalid";
  }
  if (start > step && step < 0) {
    for (let i = start; i >= end; i += step) {
      sol.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      sol.push(i);
    }
  }
  return sol;
}

function sum(a) {
  let count = 0;
  for (let n of a) {
    count += n;
  }
  return count;
}

// Reversing an Array

function reverseArray(a) {
  let sol = [];
  for (let i = a.length - 1; i >= 0; i--) {
    sol.push(a[i]);
  }
  return sol;
}

function reverseArrayInPlace(a) {
  let l = a.length;
  let k = Math.floor(l/2);
  for (let i = 0; i <= k; i++) {
    let temp = a[i];
    a[i] = a[l-1-i];
    a[l-1-i] = temp;
  }
  return;
}

// A List

function arrayToList(a) {
  let list = null;
  let top = list;
  for (let n of a) {
    let node = {value: n, rest: null};
    if (!list) {
      top = node;
      list = node;
    } else {
      list.rest = node;
      list = list.rest;
    }
  }
  return top;
}

function listToArray(l) {
  let a = [];
  while (l) {
    a.push(l.value);
    l = l.rest;
  }
  return a;
}

function prepend(n, l) {
  return ({value: n, rest: l});
}

function nth(list, n) {
  if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n-1);
  }
}

// Deep Comparison

function deepEqual(v1, v2) {
  if (v1 === null) {
    return v2 === null;
  } else if (typeof v1 === "object" && typeof v2 === "object") {
    for (key of Object.keys(v1)) {
      if (!deepEqual(v1[key], v2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return v1 === v2;
  }
}