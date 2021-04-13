/**
算法第 32 题-翻转矩阵后的得分
有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
返回尽可能高的分数。

示例：
输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
输出：39
解释：
转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

提示：
1 <= A.length <= 20
1 <= A[0].length <= 20
A[i][j] 是 0 或 1
*/

var matrixScore = function(A: number[][]) {
  // 1. 为了保证每一行的分数最大，那首先可以确保的是第一列全部为 1
  // 2. 其次开始从第二列开始遍历，如果 0 的个数多与 1 的个数，则进行反转
  // 3. 最后进行统计
  A = A.map(row => {
    if (row[0] === 0)
      row = row.map(val => {
        return 1 ^ val;
      });
    return row;
  });

  for (let i = 1; i < A[0].length; i++) {
    let cnt = 0;
    A.forEach(row => {
      if (row[i] === 0) cnt++;
    });
    if (cnt > A.length / 2) {
      A.forEach(row => {
        row[i] = 1 ^ row[i];
      });
    }
  }

  let sum = 0;
  A.forEach(row => {
    sum += parseInt(row.join(''), 2);
  });

  return sum;
};

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ]),
  39,
);
