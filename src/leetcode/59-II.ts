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
解题思路：

1. 在 pop() 和 push() 的时候，更新 maxValue，而在 max_value() 时直接返回 maxValue
2. 在 push() 的时候，直接拿 val 与 maxValue 比对即可
3. 在 pop() 的时候，可以做一个小优化，当只有 maxValue 被弹出的时候，才更新 maxValue，这样可以减少很多次更新 maxValue 的操作

*/

interface MaxQueue {
  [key: string]: any;
}

class MaxQueue {
  private queue: number[] = [];
  private maxValue = -1;

  constructor() {}

  recalculateMaxValue() {
    let maxValue = -1;
    this.queue.forEach(val => (maxValue = Math.max(maxValue, val)));
    this.maxValue = maxValue;
  }

  /**
   * @return {number}
   */
  max_value(): number {
    return this.maxValue;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  push_back(value: number): void {
    this.queue.push(value);
    if (value > this.maxValue) {
      this.maxValue = value;
    }
  }

  /**
   * @return {number}
   */
  pop_front(): number {
    if (this.queue.length === 0) {
      return -1;
    }
    const front = this.queue.shift();
    if (front === this.maxValue) {
      this.recalculateMaxValue();
    }
    return <number>front;
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
  'max_value',
  'pop_front',
  'max_value',
  'push_back',
  'max_value',
  'pop_front',
  'max_value',
  'pop_front',
  'push_back',
  'pop_front',
  'pop_front',
  'pop_front',
  'push_back',
  'pop_front',
  'max_value',
  'pop_front',
  'max_value',
  'push_back',
  'push_back',
  'max_value',
  'push_back',
  'max_value',
  'max_value',
  'max_value',
  'push_back',
  'pop_front',
  'max_value',
  'push_back',
  'max_value',
  'max_value',
  'max_value',
  'pop_front',
  'push_back',
  'push_back',
  'push_back',
  'push_back',
  'pop_front',
  'pop_front',
  'max_value',
  'pop_front',
  'pop_front',
  'max_value',
  'push_back',
  'push_back',
  'pop_front',
  'push_back',
  'push_back',
  'push_back',
  'push_back',
  'pop_front',
  'max_value',
  'push_back',
  'max_value',
  'max_value',
  'pop_front',
  'max_value',
  'max_value',
  'max_value',
  'push_back',
  'pop_front',
  'push_back',
  'pop_front',
  'max_value',
  'max_value',
  'max_value',
  'push_back',
  'pop_front',
  'push_back',
  'push_back',
  'push_back',
  'pop_front',
  'max_value',
  'pop_front',
  'max_value',
  'max_value',
  'max_value',
  'pop_front',
  'push_back',
  'pop_front',
  'push_back',
  'push_back',
  'pop_front',
  'push_back',
  'pop_front',
  'push_back',
  'pop_front',
  'pop_front',
  'push_back',
  'pop_front',
  'pop_front',
  'pop_front',
  'push_back',
  'push_back',
  'max_value',
  'push_back',
  'pop_front',
  'push_back',
  'push_back',
  'pop_front',
];

const enter = [
  [],
  [],
  [],
  [],
  [46],
  [],
  [],
  [],
  [],
  [868],
  [],
  [],
  [],
  [525],
  [],
  [],
  [],
  [],
  [123],
  [646],
  [],
  [229],
  [],
  [],
  [],
  [871],
  [],
  [],
  [285],
  [],
  [],
  [],
  [],
  [45],
  [140],
  [837],
  [545],
  [],
  [],
  [],
  [],
  [],
  [],
  [561],
  [237],
  [],
  [633],
  [98],
  [806],
  [717],
  [],
  [],
  [186],
  [],
  [],
  [],
  [],
  [],
  [],
  [268],
  [],
  [29],
  [],
  [],
  [],
  [],
  [866],
  [],
  [239],
  [3],
  [850],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [310],
  [],
  [674],
  [770],
  [],
  [525],
  [],
  [425],
  [],
  [],
  [720],
  [],
  [],
  [],
  [373],
  [411],
  [],
  [831],
  [],
  [765],
  [701],
  [],
];

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
