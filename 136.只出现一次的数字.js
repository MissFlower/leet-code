/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = {}
  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]]) {
      res[nums[i]]++
    } else {
      res[nums[i]] = 1
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]] === 1) {
      return nums[i]
    }
  }

  //   使用异或性质完成题设
  // 01.异或性质1：任何数值异或0等于数值它本身
  // 02.异或性质2：两个数值的异或，相同为0，相异为1
  // 03.异或性质3：多个数值的异或满足交换律和结合律
  // 根据异或的三个性质，当数组中的数值挨个异或，最终留下的结果就是我们所需的数字。
  // let res = 0;
  // nums.forEach(item => {
  //   res ^= item
  // })
  // return res
};
// @lc code=end

