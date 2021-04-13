class ListNode {
  public val: any;
  public next: ListNode | null;
  constructor(val: any = null, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const genListNodeFromArr = (arr: any[]) => {
  const head: ListNode = new ListNode(arr[0]);
  let cur = head;
  arr.slice(1).forEach(val => {
    cur.next = new ListNode(val);
    cur = cur.next;
  });
  return head;
};

/**
 * 获取交叉点
 */
const getIntersect = function(head: ListNode) {
  if (head === null || head.next === null) return null;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast !== null && fast.next !== null) {
    slow = (slow as ListNode).next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }

  return null;
};

/**
 * 获取最后一个元素
 */
const getTail = function(head: ListNode) {
  if (getIntersect(head)) return null;
  while (true) {
    if (head.next === null) return head;
    head = head.next;
  }
};

export { genListNodeFromArr, getIntersect, getTail };
export default ListNode;
