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

import { genListNodeFromArr, getTail } from '../lib/list-node';

interface ListNode {
  val: any;
  next: ListNode | null;
}

// 获取交叉点
var getIntersect = function(head: ListNode) {
  if (head === null || head.next === null) return null;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = (slow as ListNode).next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }

  return null;
};

// 方法二：Floyd
var detectCycle = function(head: ListNode | null) {
  if (head === null) return null;
  const intersect = getIntersect(head); // 获取交叉点
  console.log('\n交叉点：\n', intersect);
  if (intersect === null) return null;

  let result = 0;
  let point1: ListNode = head;
  let point2: ListNode = intersect;
  while (point1 !== point2) {
    result++;
    point1 = point1.next as ListNode; // 有环则 next 必定为 ListNode
    point2 = point2.next as ListNode; // 有环则 next 必定为 ListNode
  }
  return result;
};

const head = genListNodeFromArr([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]);
console.log('\n链表：\n', JSON.stringify(head));
const tail = getTail(head);
(tail as ListNode).next = ((head.next as ListNode).next as ListNode).next;

console.log('\n结果：\n', detectCycle(head), 3);

export {};
