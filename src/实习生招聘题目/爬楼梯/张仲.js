var climbStairs = function(n) {
  let body = funcBody();
  return body.figureItOut(n);
};
function funcBody() {
  let re = {};
  re[0] = 0;
  re[1] = 1;
  re[2] = 2;

  function figureItOut(n) {
    if (n < 3) {
      return re[n];
    }

    return getN(n - 1) + getN(n - 2);
  }

  function getN(n) {
    console.log(n);

    if (!re[n]) {
      re[n] = getN(n - 1) + getN(n - 2);
    }

    return re[n];
  }

  return {
    re,
    figureItOut,
  };
}

console.log(climbStairs(3), 3);
console.log(climbStairs(10), 89);
