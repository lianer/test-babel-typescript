/**
 * 算法第十五题 序列号二叉搜索树和反序列化
 * 序列化是将数据结构或对象转换为一系列位的过程，
 * 以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输
 * 以便稍后在同一个或另一个计算机环境中重建。
 * 设计一个算法来序列化和反序列化二叉搜索树。 对序列化/反序列化算法的工作方式没有限制。
 * 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
 * 编码的字符串应尽可能紧凑。

  tips： 二叉搜索树
    二叉查找树（Binary Search Tree），
  （又：二叉搜索树，二叉排序树）它或者是一棵空树，
    或者是具有下列性质的二叉树：
   若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
   若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
   它的左、右子树也分别为二叉排序树
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {};

/**
 * [2,1,3]
 *  {
 *     value: 2,
 *     left: {
 *       value: 1,
 *       left: null,
 *       right: null
 *     },
 *     right: {
 *       value: 3,
 *       left: null,
 *       right: null
 *     }
 *  }
 */

/**
 * [2,1,3]
 *  {
 *     value: 2,
 *     left: {
 *       value: 1,
 *       left: null,
 *       right: null
 *     },
 *     right: {
 *       value: 3,
 *       left: null,
 *       right: null
 *     }
 *  }
 */

/*
[8, 5, 9, 4, 6, 2, 11, 2]
    {
        value: 8,
        left: {
            value: 5,
            left: {
                value: 4,
                left: {
                    value: 2,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 6,
                left: null,
                right: null
            }
        },
        right: {
            value: 9,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: {
                value: 11,
                left: null,
                right: null
            }
        }
    }
*/
