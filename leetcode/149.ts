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

/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function(points: number[][]): number {
  if (points.length < 3) {
    return points.length;
  }

  let max = 0;
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      let count = 2;
      for (let k = j + 1; k < points.length; k++) {
        const [x, y] = points[k];
        const line = isLine(x1, y1, x2, y2, x, y);
        if (line) {
          count++;
        }
      }
      max = Math.max(max, count);
    }
  }
  return max;
};

const isLine = function(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
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

const points = [
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

export { maxPoints };
