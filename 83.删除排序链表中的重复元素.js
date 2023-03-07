/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let cur = head
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head


   // 链表为空时直接返回
   if(!head) return head;
   // 初始化两个指针
   let p1 = head;
   let p2 = head.next;
   // 指针p2为空时链表遍历结束 
   while(p2){
       // 当两个指针的值相同时
       if(p1.val===p2.val){
           // 将p1作为基准值，将它的next指向p2的下一个节点
           p1.next = p2.next;
       }else {
           // 两个指针的值不同时就证明前面已经没有相同的值了，就将p1更新为第一次出现的p2
           p1 = p2;
       }
      // 继续移动p2
       p2 = p2.next;
   }
  // 返回头节点，即时后面有重复的值，那头结点也会存在
   return head;
};
// @lc code=end

