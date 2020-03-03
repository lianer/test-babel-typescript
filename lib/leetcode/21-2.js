"use strict";
/*
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
var node3 = new ListNode(4);
var node2 = new ListNode(2, node3);
var node1 = new ListNode(1, node2);
var list1 = node1; // 1 -> 2 -> 4
var node6 = new ListNode(4);
var node5 = new ListNode(3, node6);
var node4 = new ListNode(1, node5);
var list2 = node4; // 1 -> 3 -> 4
/**
 * 【方案二：递归1】
 * 与方案三同样是递归，但这种写法得到的执行用时更短
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var head = new ListNode(null);
    var getNext = function (l1, l2, cur) {
        if (l1 && l2) {
            if (l1.val > l2.val) {
                cur.next = l2;
                getNext(l1, l2.next, cur.next);
            }
            else {
                cur.next = l1;
                getNext(l1.next, l2, cur.next);
            }
        }
        else if (l1 === null) {
            cur.next = l2;
        }
        else {
            cur.next = l1;
        }
    };
    getNext(l1, l2, head);
    return head.next;
};
console.log(JSON.stringify(mergeTwoLists(list1, list2)));
exports.default = { mergeTwoLists: mergeTwoLists };
