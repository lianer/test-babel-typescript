// 根据输入的数组中每项的 before/after/first/last 规则，输出一个新排好序的数组或者链表。要求，多解的情况可以只求一解，如果无解要求程序能检测出来。
const input = [
  { id: 1 },
  { id: 2, before: 1 },
  { id: 3, after: 1 },
  { id: 5, first: true },
  { id: 6, last: true },
  { id: 7, after: 8 },
  { id: 8 },
  { id: 9 },
];

// run
console.log(genResult(input));

function genResult(params) {
  const sortArr = [];
  const sortMap = Object.create(null);
  const { newArrMap, dependMap } = genQueueAndArr(params);
  let first = null;
  let last = null;
  Object.values(newArrMap).forEach(newItem => {
    const key = newItem.id;
    // item 是首项目
    if (newItem.first) {
      if (newItem.after.length > 0) {
        throw new Error(`fail: 无法满足${item.id}为首位`);
      } else {
        if (first) {
          throw new Error(`fail: 存在多个first`);
        }
        first = newItem;
      }
    }
    if (newItem.last) {
      if (last) {
        throw new Error(`fail: 存在多个last`);
      }
      last = newItem;
    }
    // 普通元素
    if (!newItem.first && !newItem.last) {
      // 无依赖的情况下直接push
      if (newItem.after.length === 0) {
        if (!sortMap[key]) {
          sortArr.push(newItem.v);
          sortMap[key] = true;
          const dep = dependMap[key];
          flushDep(sortMap, sortArr, dep, dependMap);
        }
      } else {
        flushDep(sortMap, sortArr, [newItem], dependMap);
      }
    }
  });
  if (first) {
    sortArr.unshift(first.v);
    sortMap[first.id] = true;
    const dep = dependMap[first.id];
    flushDep(sortMap, sortArr, dep, dependMap);
  }
  if (last) {
    sortArr.push(last.v);
    sortMap[last.id] = true;
  }

  return sortArr;
}

function flushDep(sortMap, sortArr, dep = [], dependMap) {
  dep.forEach(item => {
    if (canPush(sortMap, item)) {
      if (!sortMap[item.id]) {
        sortArr.push(item.v);
        sortMap[item.id] = true;
        const dep = dependMap[item.id];
        flushDep(sortMap, sortArr, dep, dependMap);
      }
    }
  });
}

// 判断是否允许push，当所有after中的依赖项已经存在时，可直接进行push操作
function canPush(sortMap, item) {
  let dep = item.after;
  for (let i = 0; i < dep.length; i++) {
    let key = dep[i];
    if (!sortMap[key]) {
      return false;
    }
  }
  return true;
}

// 生成前置依赖
// const newArrMap = {
//   1: { id: 1, first: false, last: false, after: [], v: { id: 1, before: 2 } },
//   2: { id: 2, first: false, last: false, after: [1, 4], v: { id: 2 } },
//   3: { id: 3, first: false, last: false, after: [2], v: { id: 3, after: 2 } },
//   4: { id: 4, first: false, last: false, after: [], v: { id: 4, before: 2 } }
// }

// const dependMap = {
//   1: [{ id: 2, first: false, last: false, after: [1, 4], v: { id: 2 } }],
//   2: [{ id: 3, first: false, last: false, after: [2], v: { id: 3, after: 2 } }],
//   4: [{ id: 2, first: false, last: false, after: [1, 4], v: { id: 2 } }]
// }
function genQueueAndArr(params) {
  const dependMap = Object.create(null);
  const newArrMap = Object.create(null);
  const queue = Object.create(null);

  params.forEach(item => {
    const newItem = {
      id: item.id,
      v: item,
      after: queue[item.id] || [],
      first: !!item.first,
      last: !!item.last,
    };
    // 出队
    delete queue[item.id];

    newItem.after.forEach(sub => {
      if (dependMap[sub]) {
        dependMap[sub].push(newItem);
      } else {
        dependMap[sub] = [newItem];
      }
    });

    if (item.after !== undefined) {
      // { id: 1, after: 2 }
      if (dependMap[item.after]) {
        dependMap[item.after].push(newItem);
      } else {
        dependMap[item.after] = [newItem];
      }
      newItem.after.push(item.after);
    } else if (item.before !== undefined) {
      const target = newArrMap[item.before];
      // 目标已经存在
      if (target) {
        if (dependMap[item.id]) {
          dependMap[item.id].push(target);
        } else {
          dependMap[item.id] = [target];
        }
        target.after.push(item.id);
      } else {
        // 入队
        queue[item.before] = queue[item.before] || [];
        queue[item.before].push(item.id);
      }
    }
    newArrMap[item.id] = newItem;
    // 如果队列长度不为一，说明存缺少依赖项目或存在循环关系
    if (Object.keys(queue).length) {
      throw new Error('fail: 缺少依赖项目或存在循环关系');
    }
  });
  return {
    newArrMap,
    dependMap,
  };
}
