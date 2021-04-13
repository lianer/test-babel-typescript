/**
算法每周一题第 26 题 - 重排字符串

给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例 1:
输入: S = "aab"
输出: "aba"

示例 2:
输入: S = "aaab"
输出: ""

注意:
S 只包含小写字母并且长度在[1, 500]区间内。

提示： 利用贪心逻辑和优先队列解题, 只要相邻的不同既可，输出答案不唯一

*/

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S: string) {
  const res: string[] = [];
  const origin = S.split('');
  let index = 0;
  let lastRoundLength = origin.length;

  while (origin.length > 0) {
    if (res.length === 0 || origin[index] !== res[res.length - 1]) {
      res.push(origin[index]);
      origin.shift();
    } else {
      index++;
    }

    if (index === origin.length) {
      index = 0;
      if (lastRoundLength === origin.length) {
        return '';
      }
      lastRoundLength = origin.length;
    }
  }
  return res.join('');
};

console.log(reorganizeString('aab'), 'aba');

console.log(reorganizeString('aa'), '');

console.log(reorganizeString('aadvccaacc'), 'acacacadcv');

console.log(reorganizeString('aadvccaaccaaaaaaaaaaaaa'), '');

console.log(reorganizeString('aabafaafqfarfqqfafgagfasgsf'), 'afafafagagagaqaqaqfsfsfbfrf');
