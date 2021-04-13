function calculateClimbStairs(n) {
  if (n === 1) {
    return 1;
  }
  let result = [];
  result[1] = 1;
  result[2] = 2;
  for (let i = 3; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}
function climbStairs(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let result;
  let preTwo = 1;
  let preOne = 2;
  for (let i = 3; i < n + 1; i++) {
    result = preOne + preTwo;
    preTwo = preOne;
    preOne = result;
  }
  return result;
}
function climbStairs_2(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  return climbStairs_2(n - 1) + climbStairs_2(n - 2);
}

console.log(climbStairs_2(3), 3);
console.log(climbStairs_2(10), 89);
