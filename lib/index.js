"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var map = new Map();
map.set(1, '1');
map.set(2, '2');
try {
    // Map 使用迭代器进行遍历，因此在遍历的过程中，如果持续往 Map 实例上插入新的元素，那么会导致 Map 遍历发生死循环
    // map.forEach((val, key) => {
    //   map.set((key *= 2), String((key *= 2)));
    //   map.delete(key);
    // });
    for (var _b = __values(map.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        map.set((key *= 2), String((key *= 2)));
        map.delete(key);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log(map);
