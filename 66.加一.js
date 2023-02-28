/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // const last = digits[digits.length - 1]
  // if (last === 9) {
  //   for (let i = digits.length - 1; i >= 0; i--) {
  //     const element = digits[i];
  //     if (element === 9) {
  //       digits[i] = 0

  //       if (i === 0) {
  //         digits.unshift(1)
  //       }
  //     } else {
  //       digits[i] = digits[i] + 1
  //       break
  //     }
  //   }
  // } else {
  //   digits[digits.length - 1] = digits[digits.length - 1] + 1
  // }

  // return digits

  for (let i = digits.length - 1; i >= 0 ; i--) {
    const element = digits[i];
    if (element === 9) {
      digits[i] = 0
    } else {
      digits[i] = digits[i] + 1
      return digits
    }
  }

  return [1, ...digits.fill(0)]
};
// @lc code=end

