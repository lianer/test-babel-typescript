/**
每周算算法打卡： 第十题  爬楼梯升级版。
有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。
实现一种方法，计算小孩有多少种上楼梯的方式。
只考虑 100 层以下。

示例1:
输入：n = 3
输出：4

示例2:
输入：n = 5
输出：13
*/

/**
 * @param {number} n
 * @return {number}
 */
const waysToStep = function(n: number) {
  return recursion(0, n);
};

const recursion = function(i: number, n: number): number {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  return recursion(i + 1, n) + recursion(i + 2, n) + recursion(i + 3, n);
};

console.log(waysToStep(15), 987);
console.log(waysToStep(7), 44); // [1,1,1,1] [2,1,1] [2,2] [3,1]
console.log(waysToStep(2), 2); // [1,1] [2]
console.log(waysToStep(1), 1); // [1]
