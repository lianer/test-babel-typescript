function F(n) {
  var n;
  if (n <= 0) {
    return -1;
  }
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  } else {
    return F(n - 1) + F(n - 2);
  }
}

console.log(F(3), 3);
console.log(F(10), 89);
