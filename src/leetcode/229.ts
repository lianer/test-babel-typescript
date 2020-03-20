/*
求众数 II

给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。

示例 1:
输入: [3,2,3]
输出: [3]

示例 2:
输入: [1,1,1,3,3,2,2,2]
输出: [1,2]
*/

/*
### 解题思路

1. 基于投票算法
2. 选出投票数大于 1/3 的人，那最多只可能有 2 人，我们分别用 A 和 B 来表示他们
3. 初始将下标为 0 的元素设为 A 和 B，然后开始遍历，有如下情况：
  1. 投票给 A（即等于 A），则 countA++
  2. 投票给 B（即等于 B），则 countB++
  3. 既不投给 A，也不投给 B（即不等于 A 也不等于 B），则 countA-- countB--，并检查票数是否为 0
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function(nums: number[]) {
  if (nums.length < 2) {
    return nums;
  }
  let candidateA = nums[0];
  let candidateB = nums[0];
  let countA = 0;
  let countB = 0;

  for (let i = 0; i < nums.length; i++) {
    // nums: [1, 1, 1, 3, 3, 2, 2, 2]
    //
    // i | candidateA | countA | candidateB | countB
    // -----------------------------------------------
    // 0  candidateA=1 countA=1
    // 1  candidateA=1 countA=2
    // 2  candidateA=1 countA=3
    // 3  candidateA=1 countA=3  candidateB=3 countB=1
    // 4  candidateA=1 countA=3  candidateB=3 countB=2
    // 5  candidateA=1 countA=2  candidateB=3 countB=1
    // 6  candidateA=1 countA=1  candidateB=3 countB=0
    // 7  candidateA=1 countA=1  candidateB=2 countB=1
    //
    const num = nums[i];
    if (num === candidateA) {
      countA++;
      continue;
    }
    if (num === candidateB) {
      countB++;
      continue;
    }

    if (countA === 0) {
      candidateA = num;
      countA++;
      continue;
    }
    if (countB === 0) {
      candidateB = num;
      countB++;
      continue;
    }

    countA--;
    countB--;
  }

  countA = countB = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === candidateA) {
      countA++;
    } else if (num === candidateB) {
      countB++;
    }
  }

  const res: number[] = [];
  if (countA > nums.length / 3) {
    res.push(candidateA);
  }
  if (countB > nums.length / 3) {
    res.push(candidateB);
  }

  return res;
};

console.log(majorityElement([3, 2, 3]), [3]);
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]), [1, 2]);

export { majorityElement };
