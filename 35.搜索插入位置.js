/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // if (target > nums[nums.length - 1]) {
  //   return nums.length
  // }
  // if (target < nums[0]) {
  //   return 0
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) {
  //     return i
  //   }
  //   if (target > nums[i] && target < nums[i+1]) {
  //     return i + 1
  //   }
  // }

  if (target > nums[nums.length - 1]) {
    return nums.length
  }

  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const m = l + Math.floor((r - l) / 2)
    if (nums[m] >= target) {
      r = m
    } else {
      l = m + 1
    }
  }
  return l
};
// @lc code=end

