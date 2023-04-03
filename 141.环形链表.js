/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const arr = []

  function walkList(list) {
    if (list === null) {
      return false
    }

    if (arr.includes(list.val)) {
      return true
    } else {
      arr.push(list.val)
    }

    return walkList(list.next)
  }

  return walkList(head)
};
// @lc code=end

