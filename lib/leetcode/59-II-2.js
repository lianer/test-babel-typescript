"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MaxQueue = /** @class */ (function () {
    function MaxQueue() {
        this.queue = [];
        this.deque = [];
    }
    /**
     * @return {number}
     */
    MaxQueue.prototype.max_value = function () {
        if (this.deque.length) {
            return this.deque[0];
        }
        return -1;
    };
    /**
     * @param {number} value
     * @return {void}
     */
    MaxQueue.prototype.push_back = function (value) {
        // 假设一个倒序排列的 deque: [5, 4, 2, 1]
        // 将 3 插入 deque，移除比 3 小的元素，得到： [5, 4, 3]
        while (this.deque.length && this.deque[this.deque.length - 1] < value) {
            this.deque.pop();
        }
        this.deque.push(value);
        this.queue.push(value);
    };
    /**
     * @return {number}
     */
    MaxQueue.prototype.pop_front = function () {
        if (this.queue.length === 0) {
            return -1;
        }
        var left = this.queue.shift();
        // 如果 queue 移除的元素与 deque 最大的元素相同，则也从 deque 中移除
        if (left === this.deque[0]) {
            this.deque.shift();
        }
        return left;
    };
    return MaxQueue;
}());
exports.MaxQueue = MaxQueue;
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
var maxQueue = new MaxQueue();
var actions = [
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
var enter = [[], [1], [3], [2], [], [], [], [], [], [], []];
var result = [null];
actions.forEach(function (ac, index) {
    if (index === 0) {
        return;
    }
    var r = maxQueue[ac].apply(maxQueue, __spread(enter[index]));
    if (r === void 0) {
        r = null;
    }
    result.push(r);
});
console.log(result);
