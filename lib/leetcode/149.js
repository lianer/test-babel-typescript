"use strict";
/*
149. 直线上最多的点数

给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。

示例 1:

输入: [[1,1],[2,2],[3,3]]
输出: 3
解释:
^
|
|        o
|     o
|  o
+------------->
0  1  2  3  4
示例 2:

输入: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
输出: 4
解释:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-points-on-a-line
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    if (points.length < 3) {
        return points.length;
    }
    var max = 0;
    for (var i = 0; i < points.length - 2; i++) {
        for (var j = i + 1; j < points.length - 1; j++) {
            var _a = __read(points[i], 2), x1 = _a[0], y1 = _a[1];
            var _b = __read(points[j], 2), x2 = _b[0], y2 = _b[1];
            var count = 2;
            for (var k = j + 1; k < points.length; k++) {
                var _c = __read(points[k], 2), x = _c[0], y = _c[1];
                var line = isLine(x1, y1, x2, y2, x, y);
                if (line) {
                    count++;
                }
            }
            max = Math.max(max, count);
        }
    }
    return max;
};
exports.maxPoints = maxPoints;
var isLine = function (x1, y1, x2, y2, x, y) {
    return (y2 - y1) * (x - x2) === (x2 - x1) * (y - y2);
};
// const points: number[][] = [
//   [1, 1],
//   [3, 2],
//   [5, 3],
//   [4, 1],
//   [2, 3],
//   [1, 4],
// ];
// const points: number[][] = [];
// const points: number[][] = [
//   [1, 1],
//   [2, 2],
//   [3, 3],
//   [1, 1],
// ];
// const points: number[][] = [[0, 0]];
// const points: number[][] = [
//   [0, 0],
//   [1, 1],
// ];
// const points: number[][] = [
//   [0, 0],
//   [0, 0],
// ];
var points = [
    [0, 9],
    [138, 429],
    [115, 359],
    [115, 359],
    [-30, -102],
    [230, 709],
    [-150, -686],
    [-135, -613],
    [-60, -248],
    [-161, -481],
    [207, 639],
    [23, 79],
    [-230, -691],
    [-115, -341],
    [92, 289],
    [60, 336],
    [-105, -467],
    [135, 701],
    [-90, -394],
    [-184, -551],
    [150, 774],
];
console.log(maxPoints(points));
