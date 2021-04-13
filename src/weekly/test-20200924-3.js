/**
  第三题 我能跳到嘛,
  这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。
  请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。
  注意，不管是什么情况下，你都无法跳到数组之外。

  输入：arr = [4,2,3,0,3,1,2], start = 5
  输出：true
  解释：
  到达值为 0 的下标 3 有以下可能方案：
  下标 5 -> 下标 4 -> 下标 1 -> 下标 3
  下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3

  输入：arr = [3,0,2,1,2], start = 2
  输出：false
  解释：无法到达值为 0 的下标 1 处。


  @param {number[]} arr
  @param {number} start
  @return {boolean}
  */
const canReach = (arr, start) => {
  const map = {};
  arr.forEach((v, i) => {
    map[i] = true;
  });

  const jump = function(i) {
    if (map[i] === false) {
      return false;
    }
    if (i + arr[i] >= arr.length || i - arr[i] < 0) {
      map[i] = false;
    }

    if (i >= arr.length) {
      return false;
    }
    if (i < 0) {
      return false;
    }
    if (arr[i] === 0) {
      return true;
    }
    if (map[i] === false) {
      return false;
    }
    if (jump(i + arr[i])) {
      return true;
    } else {
      if (jump(i - arr[i])) {
        return true;
      }
      map[i] = false;
      return false;
    }
  };
  return jump(start);
};

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5), true);
console.log(canReach([3, 0, 2, 1, 2], 2), false);
