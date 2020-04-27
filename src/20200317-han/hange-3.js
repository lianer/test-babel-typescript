const input = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  // { id: 8, name: 'i8', parentId: 7 },
];

// run
function genTree(arr) {
  const keyMap = Object.create(null);
  const queueMap = Object.create(null);
  const roots = [];
  arr.forEach(item => {
    item.children = [];
    // 子节点
    if (item.parentId) {
      let parent = keyMap[item.parentId];
      if (parent) {
        // 释放队列
        flushQueue(item, keyMap, queueMap);
        parent.children.push(item);
        item.inserted = true;
      } else {
        // 计入队列
        if (queueMap[item.parentId]) {
          queueMap[item.parentId].push(item);
        } else {
          queueMap[item.parentId] = [item];
        }
      }
    } else {
      // 根节点
      keyMap[item.id] = item;
      roots.push(item);
      item.inserted = true;
    }
  });
  const notInsertedElms = arr.filter(v => !v.inserted);
  if (notInsertedElms.length !== 0) {
    throw new Error('fail: 存在元素无法插入到树结构中');
  }
  return roots;
}

// 清空队列
function flushQueue(item, keyMap, queueMap) {
  const children = queueMap[item.id];
  keyMap[item.id] = item;
  if (children) {
    delete queueMap[item.id];
    children.forEach(ch => {
      ch.inserted = true;
      flushQueue(ch, keyMap, queueMap);
    });
    item.children = children;
  }
}

// 递归 时间复杂度O^2
// 每个元素都要遍历整个数组去查询其子节点
function genTree2(source, parentId) {
  const trees = [];
  source.forEach(item => {
    if (item.parentId === parentId) {
      item.children = genTree2(source, item.id);
      trees.push(item);
      item.inserted = true;
    }
  });
  const notInsertedElms = source.filter(v => !v.inserted);
  if (notInsertedElms.length !== 0) {
    throw new Error('fail: 存在元素无法插入到树结构中');
  }
  return trees;
}
