/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // const res = {
  //   next: null
  // }

  // let temp = res

  // while (list1 !== null && list2 !== null) {
  //   if (list1.val <= list2.val) {
  //     temp.next = list1
  //     list1.next = list1
  //   } else {
  //     temp.next = list2
  //     list2.next= list2
  //   }
  //   // @ts-ignore
  //   temp = temp.next
  // }
  // temp.next = list1 !== null ? list1 : list2

  // return res.next

  if (list1 === null) {
    return list2
  }

  if (list2 === null) {
    return list1
  }

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }
  
  list2.next = mergeTwoLists(list1, list2.next)
  return list2
};
// @lc code=end

