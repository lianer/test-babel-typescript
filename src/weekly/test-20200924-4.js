/**
       * 第四题  看看 2 出现的个数
       * @param {number} n
       * @return {number}
        编写一个方法，计算从 0 到 n (含 n) 中数字 2 出现的次数。

        示例:

        输入: 25
        输出: 9
        解释: (2, 12, 20, 21, 22, 23, 24, 25)(注意 22 应该算作两次)
        提示：
        n <= 10^9
      */
// var numberOf2sInRange = function(n) {
//   let cnt = 0;
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= 9; j++) {
//       if (Math.floor(i / Math.pow(10, j)) % 10 === 2) {
//         cnt++;
//       }
//     }
//   }
//   return cnt;
// };

var numberOf2sInRange = function(n) {
  let cnt = 0;
  for (let i = 0; i <= n; i++) {
    // for (let j = 0; j <= 9; j++) {
    //   if (Math.floor(i / Math.pow(10, j)) % 10 === 2) {
    //     cnt++;
    //   }
    // }
    // if (Math.floor(i / 1) % 10 === 2) cnt++;
    // if (Math.floor(i / 10) % 10 === 2) cnt++;
    // if (Math.floor(i / 100) % 10 === 2) cnt++;
    // if (Math.floor(i / 1000) % 10 === 2) cnt++;
    // if (Math.floor(i / 10000) % 10 === 2) cnt++;
    // if (Math.floor(i / 100000) % 10 === 2) cnt++;
    // if (Math.floor(i / 1000000) % 10 === 2) cnt++;
    // if (Math.floor(i / 10000000) % 10 === 2) cnt++;
    // if (Math.floor(i / 100000000) % 10 === 2) cnt++;

    cnt += i.toString().split('2').length - 1;
  }
  return cnt;
};

console.log(numberOf2sInRange(8000), 3400);
console.log(numberOf2sInRange(999), 300);
console.log(numberOf2sInRange(99), 20);
console.log(numberOf2sInRange(25), 9);
