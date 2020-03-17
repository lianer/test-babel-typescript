"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    let cnt = {};
    let half = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        if (cnt[nums[i]]) {
            cnt[nums[i]]++;
        }
        else {
            cnt[nums[i]] = 1;
        }
        if (cnt[nums[i]] > half) {
            return nums[i];
        }
    }
    return -1;
};
exports.majorityElement = majorityElement;
console.log('结果', '预期');
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);