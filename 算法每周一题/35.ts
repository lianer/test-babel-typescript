/**
算法第35题 - 单词搜索
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，
其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
同一个单元格内的字母不允许被重复使用。

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false

提示：
board 和 word 中只包含大写和小写英文字母。
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/

/**
方法一：
将 board 转成二叉树？

方法二：
将 board 转成对象-坐标格式：{A: [0, 1]}，再遍历 word，以此去找对象中有没有符合要求的（有符合相邻条件的，且没有被使用过的），有则记录下来

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board: string[][], word: string) {
  // 1. 将 board 转换成对象-坐标格式
  // 2. 递归遍历所有的可能坐标
  // 3. 记录已经使用过的坐标
};
