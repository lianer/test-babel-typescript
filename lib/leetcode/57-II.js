"use strict";
/*
面试题57 - II. 和为s的连续正数序列


输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

示例 1：

输入：target = 9
输出：[[2,3,4],[4,5]]
示例 2：

输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 

限制：

1 <= target <= 10^5
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} target
 * @return {number[][]}
 */
const findContinuousSequence = function (target) {
    let cases = [];
    let nums = [];
    for (let i = 0; i < target; i++) {
        nums.push(i + 1);
    }
    let i = target - 1;
    while (i > 0) {
        let j = i;
        let cnt = 0;
        while (j > 0 && cnt < target) {
            cnt += j;
            j--;
        }
        if (cnt === target) {
            cases.unshift(nums.slice(j, i));
        }
        // 如果 j 已经迭代到了 0，则表明 < i 的值已经不可能产出结果了，可以直接结束 i 的迭代
        if (j === 0) {
            break;
        }
        i--;
    }
    return cases;
};
exports.findContinuousSequence = findContinuousSequence;
console.log(findContinuousSequence(9), [
    [2, 3, 4],
    [4, 5],
]);
console.log(findContinuousSequence(15), [
    [1, 2, 3, 4, 5],
    [4, 5, 6],
    [7, 8],
]);
