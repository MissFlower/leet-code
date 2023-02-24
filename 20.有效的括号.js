/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s.length || s.length % 2 !== 0) {
    return false
  }
  const map = {
    ")": "(",
    "}": "{",
    "]": "["
  }
// "{[]}" ()[]{}
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    if (!map[element]) {
      stack.push(element)
      continue
    }
    if (!(map[element] && map[element] === stack.pop())) {
      return false
    }
  }

  return !stack.length
};
// @lc code=end

