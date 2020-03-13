"use strict";
/*
两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*

## 暴力破解法

### 解题思路

1. 使用两层嵌套，对数组进行迭代
2. 第一层遍历 i: (0 < i < nums.length - 1)
3. 第二层遍历 j: (i + 1 < j < nums.length)

### 复杂度分析

时间复杂度：O(n2)
空间复杂度：O(1)

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
exports.twoSum = twoSum;
const nums = [3, 3], target = 6;
console.log(twoSum(nums, target));
