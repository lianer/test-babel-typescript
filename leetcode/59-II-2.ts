/*
面试题59 - II. 队列的最大值

请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：

输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
示例 2：

输入:
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
 

限制：

1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*
### 解题思路：

我们只需记住当前最大值出队后，队列里的下一个最大值即可。

具体方法是使用一个双端队列 deque，在每次入队时，如果 deque 队尾元素小于即将入队的元素 value，则将小于 value 的元素全部出队后，再将 value 入队；否则直接入队。

1. 假设有这样的一个数组 queue 的元素按顺序入栈：[1, 2, 4, 5, 3]，用一个辅助队列 deque 来记录他们的排序规则
2. 当 5 入栈的时候，1, 2, 4 都比 5 小，因此可以把它们从辅助队列当中移除（即使 1, 2, 4 出栈，也不会影响到 max_value() 的结果）
3. 全部入栈后的情况是这样的
  1. queue: [1, 2, 4, 5, 3]
  2. deque: [5, 3]
4. 当 1, 2, 4 出栈的时候，deque 没有任何变化，max_value() 返回的都是 5
5. 当 5 出栈的时候，deque 中的 5 也要出栈，max_value() 返回的是 3
6. 当 3 出栈的时候，deque 中的 3 也要出栈，max_value() 返回的是 -1


### 时间复杂度：

max_value：\mathcal{O}(1)O(1)，直接返回双端队列（或数组）头部的元素。

pop_front：\mathcal{O}(1)O(1)，从队列中弹出一个元素，仍然是常数时间复杂度。

push_back：\mathcal{O}(1)O(1)，例如 543216，只有最后一次 push_back 操作是 \mathcal{O}(n)O(n)，其他每次操作的时间复杂度都是 \mathcal{O}(1)O(1)，均摊时间复杂度为 (\mathcal{O}(1)\times (n-1)+\mathcal{O}(n))/n=\mathcal{O}(1)(O(1)×(n−1)+O(n))/n=O(1)。

*/

interface MaxQueue {
  [key: string]: any;
}

class MaxQueue {
  private queue: number[] = [];
  private deque: number[] = [];

  constructor() {}

  /**
   * @return {number}
   */
  max_value(): number {
    if (this.deque.length) {
      return this.deque[0];
    }
    return -1;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  push_back(value: number): void {
    // 假设一个倒序排列的 deque: [5, 4, 2, 1]
    // 将 3 插入 deque，移除比 3 小的元素，得到： [5, 4, 3]
    while (this.deque.length && this.deque[this.deque.length - 1] < value) {
      this.deque.pop();
    }
    this.deque.push(value);
    this.queue.push(value);
  }

  /**
   * @return {number}
   */
  pop_front(): number {
    if (this.queue.length === 0) {
      return -1;
    }

    const left = this.queue.shift();

    // 如果 queue 移除的元素与 deque 最大的元素相同，则也从 deque 中移除
    if (left === this.deque[0]) {
      this.deque.shift();
    }
    return <number>left;
  }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

/*
输入:
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
*/

const maxQueue = new MaxQueue();

const actions = [
  'MaxQueue',
  'push_back',
  'push_back',
  'push_back',
  'max_value',
  'pop_front',
  'max_value',
  'pop_front',
  'max_value',
  'pop_front',
  'max_value',
];

const enter = [[], [1], [3], [2], [], [], [], [], [], [], []];

const result = [null];

actions.forEach((ac: string, index) => {
  if (index === 0) {
    return;
  }
  let r = maxQueue[ac](...enter[index]);
  if (r === void 0) {
    r = null;
  }
  result.push(r);
});

console.log(result);

// console.log([null, null, null, param_3, param_4, param_5, param_6, param_7], [null, null, null, 3, 1, 3, 2, -1]);

export { MaxQueue };
