var climb = function(n) {
  let arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

console.log(climb(3), 3);
console.log(climb(10), 89);
