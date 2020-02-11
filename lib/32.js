'use strict';
/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s: string): number {
//   let max = 0;
//   let stack: number[] = [];
//   let lastValidIndex = -1;
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (char === '(') {
//       stack.push(i);
//     } else {
//       if (stack.pop() === void 0) {
//         // 栈为空，括号匹配失败，重置索引计算起点
//         lastValidIndex = i;
//       } else {
//         // 括号匹配成功，当前索引减去索引计算起点，得出索引跨度（字符串长度）
//         // 起始点索引分两种：
//         //   一种是没有被匹配掉的 (，比如："(()"，那么 i=0 的 ( 应该作为起始点，通过取 stack 最后一位元素来获得索引值
//         //   一种是 ) 匹配失败，没有找到对应的 (，比如：")()"，那么 i=0 的 ) 应该作为起始点，使用变量 lastValidIndex 来记录索引值
//         let _max = i - (stack.length ? stack[stack.length - 1] : lastValidIndex);
//         if (_max > max) {
//           max = _max;
//         }
//       }
//     }
//   }
//   return max;
// };
var longestValidParentheses = function(s) {
  var max = 0;
  var stack = [-1];
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (char === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        // 栈为空，括号匹配失败，重置索引计算起点
        stack[0] = i;
      } else {
        // 括号匹配成功，当前索引减去索引计算起点，得出索引跨度（字符串长度）
        // 起始点索引分两种：
        //   一种是没有被匹配掉的 (，比如："(()"，那么 i=0 的 ( 应该作为起始点，通过取 stack 最后一位元素来获得索引值
        //   一种是 ) 匹配失败，没有找到对应的 (，比如：")()"，那么 i=0 的 ) 应该作为起始点，使用变量 lastValidIndex 来记录索引值
        // let _max = i - (stack.length ? stack[stack.length - 1] : lastValidIndex);
        var _max = i - stack[stack.length - 1];
        if (_max > max) {
          max = _max;
        }
      }
    }
  }
  return max;
};
console.log(longestValidParentheses(')(()())'));
console.log(longestValidParentheses('(()'));
