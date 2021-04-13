/*
912. 排序数组

给你一个整数数组 nums，将该数组升序排列。

示例 1：
输入：nums = [5,2,3,1]
输出：[1,2,3,5]

示例 2：
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 
提示：
1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*
方法二：堆排序

堆排序的概念：
堆是一棵顺序存储的二叉树
其中每个节点的关键字都不大于其子节点的关键字，这样的堆称为小根堆
其中每个节点的关键字都不小于其自己点的关键字，这样的堆称为大根堆
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }
  const pivot = nums[0];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...sortArray(left), pivot, ...sortArray(right)];
};

console.log(sortArray([1]), [1]);
console.log(sortArray([2, 1]), [1, 2]);
console.log(sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
console.log(sortArray([5, 1, 1, 2, 0, 0]), [0, 0, 1, 1, 2, 5]);

export { sortArray };
