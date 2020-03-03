"use strict";
/*
面试题 10.01. 合并排序的数组

给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sorted-merge-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    // 将其中一个数组中的数字遍历完，从大（右）到小（左）遍历
    while (m > 0 && n > 0) {
        var index = n + m - 1;
        var a = A[m - 1];
        var b = B[n - 1];
        // 对比选出较大的数放在 m + n - 1 的位置，并将选出此数的指针向前移动
        if (a > b) {
            A[index] = a;
            m--;
        }
        else {
            A[index] = b;
            n--;
        }
    }
    // 剩下的数都比已经遍历过的数小
    // 如果 m 不为 0，则 A 没遍历完，都已经在 A 中不用再管
    // 如果 n 不为 0，则 B 没遍历完，直接全移到 A 中相同的位置
    while (n > 0) {
        A[n - 1] = B[n - 1];
        n--;
    }
};
exports.merge = merge;
var A = [1, 2, 3, 0, 0, 0];
var B = [2, 5, 16];
var m = 3;
var n = 3;
merge(A, m, B, n);
console.log(A);
