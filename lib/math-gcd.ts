// 最大公约数 - 辗转相除法
export default function gcd(a: number, b: number) {
  // 18, 12
  // 12, 6
  // 6, 6
  // 6, 0
  let c = 0;
  while (b > 0) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
}

// console.log(gcd(9, 3));
// console.log(gcd(12, 8));
