"use strict";
/*
1071. 字符串的最大公因子


对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

 

示例 1：

输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
示例 2：

输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
示例 3：

输入：str1 = "LEET", str2 = "CODE"
输出：""
 

提示：

1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] 和 str2[i] 为大写英文字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
const divide = function (str, fragment) {
    return str.split(fragment).join('') === '';
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
    if (str1.length > str2.length) {
        [str2, str1] = [str1, str2];
    }
    let length = str1.length;
    for (let i = 1; i <= length / 2; i++) {
        if (length % i === 0) {
            let s = str1.substr(0, length / i);
            if (divide(str1, s) && divide(str2, s)) {
                return s;
            }
        }
    }
    let s = str1.substr(0, 1);
    if (divide(str1, s) && divide(str2, s)) {
        return s;
    }
    return '';
};
exports.gcdOfStrings = gcdOfStrings;
console.log(gcdOfStrings('ABCABC', 'ABC'), 'ABC');
console.log(gcdOfStrings('ABABAB', 'ABAB'), 'AB');
console.log(gcdOfStrings('AAA', 'AAAAA'), 'A');
console.log(gcdOfStrings('LEFT', 'CODE'), '');
