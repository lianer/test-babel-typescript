/*
每周一题
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

提示：
本题考查的是贪心算法
贪心算法（又称贪婪算法）是指，在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，他所做出的是在某种意义上的局部最优解。
贪心算法不是对所有问题都能得到整体最优解，关键是贪心策略的选择，选择的贪心策略必须具备无后效性，即某个状态以前的过程不会影响以后的状态，只与当前状态有关

输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
*/

/*
## 贪心算法

### 解题思路

从右向左迭代，对于每个节点我们检查是否存在一步跳跃可以到达 GOOD 的位置（currPosition + nums[currPosition] >= leftmostGoodIndex）。
如果可以到达，当前位置也标记为 GOOD ，同时，这个位置将成为新的最左边的 GOOD 位置，一直重复到数组的开头，
如果第一个坐标标记为 GOOD 意味着可以从第一个位置跳到最后的位置。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums: number[]): boolean {
  let lastPos = nums[nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }
  return lastPos === 0;
};

console.log(canJump([2, 3, 1, 1, 4]), true);
console.log(canJump([3, 2, 1, 0, 4]), false);
console.log(canJump([2, 0]), true);
console.log(canJump([0, 2]), false);
console.log(canJump([0]), true);
console.log(canJump([2, 5, 0, 0]), true);
