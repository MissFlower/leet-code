/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function (root, res = []) {
//   if (root === null) {
//     return res
//   }
//   res.push(root.val)
//   preorderTraversal(root.left, res)
//   preorderTraversal(root.right, res)

//   return res
// };
var preorderTraversal = function (root, res = []) {
  if (root === null) {
    return res
  }
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)

    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }

  return res
};
// @lc code=end

