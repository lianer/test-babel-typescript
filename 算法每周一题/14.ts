/*
算法第 14 题

正则通配符的实现

给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。

两个字符串完全匹配才算匹配成功。

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。

输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。

输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s: string, p: string): boolean {
  return true
}




/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s: string, p: string): boolean {
  const pattern = '^' + p.replace(/\?/g, '.').replace(/\*/g, '.*') + '$';
  const reg = new RegExp(pattern);
  return reg.test(s);
};

console.log('---------- isMatch ----------');
console.log(isMatch('aa', 'a'), false);
console.log(isMatch('aa', '*'), true);
console.log(isMatch('adceb', '*a*b'), true);

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch2 = function(s: string, p: string): boolean {
  let lastIndex = -1;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
    } else if (p[i] === '?') {
      lastIndex++;
    }

    switchLabel: switch (p[i]) {
      case '*':
        break switchLabel;
      case '?':
        lastIndex++;
        break switchLabel;
      default:
        let nextIndex = s.indexOf(p[i], lastIndex);
        if (nextIndex > -1) {
          break switchLabel;
        } else {
          return false;
        }
    }
  }
  if (lastIndex === p.length || p[p.length - 1] === '*') {
    return true;
  }
  return false;
};

console.log('---------- isMatch2 ----------');
console.log(isMatch2('aa', 'a'), false);
console.log(isMatch2('aa', '*'), true);
console.log(isMatch2('adceb', '*a*b'), true);
