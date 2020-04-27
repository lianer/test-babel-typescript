/*
第一题：交换字母顺序，如果不是字母，则跳过

例子1：
输入：'a-bC-dEf-ghIj'
输出：'j-Ih-gfE-dCba'

例子2：
输入：'ab-cd'
输出：'dc-ba'

例子3：
输入：'Test1ng-Leet=code-Q!'
输出：'Qedo1ct-eeLg=ntse-T!'
*/

function test(s) {
  let pattern = /[a-zA-Z]/;
  let i = 0;
  let j = s.length - 1;
  let r = '';
  while (i < s.length) {
    let c = s[i];
    if (pattern.test(c)) {
      while (!pattern.test(s[j])) {
        j--;
      }
      r += s[j];
      j--;
    } else {
      r += c;
    }
    i++;
  }
  return r;
}
console.log(test('a-bC-dEf-ghIj'), 'j-Ih-gfE-dCba');
console.log(test('ab-cd'), 'dc-ba');
console.log(test('Test1ng-Leet=code-Q!'), 'Qedo1ct-eeLg=ntse-T!');

/*
第二题：把一个整数数组划分成 3 个子数组，每个子数组的总和都相等，如果可以则返回 true，否则返回 false。

例子1：
输入：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true

例子2：
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false

例子3：
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
*/

function test2(nums) {
  const sum = nums.reduce((a, b) => a + b) / 3;
  if (sum !== parseInt(sum)) {
    return false;
  }
  let cnt = 0;
  let r = 0;
  for (let i = 0; i < nums.length; i++) {
    r += nums[i];
    if (r === sum) {
      r = 0;
      cnt++;
    }
  }
  return cnt === 3;
}
console.log(test2([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]), true);
console.log(test2([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]), false);
console.log(test2([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]), true);

/*
卡牌分组

给定一副牌，每张牌上都写着一个整数。
此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
1. 每组都有 X 张牌。
2. 组内所有的牌上都写着相同的整数。
3. 仅当你可选的 X >= 2 时返回 true。

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
*/
