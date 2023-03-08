/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 双指针
  let p1 = 0, p2 = 0;
  const sorted = new Array(m + n).fill(0);
  let cur
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++]
    } else if (p2 === n) {
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++]
    } else {
      cur = nums2[p2++]
    }
    sorted[p1 + p2 - 1] = cur
  }
  for (let i = 0; i < sorted.length; i++) {
    nums1[i] = sorted[i]
  }

// 双向逆指针
  // let p1 = m - 1, p2 = n - 1;
  //   let tail = m + n - 1;
  //   var cur;
  //   while (p1 >= 0 || p2 >= 0) {
  //       if (p1 === -1) {
  //           cur = nums2[p2--];
  //       } else if (p2 === -1) {
  //           cur = nums1[p1--];
  //       } else if (nums1[p1] > nums2[p2]) {
  //           cur = nums1[p1--];
  //       } else {
  //           cur = nums2[p2--];
  //       }
  //       nums1[tail--] = cur;
  //   }
};
// @lc code=end

