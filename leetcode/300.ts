/*
300. 最长上升子序列

给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*
### 解题思路

动态规划：dp[i] 表示当前元素之前的最长上升子序列的长度

比如：[1, 2, 3, 2]
  dp[0] = 1
  dp[1] = 2
  dp[2] = 3
  dp[3] = 2

### 复杂度分析

时间复杂度：O(n^2)，第一层遍历计算 nums 列表 O(n)，第二层遍历 nums[0~i] 需 O(n)。
空间复杂度：O(n)，dp 数组占用线性大小额外空间。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums: number[]): number {
  const dp: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // 子序列包含元素本身，初始值为 1
    dp[i] = 1;

    // 遍历 0~i 元素
    for (let j = 0; j < i; j++) {
      // 如果 nums[i] > nums[j]，则说明 nums[i] 必定满足 nums[j] 的上升子序列，因此 dp[i] 可以在 dp[j] 的基础上 +1
      if (nums[i] > nums[j]) {
        // 动态规划，dp[i] 取 dp[0~i] 元素中最大的那一个，并 +1（nums[i] 元素本身）
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  let max = 0;
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i]);
  }
  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
console.log(lengthOfLIS([0, 1, 2, 3]), 4);
console.log(lengthOfLIS([3, 2, 1]), 1);
console.log(lengthOfLIS([1, 1, 1]), 1);
console.log(lengthOfLIS([0]), 1);
console.log(lengthOfLIS([1, 2, 3, 1]), 3);
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]), 3);
console.log(lengthOfLIS([10, 9, 2, 5, 3, 4]), 3);

export { lengthOfLIS };
