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
## Boyer-Moore 投票算法

### 解题思路

如果我们把众数记为 +1，把其他数记为 -1，将它们全部加起来，显然和大于 0，从结果本身我们可以看出众数比其他数多。

把第一个元素作为候选众数，往后遍历，如果与第一个数相同，则 +1，否则 -1。当和等于 0 的时候，继续把下一个元素作为候选众数。最后剩下的候选众数一定就是最终的众数。

### 复杂度分析

时间复杂度：O(n)。Boyer-Moore 算法只对数组进行了一次遍历。
空间复杂度：O(1)。Boyer-Moore 算法只需要常数级别的额外空间。
*/

interface Count {
  [key: number]: number;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums: number[]): number {
  let cnt = 1;
  let candidate = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (cnt === 0) {
      candidate = nums[i];
    }
    cnt += candidate === nums[i] ? 1 : -1;
  }
  return candidate;
};

console.log('结果', '预期');
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);

export { majorityElement };
