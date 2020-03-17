/*
994. 腐烂的桔子

在给定的网格中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

 

示例 1：



输入：[[2,1,1],[1,1,0],[0,1,1]]
输出：4
示例 2：

输入：[[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
示例 3：

输入：[[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 

提示：

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] 仅为 0、1 或 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotting-oranges
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*


解题思路：

利用 BFS

复杂度分析：

时间复杂度：O(mn)
空间复杂度：O(mn)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid: number[][]): number {
  let times = 0;
  const fresh: { [key: string]: number[] } = {}; // 新鲜集合
  const rotten: { [key: string]: number[] } = {}; // 腐烂集合
  const genKey = (x: number, y: number): string => String(x) + ',' + String(y);

  // 遍历网格，把橘子添加到新鲜集合和腐烂集合
  grid.forEach((row, rowNum) => {
    row.forEach((status, colNum) => {
      if (status === 1) {
        fresh[genKey(rowNum, colNum)] = [rowNum, colNum];
      } else if (status === 2) {
        rotten[genKey(rowNum, colNum)] = [rowNum, colNum];
      }
    });
  });

  // 只有没有新鲜的橘子的情况，才算有效的情况，因此我们这里判断根据新鲜的橘子剩余的数量来判断终止循环会更简单
  while (Object.keys(fresh).length) {
    // 如果有新鲜的橘子，但没有腐烂的橘子了，那这是无效的情况，返回 -1
    if (Object.keys(rotten).length === 0) {
      return -1;
    }

    // 遍历腐烂的橘子，腐烂它周边的新鲜的橘子
    Object.keys(rotten).forEach((key: string) => {
      const [rowNum, colNum] = rotten[key];
      const list = [
        [rowNum - 1, colNum],
        [rowNum + 1, colNum],
        [rowNum, colNum - 1],
        [rowNum, colNum + 1],
      ];
      list.forEach(([rowNum, colNum]) => {
        const _key = genKey(rowNum, colNum);
        // 如果腐烂到了一个新鲜的橘子，则把新鲜的橘子加入到腐烂的列表，并从新鲜的列表中移除
        if (fresh[_key]) {
          rotten[_key] = fresh[_key];
          delete fresh[_key];
        }
      });
      delete rotten[key];
    });

    times++;
  }

  return times;
};

const grid1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

const grid2 = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];

const grid3 = [[0, 2]];

console.log('grid1:', orangesRotting(grid1) === 4);
console.log('grid2:', orangesRotting(grid2) === -1);
console.log('grid3:', orangesRotting(grid3) === 0);

export { orangesRotting };
