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

一开始的思路是查找计算坏的橘子到好的橘子的最短路径的最大值，但当时并不知道 BFS 算法，因此比较挫的方式如下：

1. 坏橘子是向四个方向传播的，需要准备一个获取四个方向的橘子坐标的函数
2. 每过一分钟，坏橘子的数量就会增加，因此需要一个列表储存坏橘子，每一次传播，都需要对坏橘子进行遍历
3. 我们可以筛选出来哪些橘子已经不具备传播可能性（四个方向都没有好橘子的）来优化遍历的速度，如果坏橘子本身不具备传播可能性了，那就从遍历的列表中移除
4. 有两种情况标识着结束，分别是：
  1. 已经没有好的橘子了，因此需要统计剩余好橘子的数量；
  2. 还有好的橘子，但无法被传播到，可以换一种更好的判断方式：这一轮传播，没有传播到任何好橘子，因此需要记录每一轮传播的好橘子的个数；

复杂度分析：

时间复杂度：O(mn)，遍历的次数取决于坏橘子传播的分钟数，以及坏掉的橘子的个数
空间复杂度：O(1)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid: number[][]): number {
  /**
   * 获取指定橘子四周的橘子
   * @param coord 当前橘子的坐标
   */
  const getAround = function(coord: number[]) {
    const [x, y] = coord;
    return [
      [x - 1, y], // 左
      [x + 1, y], // 右
      [x, y + 1], // 上
      [x, y - 1], // 下
    ];
  };

  /**
   * 把行列号转换为字符串
   * @param x 行
   * @param y 列
   */
  const genKey = function(x: number, y: number): string {
    return String(x) + ',' + String(y);
  };

  const good: { [key: string]: number[] } = {};
  const bad: { [key: string]: number[] } = {};
  let times = 0; // 传播的分钟数
  let cnt = 0; // 每轮被传播变坏的橘子的个数
  let aroundCnt = 0; // 每个橘子传播其他橘子的个数

  // 第一次遍历，找出好橘子与坏橘子
  grid.forEach((row, rowNum) => {
    row.forEach((status: number, colNum) => {
      if (status === 1) {
        good[genKey(rowNum, colNum)] = [rowNum, colNum];
      } else if (status === 2) {
        bad[genKey(rowNum, colNum)] = [rowNum, colNum];
      }
    });
  });

  do {
    cnt = 0;

    Object.keys(bad).forEach((key: string) => {
      const coord: number[] = bad[key];
      aroundCnt = 0;

      const aroundCoords = getAround(coord);

      // 遍历四周的橘子，如果可以被传播，则从 good 中移除，添加到 bad 中
      aroundCoords.forEach((aroundCoord: number[]) => {
        const [rowNum, colNum] = aroundCoord;
        if (grid[rowNum] !== void 0 && grid[rowNum][colNum] !== void 0 && grid[rowNum][colNum] === 1) {
          const key = genKey(rowNum, colNum);
          bad[key] = aroundCoord;
          delete good[key];
          grid[rowNum][colNum] = 2;
          aroundCnt++;
        }
      });

      // 如果周边没有可以传播的橘子，则标识该橘子已经失去传染能力，从遍历列表中移除，下一次不再遍历它
      if (aroundCnt === 0) {
        const [rowNum, colNum] = coord;
        delete bad[genKey(rowNum, colNum)];
      }

      cnt += aroundCnt;
    });

    cnt > 0 && times++;
  } while (cnt > 0 && Object.keys(good).length > 0); // 一轮结束，有传播坏橘子，并且还有好橘子，则继续遍历

  // 如果还有剩余的好橘子，则说明永远不可能被传播到
  if (Object.keys(good).length > 0) {
    return -1;
  } else {
    return times;
  }
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
