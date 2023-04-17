/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const res = []
  while (columnNumber !== 0) {
    columnNumber--
    res.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt(0)))
    columnNumber = Math.floor(columnNumber / 26)
  }

  return res.reverse().join('')
};
// @lc code=end

