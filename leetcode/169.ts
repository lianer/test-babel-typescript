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
## 哈希表

### 解题思路

使用哈希表统计每个元素出现的次数，超过 n/2 个的元素就是众数

### 复杂度分析

时间复杂度：O(n)。
空间复杂度：O(n)。
*/

interface Count {
  [key: number]: number;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums: number[]): number {
  const cnt: Count = {};
  const half = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (cnt[nums[i]]) {
      cnt[nums[i]]++;
    } else {
      cnt[nums[i]] = 1;
    }
    if (cnt[nums[i]] > half) {
      return nums[i];
    }
  }
  return -1;
};

console.log('结果', '预期');
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

export { majorityElement };
