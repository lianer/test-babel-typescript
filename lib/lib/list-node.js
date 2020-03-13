"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}
const genListNodeFromArr = (arr) => {
    let head = new ListNode(arr[0]);
    let cur = head;
    arr.slice(1).forEach(val => {
        cur.next = new ListNode(val);
        cur = cur.next;
    });
    return head;
};
exports.genListNodeFromArr = genListNodeFromArr;
exports.default = ListNode;
