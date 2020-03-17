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
  private name = '';
  public W = 0;
  public D = 0;
  public L = 0;
  public GP = 0;
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

const map: Map = {};

input.forEach(GamePlayed => {
  const [homeGameName, roadJerseyName, result] = GamePlayed.split(';');
  const homeGame: Team = map[homeGameName] || (map[homeGameName] = new Team(homeGameName));
  const roadJersey: Team = map[roadJerseyName] || (map[roadJerseyName] = new Team(roadJerseyName));

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

const printMap: PrintMap = {};
Object.keys(map).forEach(teamName => {
  const team = map[teamName];
  const { GP, W, D, L } = team;
  printMap[teamName] = { GP, W, D, L, P: team.getPoints() };
});

console.table(printMap);

export default {};
