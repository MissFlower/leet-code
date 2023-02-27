/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let res = ''
  for (let i = s.length - 1; i >= 0; i--) {
    const element = s[i];
    if (element === ' ' && res !== '') {
      return res.length
    } else if (element !== ' ') {
      res += element
    }
  }

  return res.length
};
// @lc code=end

