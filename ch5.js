// Flattening

console.log(arrays.reduce((a, b) => a.concat(b)));

// Your own loop

function loop(val, test, update, body) {
  while(test(val)) {
    body(val);
    val = update(val);
  }
}

// Everything

function every(array, test) {
  for (n of array) {
    if (!test(n)) {
      return false;
    }
  }
  return true;
}

function every(array, test) {
  return !array.some(n => !test(n));
}

// Dominant writing direction

// characterScript and countBy taken from chapter examples

function dominantDirection(text) {
  return countBy([...text], c => characterScript(c.codePointAt(0)))
  			.filter(a => a.name !== null)
  			.map(a => a.name.direction)
  			.reduce((a, b) => a.count > b.count ? a : b);
}