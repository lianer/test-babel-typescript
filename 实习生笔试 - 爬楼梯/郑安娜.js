function fn(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }
  return fn(n - 1) + fn(n - 2);
}

console.log(fn(3), 3);
console.log(fn(10), 89);
