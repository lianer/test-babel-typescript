/**
 * 根据输入的数组中每项的 before/after/first/last 规则，输出一个新排好序的数组或者链表
 * 题解：
 * 1. 这是一个典型的链表关系的数据结构
 * 2. 先使用原始数组构造一个链表，因为后面步骤需要调整链表元素的位置，因此这个链表不仅有 next 属性，还有个 prev 属性，两个相邻的链表元素做双向关联
 * 3. 为了方便根据 id 找到列表元素，将元素都加入新数组 map 中
 * 4. 为了方便链表元素的移动（尤其是应用 before, after 规则），在链表的头部和尾部都增加一个空元素 => first -> 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> 8 -> 9 -> last
 * 5. 遍历数组 map，根据 before/after/first/last 规则调整元素在链表中的位置，生成最终的链表
 * 6. 遍历第5步生成的链表，核对 before/after/first/last 的合法性
 */

interface item {
  id: number;
  before?: number;
  after?: number;
  first?: boolean;
  last?: boolean;
}

interface map {
  [key: number]: List;
}

// 根据输入的数组中每项的 before/after/first/last 规则，输出一个新排好序的数组或者链表。要求，多解的情况可以只求一解，如果无解要求程序能检测出来。
const input: item[] = [
  { id: 1 },
  { id: 2, before: 1 },
  { id: 3, after: 1 },
  { id: 5, first: true },
  { id: 6, last: true },
  { id: 7, after: 8 },
  { id: 8, after: 8 }, // 一个冲突的元素
  { id: 9 },
];

// 链表
class List {
  public val: item | undefined;
  public next: List | undefined;
  public prev: List | undefined;
  constructor(val?: item, next?: List, prev?: List) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

// 连接两个元素
const concat = (prev: List, next: List) => {
  prev.next = next;
  next.prev = prev;
};

// 从链表中提取元素
const extract = (list: List) => {
  list.prev && (list.prev.next = list.next);
  list.next && (list.next.prev = list.prev);
};

// 将提取的元素移至 target 之前
const moveBefore = (list: List, target: List) => {
  extract(list);
  list.prev = target.prev;
  list.next = target;
  list.prev && (list.prev.next = list);
  list.next && (list.next.prev = list);
};

// 将提取的元素移至 target 之后
const moveAfter = (list: List, target: List) => {
  extract(list);
  list.prev = target;
  list.next = target.next;
  list.prev && (list.prev.next = list);
  list.next && (list.next.prev = list);
};

const first = new List();
const last = new List();
let temp = first;
const map: map = {};

// 使用初始顺序初始化链表 => first -> 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> 8 -> 9 -> last
input.forEach(item => {
  concat(temp, (map[item.id] = new List(item)));
  temp.next && (temp = temp.next);
});
concat(temp, last);

// 遍历链表，调整元素顺序
input.forEach(item => {
  const list = map[item.id];
  if (item.before) {
    const target = map[item.before];
    extract(list);
    moveBefore(list, target);
  } else if (item.after) {
    const target = map[item.after];
    extract(list);
    moveAfter(list, target);
  } else if (item.first) {
    extract(list);
    moveAfter(list, first);
  } else if (item.last) {
    extract(list);
    moveBefore(list, last);
  }
});

const result = [];
let cur = first;
let count = 0;
const maxTimes = 1000;

while (cur.next && count <= maxTimes) {
  count++;
  cur = cur.next;

  // 链表有效性校验
  if (cur.val?.first) {
    if (cur.prev?.val !== void 0) {
      console.error('Duplicated first item');
    }
  } else if (cur.val?.last) {
    if (cur.next?.val !== void 0) {
      console.error('Duplicated last item');
    }
  } else if (cur.val?.before) {
    if (cur.next?.val?.id !== cur.val?.before) {
      console.error('Error item', cur.val);
    }
  } else if (cur.val?.after) {
    if (cur.prev?.val?.id !== cur.val?.after) {
      console.error('Error item', cur.val);
    }
  }

  if (cur.next) {
    result.push(cur.val);
  }
}

console.log('Result: ', result);

export default {};
