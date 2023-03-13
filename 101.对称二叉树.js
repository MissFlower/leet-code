/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) {
    return false
  }

  function isSame(a, b) {
    if (a === null && b === null) {
      return true
    }

    if (a === null || b === null) {
      return false
    }

    if (a.val !== b.val) {
      return false
    }

    return isSame(a.left, b.right) && isSame(a.right, b.left)
  }

  return isSame(root.left, root.right)
};
// @lc code=end

