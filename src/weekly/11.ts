/**
算法第十一期 - 字符串解码

一条包含字母 A-Z 的消息通过以下方式进行了编码：
'A' -> 1
'B' -> 2
...
'Z' -> 26
给定一个只包含数字的非空字符串，请计算解码方法的总数，字符串不合法无解， 返回0

示例 1:
输入: "12"
输出: 2
解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。

示例 2:
输入: "226"
输出: 3
解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

提示:
这个和爬楼梯是同一个类型的问题，难点在于其添加了许多限制条件，只要避开限制条件，推出公式既可解题

进阶:
输出全部的解码结果
*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s: string) {};

console.log(numDecodings('12'), 2);

console.log(numDecodings('226'), 3);

console.log(numDecodings('121114'), 13);

console.log(numDecodings('88018'), 0);

console.log(numDecodings('161616167821'), 32);
