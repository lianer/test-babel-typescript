/**
算法第二十七题-字符串相乘
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:
输入: num1 = "2", num2 = "3"
输出: "6"

示例 2:
输入: num1 = "123", num2 = "456"
输出: "56088"

说明：
num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1: string, num2: string) {
  /**
   * 1. 先将乘数 num2 与被乘数 num1 相乘，模拟乘法的过程，从右往左一位一位相乘，逢十进一，得到 n 组乘积（每往左移一位，乘积的结果右边就要加一个 0）
   * 2. 得到 n 组乘积之后（这个 n 等于 num2 的位数），将它们从右往左一位一位相加，逢十进一，得到最终结果
   */
  const products = [];
  let maxLength = 0;
  for (let i = num2.length - 1; i >= 0; i--) {
    let n2 = num2[i];
    let last = 0;
    let str = '';
    for (let j = num1.length - 1; j >= 0; j--) {
      let n1 = num1[j];
      let r = Number(n1) * Number(n2);
      r += last;
      last = (r - (r % 10)) / 10;
      str = String(r % 10) + str;
    }
    for (let k = num2.length - 1; k > i; k--) {
      str += '0';
    }
    if (last !== 0) {
      str = String(last) + str;
    }
    if (str.length > maxLength) {
      maxLength = str.length;
    }
    products.push(str);
  }

  // console.log(products);

  let last = 0;
  let res = '';
  for (let i = 0; i < maxLength; i++) {
    let r = last;
    for (let j = 0; j < products.length; j++) {
      let product = products[j];
      if (product.length > i) {
        r += Number(product[product.length - 1 - i]);
      }
    }
    last = (r - (r % 10)) / 10;
    res = (r % 10) + res;
  }

  return res;
};

console.log(multiply('2', '3'), '6');

console.log(multiply('123', '456'), '56088');

console.log(multiply('777', '555'), '431235');

console.log(multiply('21111112343332', '3111234567777755'), '65681622486814163537832179660');
