/**
算法第十三题
根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。
如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures1 = function(T: number[]): number[] {
  const res: number[] = [];
  for (let i = 0; i < T.length; i++) {
    res[i] = 0;
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
};

console.log(dailyTemperatures1([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);

/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures2 = function(T: number[]): number[] {
  const res: number[] = [];
  const indexes: number[] = [];

  // 准备一个单调递减栈 indexes，储存 T 元素的下标 i
  // 从右往左遍历 T，把 T[i] 加入到 indexes 中，并且把比 T[i] 小的值从 indexes 中移除掉
  // 第 1 轮，indexes = [73]
  // 第 2 轮，indexes = [76]
  // 第 3 轮，indexes = [76, 72]
  // 第 4 轮，indexes = [76, 72, 69]
  // 第 5 轮，indexes = [76, 72, 71]
  // 第 6 轮，indexes = [76, 75]
  // 第 7 轮，indexes = [76, 75, 74]
  // 第 8 轮，indexes = [76, 75, 74, 73]
  for (let i = T.length - 1; i >= 0; i--) {
    for (let j = indexes.length - 1; j >= 0; j--) {
      if (T[i] > T[indexes[j]]) {
        indexes.pop();
      } else {
        break;
      }
    }
    res[i] = indexes.length > 0 ? indexes[indexes.length - 1] - i : 0;
    indexes.push(i);
  }

  return res;
};

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
