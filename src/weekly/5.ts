/*
24点游戏

你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 *，/，+，-，(，) 的运算得到 24。

例子
输入: [4, 1, 8, 7]
输出: True
解释: (8-4) * (7-1) = 24
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums: number[]) {
  if (nums.length === 1) {
    return nums[0];
  }
  // 加、减、乘、除
};

console.log(judgePoint24([4, 1, 8, 7]), true);
