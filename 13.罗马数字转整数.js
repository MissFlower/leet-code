/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let res = 0
  for (let i = 0; i < s.length; i++) {
    const cur = s.charAt(i);
    const next = s.charAt(i + 1);
    if (map[`${cur}${next}`]) {
      res += map[`${cur}${next}`]
      i++
      continue
    }
    res += map[cur]
  }
  return res
};

var romanToInt1 = function(s) {
  let pre = getValue(s.charAt(0))
  let res = 0
  for (let i = 1; i < s.length; i++) {
    const cur = getValue(s.charAt(i));
    if (cur > pre) {
      // 做减法
      res -= pre
    } else {
      res += pre
    }
    pre = cur
  }
  res += pre
  return res
}

function getValue(char) {
  switch(char) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return 0;
  }
}
// @lc code=end

