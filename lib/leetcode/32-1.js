"use strict";
/**
给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:

输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
示例 2:

输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
// 【解法一：利用栈记录索引】
//
// 解题思路：
// 需要计算出有效的括号的「开始位置」（start）和「结束位置」（end），「结束位置」就是右括号匹配成功时的位置。
// 可以利用栈（stack）来记录左括号出现的索引位置，比如：)(()()) => [1, 2, 4]。
// 遍历字符串时，当出现左括号就入栈，当出现右括号的时候就出栈，执行步骤如下：
//   index: 0, stack: []
//     碰到右括号，出栈失败，匹配失败，重置「开始位置」，start = 0
//   index: 1, stack: [1]
//     碰到左括号，入栈
//   index: 2, stack: [1, 2]
//     碰到左括号，入栈
//   index: 3, stack: [1]
//     碰到右括号，出栈成功，栈里还有一个左括号未匹配，不能代表它是有效的，因此：length = index - stack[stack.length - 1] = 3 - 1 = 2
//   index: 4, stack: [1, 4]
//     碰到左括号，入栈
//   index: 5, stack: [1]
//     碰到右括号，出栈成功，栈里还有一个左括号未匹配，不能代表它是有效的，因此：length = index - stack[stack.length - 1] = 5 - 1 = 4
//   index: 6, stack: []
//     碰到右括号，出栈成功，栈为空，因此：length = index - start = 6 - 0 = 6
//
// 情况分析：
// "()()": 当匹配到 index 3 时，stack = [], start = -1, end = 3, length = end - start = 4
// ")()": 当匹配到 index 2 时，stack = [], start = 0, end = 2, length = end - start = 2
// "(()": 当匹配到 index 2 时，stack = [0], start = -1, end = 2, length = end - stack[0] = 2
//
// 解题流程：
//   1. 在匹配到 "(" 时，将索引入栈 stack 中；
//   2. 匹配到 ")" 时：
//     2.1 stack 出栈
//     2.2 若出栈成功，则匹配成功；
//       2.2.1 若 stack 为空，则 length = index - start
//       2.2.2 若 stack 不为空，stack 中还有未被证实的左括号，因此 length = index - stack[stack.length - 1]
//     2.3 若出栈失败，则匹配失败，重置「开始位置」，start = index；
//
// 复杂度分析：
//   时间复杂度：O(n)。n 是给定字符串的长度。
//   空间复杂度：O(n)。栈的大小最大达到 n。
//
var longestValidParentheses = function (s) {
    let max = 0;
    let stack = [-1]; // -1 是兜底的起始索引元素，代替「开始位置」（start）
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            }
            else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
};
exports.longestValidParentheses = longestValidParentheses;
let r;
console.log('【解法一：利用栈记录索引】');
console.log((r = longestValidParentheses(')(()())')), r === 6);
console.log((r = longestValidParentheses('(()')), r === 2);
