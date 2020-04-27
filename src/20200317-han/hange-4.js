const stores = [
  [1, 2],
  [5, 3],
  [3, 1],
  [1, 2],
  [2, 4],
  [1, 6],
  [2, 3],
  [3, 4],
  [5, 6],
];

// run
console.log(genChains(stores));

function genChains(stores, prefix = []) {
  const map = Object.create(null);
  let result = [];
  const prefixLen = prefix.length;
  const storeLen = stores.length;
  // debugger
  stores.forEach((item, index) => {
    const key = JSON.stringify(item);
    // prevent repeat computed
    if (!map[key]) {
      map[key] = true;
      if (prefixLen) {
        const lastItem = prefix[prefixLen - 1];
        // 符合衔接
        if (lastItem[1] === item[0]) {
          const newPrefix = [...prefix, item];
          const newStores = [...stores.slice(0, index), ...stores.slice(index + 1, storeLen)];
          // 符合输出结果
          matchRule(newPrefix) && result.push(newPrefix);
          const subResult = genChains(newStores, newPrefix);
          result = [...result, ...subResult];
        }
      } else {
        // 顶层循环
        const newPrefix = [...prefix, item];
        const newStores = [...stores.slice(0, index), ...stores.slice(index + 1, storeLen)];
        const subResult = genChains(newStores, newPrefix);
        result = [...result, ...subResult];
      }
    }
  });
  return result;
}

function matchRule(arr) {
  const len = arr.length;
  if (len < 2) return;
  const first = arr[0][0];
  const last = arr[len - 1][1];
  if (first !== last) return false;
  if (arr[len - 2][1] !== arr[len - 1][0]) return false;
  return true;
}
