/*
836. 矩形重叠

矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形，判断它们是否重叠并返回结果。

示例 1：

输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
输出：true
示例 2：

输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
输出：false


提示：

两个矩形 rec1 和 rec2 都以含有四个整数的列表的形式给出。
矩形中的所有坐标都处于 -10^9 和 10^9 之间。
x 轴默认指向右，y 轴默认指向上。
你可以仅考虑矩形是正放的情况。
*/

type Rect = number[];

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function(rec1: Rect, rec2: Rect) {
  // 如果两个矩形相交，相交部分左下角为 cx1, cy1，右上角为 cx2, cy2，那么必定有：cx2 > cx1 && cy2 > cy1
  // 相交部分即左下角的 x, y 取两个矩形的最大值，右上角的 x, y 取两个矩形的最小值
  // const cx1 = Math.max(rec1[0], rec2[0]);
  // const cy1 = Math.max(rec1[1], rec2[1]);
  // const cx2 = Math.min(rec1[2], rec2[2]);
  // const cy2 = Math.min(rec1[3], rec2[3]);
  // return cx2 > cx1 && cy2 > cy1;

  // 代码简化一下，就是
  return (
    Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1])
  );
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]), true);
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]), false);
console.log(isRectangleOverlap([7, 8, 13, 15], [10, 8, 12, 20]), true);

export { isRectangleOverlap };
