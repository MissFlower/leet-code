/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}
var sortedArrayToBST = function(nums) {
  function dfs(arr, l, r) {
    if (l > r) {
      return null
    }
    const mid = Math.floor(l + (r - l) / 2)
    // @ts-ignore
    const root = new TreeNode(arr[mid])
    root.left = dfs(arr, l, mid - 1)
    root.right = dfs(arr, mid + 1, r)

    return root
  }

  return dfs(nums, 0, nums.length - 1)

};
// @lc code=end

