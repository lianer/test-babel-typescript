/**
 * Create Tree from flat data
 * 题解：
 * 1. 将 input 的元素都取出，以 id 为 key 转成 map
 * 2. 使用 filter 遍历 input，将有 parentId 的元素过滤掉，得到第一级 tree
 * 3. 对于有 parentId 的元素，通过 map 快速的找到对应的父元素，并插入到 children 当中
 * 4. 利用 Object 对象指针引用的特点，即可直接得到 tree 结构的数据
 */

interface Item {
  id: number;
  name: string;
  parentId?: number;
  children?: Item[];
}

interface Map {
  [key: number]: Item;
}

const input: Item[] = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 8, name: 'i8', parentId: 7 },
];

const map: Map = {};

input.forEach(item => (map[item.id] = item));

const result = input.filter(item => {
  if (item.parentId) {
    const parent = map[item.parentId];
    if (parent) {
      parent.children ? parent.children.push(item) : (parent.children = [item]);
    } else {
      console.warn('The element cannot be inserted into the tree');
    }
    return false;
  }
  return item.parentId === void 0;
});

console.log(JSON.stringify(result));

export default {};
