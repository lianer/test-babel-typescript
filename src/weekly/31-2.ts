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
  // 归并排序
  // 1. 分解
  // 2. 解决
  // 3. 合并
  return reversePairsRecursive(nums, 0, nums.length - 1);
};

const reversePairsRecursive = function(nums: number[], left: number, right: number): number {
  if (left === right) return 0;

  const mid = Math.floor((left + right) / 2);
  const n1 = reversePairsRecursive(nums, left, mid);
  const n2 = reversePairsRecursive(nums, mid + 1, right);
  let ret = n1 + n2;

  let i = left;
  let j = mid + 1;
  while (i <= mid) {
    while (j <= right && nums[i] > 2 * nums[j]) {
      j++;
    }
    ret += j - mid - 1;
    i++;
  }

  const sorted = nums.slice(left, left + right + 1).sort((a, b) => a - b);
  sorted.forEach((v, i) => (nums[left + i] = v));

  return ret;
};

console.log(reversePairs([1, 3, 2, 3, 1]), 2);
console.log(reversePairs([2, 4, 3, 5, 1]), 3);

export {};
