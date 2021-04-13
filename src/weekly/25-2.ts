/**
算法每周一题 - 25 题 - 丑数

请你帮忙设计一个程序，用来找出第 n 个丑数。
丑数是可以被 a 或 b 或 c 整除的 正整数

示例 1：
输入：n = 3, a = 2, b = 3, c = 5
输出：4
解释：丑数序列为 2, 3, 4, 5, 6, 8, 9, 10... 其中第 3 个是 4。

示例 2：
输入：n = 4, a = 2, b = 3, c = 4
输出：6
解释：丑数序列为 2, 3, 4, 6, 8, 9, 10, 12... 其中第 4 个是 6。

示例 3：
输入：n = 5, a = 2, b = 11, c = 13
输出：10
解释：丑数序列为 2, 4, 6, 8, 10, 11, 12, 13... 其中第 5 个是 10。

示例 4：
输入：n = 1000000000, a = 2, b = 217983653, c = 336916467
输出：1999999984
 

提示：
1 <= n, a, b, c <= 10^9
1 <= a * b * c <= 10^18
本题结果在 [1, 2 * 10^9] 的范围内
 */

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n: number, a: number, b: number, c: number): number {
  let nextA = a;
  let nextB = b;
  let nextC = c;
  let i = 0;
  let lastNum = 0;

  while (i < n) {
    // lastNum = Math.min(nextA, nextB, nextC);

    if (nextA < nextB && nextA < nextC) {
      lastNum = nextA;
    } else {
      if (nextB < nextC) {
        lastNum = nextB;
      } else {
        lastNum = nextC;
      }
    }

    if (nextA === lastNum) nextA += a;
    if (nextB === lastNum) nextB += b;
    if (nextC === lastNum) nextC += c;

    i++;
  }

  return lastNum;
};

console.time('time');
console.log(nthUglyNumber(3, 2, 3, 5), 4);
console.log(nthUglyNumber(4, 2, 3, 4), 6);
console.log(nthUglyNumber(5, 2, 11, 13), 10);
console.log(nthUglyNumber(3, 2, 4, 6), 6);
console.log(nthUglyNumber(1000000000, 2, 217983653, 336916467), 1999999984);
console.timeEnd('time');
