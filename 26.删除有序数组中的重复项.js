/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
//   let j = 0
//  for (let i = 1; i < nums.length + 1; i++) {
//   if (nums[i] !== nums[j]) {
//     const temp = nums[i]
//     nums[i] = nums[j+1]
//     nums[j+1] = temp
//     j++
//   }
//  }
//   return j

  let i = 0
  let j = 1

  while (j <= nums.length) {
    if (nums[i] !== nums[j]) {
      nums[i+1] = nums[j]
      i++
    }
    j++
  }
  return i
};
// @lc code=end

