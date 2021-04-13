/*
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import ListNode, { genListNodeFromArr } from '../lib/list-node';

const head: ListNode | null = genListNodeFromArr([1, 2, 3, 4, 5, null]);

console.log(JSON.stringify(head));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  const next = head.next;
  if (next) {
    // 解除原来的链表关系
    head.next = null;

    // 递归将最底部的节点抛出来
    // 可以把递归想象成一颗洋葱，这里是洋葱的中心，上面的代码会先遍历整个链表至底部，然后下面的代码会反过来从底部开始遍历至顶部
    const newHead = reverseList(next);

    // 交换顺序，建立新的链表关系
    next.next = head;

    // 递归将最底部的节点抛出来
    return newHead;
  } else {
    // 递归将最底部的节点抛出来
    return head;
  }
};

// head = null;
const newHead: ListNode | null = reverseList(head);
console.log(JSON.stringify(newHead));
