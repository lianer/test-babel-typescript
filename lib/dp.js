"use strict";
// 动态规划
Object.defineProperty(exports, "__esModule", { value: true });
const bagSize = 4;
const list = [
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
const dp = function (bagSize, list) {
    let grid = [];
    for (let row = 0; row < list.length; row++) {
        let item = list[row];
        grid[row] = [];
        let _rowMessage = [];
        for (let col = 0; col < bagSize; col++) {
            // 动态背包尺寸
            let dpSize = col + 1;
            if (row > 0) {
                let lastCellValue = grid[row - 1][col];
                let currentCellValue;
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
    return grid.pop()?.pop();
};
exports.dp = dp;
let result = dp(bagSize, list);
console.log(result);
