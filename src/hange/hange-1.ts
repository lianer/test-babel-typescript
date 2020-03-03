/**
 * 根据世界杯比赛场次生成统计看板
 * 题解：
 * 1. 遍历比赛场次
 * 2. 解析字符表达式
 * 3. 生成队伍，并记录 W, D, L 场次
 * 4. 计算各个队伍的 Points
 * 5. 格式化打印看板
 */

interface Map {
  [teamName: string]: Team;
}

interface PrintTeam {
  GP: number;
  W: number;
  D: number;
  L: number;
  P: number;
}

interface PrintMap {
  [teamName: string]: PrintTeam;
}

const input: string[] = ['A;B;win', 'A;C;win', 'B;C;loss', 'C;D;loss', 'B;D;draw'];

class Team {
  private name: string = '';
  public W: number = 0;
  public D: number = 0;
  public L: number = 0;
  public GP: number = 0;
  constructor(name: string) {
    this.name = name;
  }
  win() {
    this.W++;
    this.GP++;
  }
  draws() {
    this.D++;
    this.GP++;
  }
  losess() {
    this.L++;
    this.GP++;
  }
  getPoints(): number {
    return this.W * 3 + this.L;
  }
}

let map: Map = {};

input.forEach(GamePlayed => {
  let [homeGameName, roadJerseyName, result] = GamePlayed.split(';');
  let homeGame: Team = map[homeGameName] || (map[homeGameName] = new Team(homeGameName));
  let roadJersey: Team = map[roadJerseyName] || (map[roadJerseyName] = new Team(roadJerseyName));

  if (result === 'win') {
    homeGame.win();
    roadJersey.losess();
  } else if (result === 'draw') {
    homeGame.draws();
    roadJersey.draws();
  } else {
    homeGame.losess();
    roadJersey.win();
  }
});

let printMap: PrintMap = {};
Object.keys(map).forEach(teamName => {
  let team = map[teamName];
  let { GP, W, D, L } = team;
  printMap[teamName] = { GP, W, D, L, P: team.getPoints() };
});

console.table(printMap);

export default {};
