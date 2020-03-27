/*
892. Surface Area of 3D Shapes

On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.

Example 1:
Input: [[2]]
Output: 10

Example 2:
Input: [[1,2],[3,4]]
Output: 34

Example 3:
Input: [[1,0],[0,2]]
Output: 16

Example 4:
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 32

Example 5:
Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 46

Note:
1 <= N <= 50
0 <= grid[i][j] <= 50

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/surface-area-of-3d-shapes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function(grid: number[][]) {
  let cnt = 0;

  const getItem = (x: number, y: number) => {
    let target = grid[x] && grid[x][y];
    return target === void 0 ? 0 : target;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cur = grid[i][j];

      if (cur === 0) {
        continue;
      }

      const top = getItem(i - 1, j);
      const bottom = getItem(i + 1, j);
      const left = getItem(i, j - 1);
      const right = getItem(i, j + 1);

      let area = 4 * cur + 2; // cur * 6 - (cur - 1) * 2 = 6 * cur - 2 * cur + 2 = 4 * cur + 2
      area -= Math.min(cur, top);
      area -= Math.min(cur, bottom);
      area -= Math.min(cur, left);
      area -= Math.min(cur, right);

      cnt += area;
    }
  }
  return cnt;
};

console.log(surfaceArea([[2]]), 10);
console.log(
  surfaceArea([
    [1, 2],
    [3, 4],
  ]),
  34,
);
console.log(
  surfaceArea([
    [1, 0],
    [0, 2],
  ]),
  16,
);
console.log(
  surfaceArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
  32,
);
console.log(
  surfaceArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2],
  ]),
  46,
);

export { surfaceArea };
