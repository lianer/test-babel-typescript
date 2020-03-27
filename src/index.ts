const map: Map<number, string> = new Map();

map.set(1, '1');
map.set(2, '2');

// Map 使用迭代器进行遍历，因此在遍历的过程中，如果持续往 Map 实例上插入新的元素，那么会导致 Map 遍历发生死循环
// map.forEach((val, key) => {
//   map.set((key *= 2), String((key *= 2)));
//   map.delete(key);
// });

for (let key of map.keys()) {
  map.set((key *= 2), String((key *= 2)));
  map.delete(key);
}

console.log(map);

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity;

let b: string | number = 1;
function change() {
  b = '2';
}
change();
const a: number = identity(b);
