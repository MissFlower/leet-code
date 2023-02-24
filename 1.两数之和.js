/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums.length) {
    return []
  }
  const res = new Map()
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (res.has(target - item)) {
      return [res.get(target - item), i]
    }

    res.set(item, i)
    
  }
};
// @lc code=end

