"use strict";
/**
 * 根据世界杯比赛场次生成统计看板
 * 题解：
 * 1. 遍历比赛场次
 * 2. 解析字符表达式
 * 3. 生成队伍，并记录 W, D, L 场次
 * 4. 计算各个队伍的 Points
 * 5. 格式化打印看板
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var input = ['A;B;win', 'A;C;win', 'B;C;loss', 'C;D;loss', 'B;D;draw'];
var Team = /** @class */ (function () {
    function Team(name) {
        this.name = '';
        this.W = 0;
        this.D = 0;
        this.L = 0;
        this.GP = 0;
        this.name = name;
    }
    Team.prototype.win = function () {
        this.W++;
        this.GP++;
    };
    Team.prototype.draws = function () {
        this.D++;
        this.GP++;
    };
    Team.prototype.losess = function () {
        this.L++;
        this.GP++;
    };
    Team.prototype.getPoints = function () {
        return this.W * 3 + this.L;
    };
    return Team;
}());
var map = {};
input.forEach(function (GamePlayed) {
    var _a = __read(GamePlayed.split(';'), 3), homeGameName = _a[0], roadJerseyName = _a[1], result = _a[2];
    var homeGame = map[homeGameName] || (map[homeGameName] = new Team(homeGameName));
    var roadJersey = map[roadJerseyName] || (map[roadJerseyName] = new Team(roadJerseyName));
    if (result === 'win') {
        homeGame.win();
        roadJersey.losess();
    }
    else if (result === 'draw') {
        homeGame.draws();
        roadJersey.draws();
    }
    else {
        homeGame.losess();
        roadJersey.win();
    }
});
var printMap = {};
Object.keys(map).forEach(function (teamName) {
    var team = map[teamName];
    var GP = team.GP, W = team.W, D = team.D, L = team.L;
    printMap[teamName] = { GP: GP, W: W, D: D, L: L, P: team.getPoints() };
});
console.table(printMap);
exports.default = {};
