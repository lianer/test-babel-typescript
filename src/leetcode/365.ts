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
## 方法一：DFS 递归（会爆栈）

### 解题思路

1. 如果把 x,y 两个桶当做几种状态，来逐一遍历，那么就有这 6 种情况：
  1. 把 x 倒满
  2. 把 y 倒满
  3. 把 x 倒给 y
  4. 把 y 倒给 x
  5. 把 x 清空
  6. 把 y 清空
2. 假设 x,y 两只桶目前的水量分别是 a,b，那么需要分别判断上述的 6 种情况是否满足条件，并拿新的水量继续判断，形成递归（DFS）
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x: number, y: number, z: number): boolean {
  let valid = false;
  let a = 0;
  let b = 0;
  let cache: { [key: string]: boolean } = {};
  const check = (a: number, b: number) => {
    if (a === z || b === z || a + b === z) {
      valid = true;
      return;
    }

    if (cache[`${a}|${b}`]) {
      return;
    }
    cache[`${a}|${b}`] = true;

    // 装满 x
    check(x, b);
    // 装满 y
    check(a, y);
    // 把 x 倒给 y
    check(Math.max(0, a - b), Math.min(b, a + b));
    // 把 y 倒给 x
    check(Math.min(a, a + b), Math.max(0, b - a));
    // 把 x 清空
    check(0, b);
    // 把 y 清空
    check(a, 0);
  };
  check(a, b);
  return valid;
};

console.log(canMeasureWater(3, 5, 4), true);
console.log(canMeasureWater(2, 6, 5), false);
console.log(canMeasureWater(2, 2, 4), true);
console.log(canMeasureWater(0, 0, 0), true);
console.log(canMeasureWater(0, 1, 1), true);
console.log(canMeasureWater(1, 1, 1), true);
console.log(canMeasureWater(1, 1, 3), false);
console.log(canMeasureWater(22003, 31237, 1), true);

export { canMeasureWater };
