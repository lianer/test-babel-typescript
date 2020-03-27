/*
914. 卡牌分组

给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

示例 1：
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

示例 2：
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。

示例 3：
输入：[1]
输出：false
解释：没有满足要求的分组。

示例 4：
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]

示例 5：
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：
1 <= deck.length <= 10000
0 <= deck[i] < 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

const gcd = function(a: number, b: number) {
  // case 1:
  // 18, 6
  // 12, 6
  // 6, 6
  // 6, 0

  // case 2:
  // 6, 18
  // 18, 6
  // 12, 6
  // 6, 6
  // 6, 0
  let c = 0;
  while (b > 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
};

/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function(deck: number[]) {
  if (deck.length < 2) {
    return false;
  }

  // 利用排序来实现统计，时间复杂度 O(nlogn)，空间复杂度 O(logn)
  deck.sort((a, b) => a - b);

  // 记录对比过的数据的最大公约数
  let lastGcd = -1;
  let cnt = 1;
  for (let i = 1; i < deck.length; i++) {
    // 如果与上一个数相同，则累加计数
    if (deck[i] === deck[i - 1]) {
      cnt++;
    }
    // 如果是最后一个元素，或与上一个数不相同，则与上一次的最大公约数再次求最大公约数
    if (i === deck.length - 1 || deck[i] !== deck[i + 1]) {
      lastGcd = lastGcd === -1 ? cnt : gcd(lastGcd, cnt);
      cnt = 1;
    }
  }
  // 一次循环下来连续求得的最大公约数，如果是 1 则表示他们无法满足 X >=2 的分组规则
  return lastGcd !== 1;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]), true);
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]), false);
console.log(hasGroupsSizeX([1]), false);
console.log(hasGroupsSizeX([1, 1]), true);
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]), true);

export { hasGroupsSizeX };
