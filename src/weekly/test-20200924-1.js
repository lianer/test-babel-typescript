/* 第一题: 爬楼梯
 * 有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶或者2阶。
 * 实现一种方法，计算小孩有多少种上楼梯的方式。
 * 只考虑 100 层以下。
 *
 *  示例1:
 *  输入：n = 3
 *  输出：3
 */
var climbStairs = function(n) {
  // const recursion = function(i, n) {
  //   if (i > n) {
  //     return 0;
  //   }
  //   if (i === n) {
  //     return 1;
  //   }
  //   return recursion(i + 1, n) + recursion(i + 2, n);
  // };
  // return recursion(0, n);
  // let cnt = 0;
  // let steps = 1;
  // while (steps <= n) {
  //   if (steps )
  //   steps++;
  // }
};

console.log(climbStairs(3), 3);
console.log(climbStairs(4), 5); // 1,1,1,1  1,1,2  1,2,1  2,1,1, 2,2
console.log(climbStairs(15), 987);
