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

## 利用哈希空间换时间

### 解题思路

1. 先遍历一遍数组，将数组元素作为 key，数组的索引作为 value，写入哈希表
2. 第二次遍历数组，如果能在哈希表中找到匹配的值，且不是同一个元素，则返回他们

### 复杂度分析

时间复杂度：O(n)，我们把包含有 nn 个元素的列表遍历两次。由于哈希表将查找时间缩短到 O(1)O(1) ，所以时间复杂度为 O(n)O(n)。
空间复杂度：O(1)，所需的额外空间取决于哈希表中存储的元素数量，该表中存储了 nn 个元素。

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const hashMap = {};
    nums.forEach((val, index) => {
        hashMap[val] = index;
    });
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let b = target - a;
        if (hashMap.hasOwnProperty(b) && i !== hashMap[b]) {
            // 自左向右遍历，i 肯定在前面
            return [i, hashMap[b]];
        }
    }
};
exports.twoSum = twoSum;
const nums = [3, 3], target = 6;
console.log(twoSum(nums, target));
