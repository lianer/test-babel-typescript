/*
2020-03-26 Create Tree from flat data

const input: Item[] = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
];

{
  id: 1,
  name: 'i1',
  children: {
    id: 2,
    name: 'i2',
    children: {
      id: 3,
      name: 'i3',
      children: {
        id: 4,
        name: 'i4',
      }
    }
  }
}

待准备
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
