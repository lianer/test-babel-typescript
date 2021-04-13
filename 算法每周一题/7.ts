/*
下一个更大的元素

给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。
数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。
如果不存在，则输出 -1。

示例 1:
输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数；
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
*/

/*
暴力法

挨个查找每个元素符合要求的值

时间复杂度：O(n^2)，最差的情况下，比如 [1, 1, 1]，时间复杂度为 O(n^2)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums: number[]) {
  const findNext = function(index: number, num: number) {
    let max = index + nums.length;
    while (index++ < max) {
      let i = index % nums.length;
      if (nums[i] > num) {
        return nums[i];
      }
    }
    return -1;
  };

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = findNext(i, nums[i]);
  }
  return result;
};

console.log(nextGreaterElements([1, 2, 1]), [2, -1, 2]);
console.log(nextGreaterElements([1, 1, 1]), [-1, -1, -1]);
console.log(nextGreaterElements([1, 2, 3]), [2, 3, -1]);
