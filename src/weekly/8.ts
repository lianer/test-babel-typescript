/*
硬币的组合类型

给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算 n 分有几种表示法。

示例1:
输入: n = 5
输出：2
解释: 有两种方式可以凑成总金额:
  5=5
  5=1+1+1+1+1

示例2:
输入: n = 10
输出：4
解释: 有四种方式可以凑成总金额:
  10=10
  10=5+5
  10=5+1+1+1+1+1
  10=1+1+1+1+1+1+1+1+1+1
*/

/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n: number) {
  const dp: number[][] = [];
  const coins: number[] = [1, 5, 10, 25];

  for (let i = 0; i < coins.length; i++) {
    const coinValue = coins[i];
    dp[i] = [];
    if (i === 0) {
      for (let j = 0; j < n; j++) {
        if (j % coinValue === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = 0;
        }
      }
    } else {
    }
  }
};
