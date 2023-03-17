/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) {
    return 0
  }
  //这道题递归条件里分为三种情况
  //1.左孩子和有孩子都为空的情况，说明到达了叶子节点，直接返回1即
  if (root.left === null && root.right === null) {
    return 1
  }

  const l = minDepth(root.left)
  const r = minDepth(root.right)

  //2.如果左孩子和由孩子其中一个为空，那么需要返回比较大的那个孩子的深度        
  if (root.left === null || root.right === null) {
    return Math.max(l, r) + 1
  }
  //3.最后一种情况，也就是左右孩子都不为空，返回最小深度+1即可
  return Math.min(l, r) + 1
};
// @lc code=end

