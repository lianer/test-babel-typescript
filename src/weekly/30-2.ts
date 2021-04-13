interface CharsMap {
  [char: string]: number;
}

const countCharacters2 = function(words: string[], chars: string): number {
  let cnt = 0;
  const charsMap: CharsMap = {};
  for (const char of chars) charsMap[char] = ~~charsMap[char] + 1;
  loopWords: for (const word of words) {
    const _charsMap: CharsMap = {};
    for (const char of word) {
      _charsMap[char] = ~~_charsMap[char] + 1;
      if (_charsMap[char] > ~~charsMap[char]) continue loopWords;
    }
    cnt += word.length;
  }
  return cnt;
};

console.log(countCharacters2(['cat', 'bt', 'hat', 'tree'], 'atach'), 6);
console.log(countCharacters2(['hello', 'world', 'leetcode'], 'welldonehoneyr'), 10);
