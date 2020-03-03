"use strict";
// 动态规划
Object.defineProperty(exports, "__esModule", { value: true });
var bagSize = 4;
var list = [
    {
        name: 'guitar',
        size: 1,
        price: 1500,
    },
    {
        name: 'sound',
        size: 4,
        price: 3000,
    },
    {
        name: 'laptop',
        size: 3,
        price: 2000,
    },
    {
        name: 'phone',
        size: 1,
        price: 2000,
    },
    {
        name: 'mp3',
        size: 1,
        price: 1000,
    },
];
var dp = function (bagSize, list) {
    var _a;
    var grid = [];
    for (var row = 0; row < list.length; row++) {
        var item = list[row];
        grid[row] = [];
        var _rowMessage = [];
        for (var col = 0; col < bagSize; col++) {
            // 动态背包尺寸
            var dpSize = col + 1;
            if (row > 0) {
                var lastCellValue = grid[row - 1][col];
                var currentCellValue = void 0;
                // 如果动态背包尺寸大于商品尺寸，那么就需要计算商品价格 + 剩余最大可装的商品价格（即：grid[row - 1][dpSize - item.size - 1]）
                // 如果动态背包尺寸等于商品尺寸，那么就等于商品价格
                // 如果动态背包尺寸小于商品尺寸，那么就等于 0
                if (dpSize > item.size) {
                    currentCellValue = item.price + grid[row - 1][dpSize - item.size - 1];
                }
                else if (dpSize === item.size) {
                    currentCellValue = item.price;
                }
                else {
                    currentCellValue = 0;
                }
                // 计算完此单元格可容纳的商品的总价之后，再与上一个单元格（即：grid[row - 1][col]）进行比较，取价格较大的那个
                grid[row][col] = Math.max(lastCellValue, currentCellValue);
            }
            else {
                // 第一个商品处理比较简单，放的进去那就是商品价格，放不进去那就是 0
                if (dpSize >= item.size) {
                    grid[row][col] = item.price;
                }
                else {
                    grid[row][col] = 0;
                }
            }
            _rowMessage.push(grid[row][col]);
        }
        console.log(_rowMessage);
    }
    return (_a = grid.pop()) === null || _a === void 0 ? void 0 : _a.pop();
};
exports.dp = dp;
var result = dp(bagSize, list);
console.log(result);
