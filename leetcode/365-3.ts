/*
365. 水壶问题

有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空
示例 1: (From the famous "Die Hard" example)

输入: x = 3, y = 5, z = 4
输出: True
示例 2:

输入: x = 2, y = 6, z = 5
输出: False
*/

/*
## 方法二：数学方法，求最大公约数

### 解题思路

*/

const gcd = function(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  let c = a % b;
  a = b;
  b = c;
  return gcd(a, b);
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x: number, y: number, z: number): boolean {
  if (x + y < z) {
    return false;
  }
  if (x === 0 || y === 0) {
    return z === 0 || x + y === z;
  }
  return z % gcd(x, y) === 0;
};

console.log(canMeasureWater(3, 5, 4), true);
console.log(canMeasureWater(2, 6, 5), false);
console.log(canMeasureWater(2, 2, 4), true);
console.log(canMeasureWater(0, 0, 0), true);
console.log(canMeasureWater(0, 1, 1), true);
console.log(canMeasureWater(1, 1, 1), true);
console.log(canMeasureWater(1, 1, 3), false);
console.log(canMeasureWater(100, 1, 10), true);
console.log(canMeasureWater(22003, 31237, 1), true); // 如果不检查是否满足条件并终止 while 循环，最差需要遍历所有情况，则需要超过 1m+ 的时间
console.log(canMeasureWater(22003, 1837, 1), true); // 如果不检查是否满足条件并终止 while 循环，最差需要遍历所有情况，则需要约 1s+ 的时间
console.log(canMeasureWater(104579, 104593, 12444), true); // 执行时间超过 1s，leetcode 超时

export { canMeasureWater };
