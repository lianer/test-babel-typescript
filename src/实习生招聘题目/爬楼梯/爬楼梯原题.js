/**
 * 有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶或者2阶，
 * 实现一种方法，计算小孩有多少种上楼梯的方式。* 只考虑 100 层以下。
 * 示例1: 输入：n = 3  输出：3
 */

var climbStairs = function(n) {
  return n < 3 ? n : climbStairs(n - 1) + climbStairs(n - 2);
};

var climbStairs2 = function(n) {
  var a = 1;
  var b = 2;
  var i = 2;
  while (++i <= n) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(climbStairs(3), 3);
console.log(climbStairs(10), 89);
