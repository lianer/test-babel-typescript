/**
有环的链表

给定一个链表，如果它是有环链表，实现一个算法返回环路的开头节点。
有环链表的定义：在链表中某个节点的next元素指向在它前面出现过的节点，
则表明该链表存在环路。

潘多拉对对象的循环应用存在问题，这题大家可以 vscode 去做


示例 1：

输入：head = [3,2,0,-4], pos = 1

数组其实表示的是链表的结构

ListNode {
  val: 3,
  next: ListNode { val: 2, next: ListNode { val: 0, next: [ListNode] } }
}

const head = {
  val: 3,
  next: {
      val: 2,
      next: {
          val: 0,
          next: head
      }
  }
}

输出：tail connects to node index 1
解释：链表中有一个环，其尾部连接到第二个节点。
 

示例 2：

输入：head = [1,2], pos = 0
输出：tail connects to node index 0
解释：链表中有一个环，其尾部连接到第一个节点。
 

示例 3：

输入：head = [1], pos = -1
输出：no cycle
解释：链表中没有环。
 

进阶：
你是否可以不用额外空间解决此题？


提示：
这个问题实际上可以分为两个部分。首先，检测链表是否有循环。第二，找出循环开始的位置。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

interface List {
  val: any;
  next: List | null;
}

/**
 * 方法一：借助 map 记录下标
 */
var detectCycle = function(head: List | null) {
  const map = new Map<List, number>();
  let index = 0;
  while (head) {
    if (map.has(head)) return map.get(head);
    map.set(head, index++); // 储存下标
    head = head.next;
  }
  return -1;
};

{
  // 这是一个有环的链表
  const head: List = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 0,
        next: null,
      },
    },
  };

  (head.next as List).next = head;

  // 因为环链接到了头部节点，返回索引0
  console.log(detectCycle(head), 0);
}

{
  // 这是一个无环的链表
  const head = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 0,
        next: null,
      },
    },
  };

  console.log(detectCycle(head), -1);
}

{
  // 这是一个有环的链表
  const head = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 0,
        next: null,
      },
    },
  };

  (head.next as List).next = head.next;

  // 因为环链接到了第二个节点，返回索引1
  console.log(detectCycle(head), 1);
}

export {};
