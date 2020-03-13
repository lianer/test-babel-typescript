"use strict";
/*
322. 零钱兑换

给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
说明:
你可以认为每种硬币的数量是无限的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let calcCoinChange = function (coins, remain, count) {
    if (remain < 0) {
        return -1;
    }
    if (remain === 0) {
        return 0;
    }
    if (count[remain - 1] !== void 0) {
        return count[remain - 1];
    }
    let min = -1;
    coins.forEach(coin => {
        let res = calcCoinChange(coins, remain - coin, count);
        if (res >= 0 && (min === -1 || res < min)) {
            min = 1 + res;
        }
    });
    count[remain - 1] = min;
    return count[remain - 1];
};
var coinChange = function (coins, amount) {
    return calcCoinChange(coins, amount, []);
};
console.log(coinChange([1, 2, 5], 12), 3, [5, 5, 1]);
console.log(coinChange([2], 3), -1, []);
console.log(coinChange([1], 0), 0, []);
console.log(coinChange([2, 5, 10, 1], 27), 4, [10, 10, 5, 2]);
console.log(coinChange([186, 419, 83, 408], 6249), 20);
