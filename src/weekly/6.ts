/*
给你一个整数数组 nums 和一个整数 k。
如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「纯奇数数组」。
请返回这个数组中「纯奇数数字」的数量。

输入：nums = [1,1,2,1,1], k = 3
输出：2
解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。

进阶： 在O(n) 的时间复杂度
提示： 双指针  滑动窗口
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// const numberOfSubarrays = function(nums: number[], k: number) {}

/*
方法一：暴力法

依次遍历 nums，设开始点 a 和结束点 b，并在 a ~ b 之间查找符合要求的子数组

复杂度分析：
时间复杂度：O(n^3)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = function(nums: number[], k: number) {
  const isOdd = (n: number) => n % 2 === 1;
  let childArrCnt = 0;
  for (let a = 0; a < nums.length; a++) {
    for (let b = a; b < nums.length; b++) {
      let cnt = 0;
      for (let i = a; i <= b; i++) {
        // 在 a ~ b 之间查找符合要求的子数组
        if (isOdd(nums[i])) {
          cnt++;
        }
      }
      if (cnt === k) {
        childArrCnt++;
      }
    }
  }
  return childArrCnt;
};

/*
方法二：优化暴力法

遍历 nums，依次设定起始点 a，并从起始点 a 开始查找符合要求的结束点 b。

复杂度分析：
时间复杂度：O(n^2)
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays2 = function(nums: number[], k: number) {
  let childArrCnt = 0;
  const isOdd = (n: number) => n % 2 === 1;
  for (let a = 0; a < nums.length; a++) {
    let oddCnt = 0;
    for (let b = a; b < nums.length; b++) {
      if (isOdd(nums[b])) {
        oddCnt++;
      }
      if (oddCnt === k) {
        childArrCnt++;
      } else if (oddCnt > k) {
        break;
      }
    }
  }
  return childArrCnt;
};

/*
方法三：利用索引

遍历 nums，将奇数的索引记录到 oddList 数组中。
遍历 oddList，依次取出起始点 a 和结束点 b(a + k - 1)，求出起始点 a 左侧的偶数个数 left，求出结束点 b 右侧的偶数个数 right，
得到 a ~ b 之间有效的子数组个数为 left * right。

复杂度分析：
时间复杂度：O(n)
空间复杂度：O(n)，取决于奇数的个数
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays3 = function(nums: number[], k: number) {
  let childArrCnt = 0;
  const isOdd = (n: number) => n % 2 === 1;
  const oddList = [-1]; // [2, 2, 1, 1, 2, 2, 1] k=2 => oddList: [-1, 0, 1, 3, 4, 5]
  // [2, 2, 1, 1, 2, 2]
  // 2, 2, 1, 1
  // 2, 2, 1, 1, 2
  // 2, 2, 1, 1, 2, 2
  // 2, 1, 1
  // 2, 1, 1, 2
  // 2, 1, 1, 2, 2
  // 1, 1
  // 1, 1, 2
  // 1, 1, 2, 2
  for (let i = 0; i < nums.length; i++) {
    if (isOdd(nums[i])) {
      oddList.push(i);
    }
  }
  oddList.push(nums.length);
  for (let a = 1; a < oddList.length - k; a++) {
    let b = a + k - 1;
    let left = oddList[a] - oddList[a - 1];
    let right = oddList[b + 1] - oddList[b];
    childArrCnt += left * right;
  }
  return childArrCnt;
};

type Args = [number[], number];

console.log('test1', 'test2', 'test3', 'expect');

let args1: Args = [[1, 1, 2, 1, 1], 3];
console.log(numberOfSubarrays(...args1), numberOfSubarrays2(...args1), numberOfSubarrays3(...args1), 2);

let args2: Args = [[1, 1, 2, 1, 1], 2];
console.log(numberOfSubarrays(...args2), numberOfSubarrays2(...args2), numberOfSubarrays3(...args2), 5);

let args3: Args = [[1, 1, 2, 2], 2];
console.log(numberOfSubarrays(...args3), numberOfSubarrays2(...args3), numberOfSubarrays3(...args3), 3);

let args4: Args = [[2, 2, 1, 1, 2], 2];
console.log(numberOfSubarrays(...args4), numberOfSubarrays2(...args4), numberOfSubarrays3(...args4), 6);

let args5: Args = [[2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2], 3];
console.log(numberOfSubarrays(...args5), numberOfSubarrays2(...args5), numberOfSubarrays3(...args5), 9);

let args6: Args = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2];
console.log(numberOfSubarrays(...args6), numberOfSubarrays2(...args6), numberOfSubarrays3(...args6), 9);

let args7: Args = [[0, 0, 1, 1, 0, 0], 2];
console.log(numberOfSubarrays(...args7), numberOfSubarrays2(...args7), numberOfSubarrays3(...args7), 9);
