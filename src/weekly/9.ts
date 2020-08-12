/**
字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
输入: s = "acc"
输出: ["acc","cac","cca"]

考察方向（回溯算法）：
回溯算法实际上一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，
当发现已不满足求解条件时，就“回溯”返回，尝试别的路径。
回溯法是一种选优搜索法，按选优条件向前搜索，以达到目标。
但当探索到某一步时，发现原先选择并不优或达不到目标，
就退回一步重新选择，这种走不通就退回再走的技术为回溯法，
而满足回溯条件的某个状态的点称为“回溯点”。
许多复杂的，规模较大的问题都可以使用回溯法，有“通用解题方法”的美称。
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation2 = function(s: string): string[] {
  const cases = new Set<string>();

  const recursion = function(str: string, remain: string) {
    if (remain === '') {
      cases.add(str);
      return;
    }
    for (let i = 0; i < remain.length; i++) {
      recursion(str + remain[i], remain.substring(0, i) + remain.slice(i + 1));
    }
  };

  recursion('', s);

  return Array.from(cases);
};

console.log(permutation('abcd'));
console.log(permutation('abc'));
console.log(permutation('acc'));
