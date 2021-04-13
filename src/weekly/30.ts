/*
算法第三十题 - 拼写单词
给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。

返回词汇表 words 中你掌握的所有单词的长度之和。

示例 1：
输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释：可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。

示例 2：
输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10
解释：可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
*/

interface CharsMap {
  [char: string]: number;
}

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words: string[], chars: string): number {
  /**
   * 1. chars 字母统计（借助 CharsMap 储存字母出现的次数）
   * 2. words 单词匹配（每次匹配过程中，chars 中每个字母只能使用一次）
   */

  let cnt = 0;
  const charsMap: CharsMap = {};

  // Step 1: 统计字母表中每个字母的个数
  for (const char of chars) {
    charsMap[char] = ~~charsMap[char] + 1;
  }

  // Step 2: 对每个单词进行匹配
  loopWords: for (const word of words) {
    const _charsMap: CharsMap = {};

    for (const char of word) {
      _charsMap[char] = ~~_charsMap[char] + 1;
      if (_charsMap[char] > ~~charsMap[char]) continue loopWords;
    }

    // Step 4: 将匹配成功的单词计入总数
    cnt += word.length;
  }

  return cnt;
};

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'), 6);
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'), 10);
