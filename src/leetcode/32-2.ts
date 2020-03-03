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

// 【解法二：动态规划】
// 参考：https://leetcode-cn.com/problems/longest-valid-parentheses/solution/zui-chang-you-xiao-gua-hao-by-leetcode/
//
// 复杂度分析：
// 时间复杂度：O(n)。遍历整个字符串一次，就可以将 dp 数组求出来。
// 空间复杂度：O(n)。需要一个大小为 n 的 dp 数组。
//
var longestValidParentheses = function(s: string): number {
  let max = 0;
  let dp: number[] = [];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) == '(') {
        dp[i] = dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};

let r: number;

console.log('【解法一：利用栈记录索引】');
console.log((r = longestValidParentheses(')(()())')), r === 6);
console.log((r = longestValidParentheses('(()')), r === 2);

export { longestValidParentheses };
