/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // const s = x.toString()
  // let l = 0
  // let r = s.length - 1
  // while(l <= r) { 
  //     if(x[l] !== x[r]) return false;
  //     l++;
  //     r--;
  // }
  // return true


  if (x < 0) return false;

  let div = 1;
  while (x / div >= 10) div *= 10;
  while (x > 0) {
    // 去掉小数点部分
    const left = Math.trunc(x / div);
    const right = x % 10;
    if (left !== right) return false;
    x = Math.trunc((x % div) / 10);
    div = Math.trunc(div / 100);
  }
  return true;
};
// @lc code=end

