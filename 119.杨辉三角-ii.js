/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const ret = []
  for (let i = 0; i <= rowIndex; i++) {
    const res = new Array(i + 1).fill(1)
    
    for (let j = 1; j < i; j++) {
      res[j] = ret[i - 1][j - 1] + ret[i - 1][j]
    }

    ret.push(res)
  }

  return ret[rowIndex]
};
// @lc code=end

