const strLength = 7;
const strList = [
  'bbbbbbb',
  'aabcdef',
  'aabbcde',
  'bcccccc',
  'caaaaab',
  'caaaaaa',
  'abcdefg',
  'dcbadcb',
  'daaaaaa',
  'ddddddd',
  'dddddda',
];

// for (let i = 0; i < strLength; i++) {
//   strList.sort((a: string, b: string) => {
//     // console.log(
//     //   a.substring(0, i),
//     //   b.substring(0, i),
//     //   a,
//     //   b,
//     //   a.charCodeAt(i) - b.charCodeAt(i),
//     //   a.substring(0, i) !== b.substring(0, i) ? 0 : a.charCodeAt(i) - b.charCodeAt(i),
//     // );
//     return a.substring(0, i) !== b.substring(0, i) ? -1 : a.charCodeAt(i) - b.charCodeAt(i);
//   });
//   console.log(strList);
// }

console.log(strList.sort());
