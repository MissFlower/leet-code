/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // for (let i = 0; i < nums.length; i++) {
  //   const cur = nums[i];
  //   if (cur === val) {
  //     nums.splice(i, 1)
  //     i--
  //   }
  // }
  // return nums.length

  // 双指针解法
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j]
      j--
    } else {
      i++
    }
  }
  return i
};
// @lc code=end

