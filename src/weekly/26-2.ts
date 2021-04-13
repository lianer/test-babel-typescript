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

http://box.hp.guahao-inc.com/typescript/142
*/

/**
 * @param {string} S
 * @return {string}
 * @example
 *  [] <- aabbcc
 *  [a] <- abbcc
 *  [ab] <- abcc
 *  [abc] <- abc
 *  [abca] <- bc
 *  [abcab] <- c
 *  [abcabc] <-
 */
var reorganizeString = function(S: string) {
  // 记录输出的字符串数组
  const res: string[] = [];

  // 将原始字符串拆分成数组
  const origin = S.split('');

  // 倒序遍历 origin 的索引
  let index = origin.length - 1;

  // 上一轮遍历的长度
  let lastRoundLength = origin.length;

  while (origin.length > 0) {
    // 将 origin 字符倒序遍历不重复地推入 res
    if (res.length === 0 || origin[index] !== res[res.length - 1]) {
      res.push(origin[index]);
      origin.splice(index, 1);
      console.log(res.join(''), '<-', origin.join(''));
      console.log(new Array(res.length + 5 + index).join(' ') + '-');
    }

    // 循环遍历，当遍历至 origin 最左侧时，重新下一次遍历
    if (index === 0) {
      index = origin.length - 1;

      // 如果该轮遍历结束后，origin 的长度没有发生变化，则表示没有可以匹配的结果，终止函数
      if (lastRoundLength === origin.length) {
        return '';
      }

      lastRoundLength = origin.length;
    } else {
      index--;
    }
  }

  return res.join('');
};

console.log(1, reorganizeString('aab'), 'aba');

// console.log(2, reorganizeString('aa'), '');

/**
 * [] <- aadvccaacc
 * [c] <- aadvccaac
 * [ca] <- aadvccac
 * [cac] <- aadvcac
 * [cacv] <- aadcac
 * [cacvd] <- aacac
 * [cacvda] <- acac
 * [cacvdac] <- aca
 * [cacvdaca] <- ac
 * [cacvdacac] <- a
 * [cacvdacaca] <-
 */
// console.log(3, reorganizeString('aadvccaacc'), 'acacacadcv');

// console.log(4, reorganizeString('aadvccaaccaaaaaaaaaaaaa'), '');

// console.log(5, reorganizeString('aabafaafqfarfqqfafgagfasgsf'), 'afafafagagagaqaqaqfsfsfbfrf');
