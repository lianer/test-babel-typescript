const input = ['A;B;win', 'A;C;win', 'B;C;loss', 'C;D;loss', 'B;D;draw'];

// run
genTournament(input);

function genTournament(input) {
  const resMap = Object.create(null);
  const arr = [];
  let maxLenName = 4;
  input.forEach(item => {
    const info = item.split(';');
    const homeName = info[0];
    const awayGroundName = info[1];
    const res = info[2];
    maxLenName = maxLenName > homeName.length ? maxLenName : homeName.length;
    maxLenName = maxLenName > awayGroundName.length ? maxLenName : awayGroundName.length;
    if (!resMap[homeName]) {
      resMap[homeName] = {
        win: 0,
        loss: 0,
        draw: 0,
        score: 0,
        name: homeName,
      };
      arr.push(resMap[homeName]);
    }
    if (!resMap[awayGroundName]) {
      resMap[awayGroundName] = {
        win: 0,
        loss: 0,
        draw: 0,
        score: 0,
        name: awayGroundName,
      };
      arr.push(resMap[awayGroundName]);
    }
    const homeTeam = resMap[homeName];
    const awayGroundTeam = resMap[awayGroundName];

    if (res === 'win') {
      homeTeam.win += 1;
      homeTeam.score += 3;
      awayGroundTeam.loss += 1;
    } else if (res === 'loss') {
      homeTeam.loss += 1;
      awayGroundTeam.win += 1;
      awayGroundTeam.score += 3;
    } else if (res === 'draw') {
      homeTeam.draw += 1;
      homeTeam.score += 1;
      awayGroundTeam.draw += 1;
      awayGroundTeam.score += 1;
    } else {
      console.warn(`WARN: 输入信息错误 ${item}`);
    }
  });
  const sortArr = arr.sort((a, b) => b.score - a.score);
  let outputStr = `${wrapName('Team', maxLenName)} | MP |  W |  D |  L |  P\n`;
  sortArr.forEach(v => {
    const { name, win, draw, loss, score } = v;
    const mp = win + draw + loss;
    outputStr += `${wrapName(name, maxLenName)} | ${wrapOther(mp)} | ${wrapOther(win)} | ${wrapOther(
      draw,
    )} | ${wrapOther(loss)} | ${wrapOther(score)} \n`;
  });
  console.log(outputStr);
}

function wrapName(name, maxLenName) {
  let space = maxLenName - name.length;
  while (space) {
    name += ' ';
    space--;
  }
  return name;
}

function wrapOther(v) {
  return v > 9 ? v : ` ${v}`;
}
