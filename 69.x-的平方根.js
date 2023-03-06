/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let s = 0
  let l = x
  let m
  while (s <= l) {
    m = Math.ceil((s + l) / 2)
    const r = m * m

    if (r === x) {
      return m
    }

    if (r < x) {
      s = m
    } else if(r > x) {
      l = m
    }

    if(l-s === 1) {
        return s
    }
  }

  return l
};
// @lc code=end

