/**
算法第 31 题-翻转对
给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 
我们就将 (i, j) 称作一个重要翻转对。
你需要返回给定数组中的重要翻转对的数量。

示例 1:
输入: [1,3,2,3,1]
输出: 2

示例 2:
输入: [2,4,3,5,1]
输出: 3

提示： 其实就是求左侧出现了的比右侧的2倍大的数字的个数
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums: number[]) {
  let cnt = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > 2 * nums[j]) cnt++;
    }
  }
  return cnt;
};

console.log(reversePairs([1, 3, 2, 3, 1]), 2);
console.log(reversePairs([2, 4, 3, 5, 1]), 3);
