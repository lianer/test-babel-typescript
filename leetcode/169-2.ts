/*
169. 多数元素

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:
输入: [3,2,3]
输出: 3

示例 2:
输入: [2,2,1,1,1,2,2]
输出: 2
*/

/*
## 排序

### 解题思路

对数组进行排序，n/2 下标的元素就是众数

n 为奇数：
[1, 1, 2, 2, 2] n=2
[2, 2, 2, 3, 3] n=2

n 为偶数：
[1, 1, 2, 2, 2, 2] n=3
[2, 2, 2, 2, 3, 3] n=3

### 复杂度分析

时间复杂度：O(nlogn)。
空间复杂度：O(nlogn)。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums: number[]): number {
  return nums.sort()[Math.floor(nums.length / 2)];
};

console.log('结果', '预期');
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

export { majorityElement };
