"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (val === void 0) { val = null; }
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
var genListNodeFromArr = function (arr) {
    var head = new ListNode(arr[0]);
    var cur = head;
    arr.slice(1).forEach(function (val) {
        cur.next = new ListNode(val);
        cur = cur.next;
    });
    return head;
};
exports.genListNodeFromArr = genListNodeFromArr;
exports.default = ListNode;
