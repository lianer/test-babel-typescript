function stepWay(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (n == 3) return 4;
  var dp1 = 1;
  var dp2 = 2;
  var dp3 = 4;
  var A = 1000000007;

  for (let i = 4; i <= n; i++) {
    var tmp = dp1;

    dp1 = dp2;

    dp2 = dp3;

    dp3 = (tmp + dp1 + dp2) % A;
  }
  return dp3;
}

console.log(stepWay(3), 3);
console.log(stepWay(10), 89);
