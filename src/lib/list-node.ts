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

export { genListNodeFromArr };
export default ListNode;
