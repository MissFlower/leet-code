/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// var postorderTraversal = function (root, res = []) {
//   if (root === null) {
//     return []
//   }

//   if (root.left) {
//     postorderTraversal(root.left, res)
//   }

//   if (root.right) {
//     postorderTraversal(root.right, res)
//   }

//   res.push(root.val)

//   return res
// };
var postorderTraversal = function (root, res = []) {
  if (root === null) {
    return []
  }

  const stack = [root]

  while (stack.length) {
    const node = stack.pop()

    res.unshift(node.val)

    if (node.left) {
      stack.push(node.left)
    }

    if (node.right) {
      stack.push(node.right)
    }

  }

  return res
};
// @lc code=end

