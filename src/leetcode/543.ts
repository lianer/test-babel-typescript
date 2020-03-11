/*
543. 二叉树的直径

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

示例 :
给定二叉树

          1
         / \
        2   3
       / \
      4   5
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

注意：两结点之间的路径长度是以它们之间边的数目表示。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diameter-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*
### 解题思路




*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  public val: any = null;
  public left: TreeNode | null = null;
  public right: TreeNode | null = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root: TreeNode | null): number {
  let max = 0;

  const depth = function(node: TreeNode | null): number {
    if (node === null || node === void 0) {
      return 0;
    }
    let left = depth(node.left);
    let right = depth(node.right);
    max = Math.max(left + right, max);
    return Math.max(left, right) + 1;
  };

  depth(root);

  return max;
};

let treeSchema = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

console.log(diameterOfBinaryTree(treeSchema), 3);

export { diameterOfBinaryTree };
