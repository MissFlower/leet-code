/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // if (strs === null || strs.length === 0) {
  //   return ''
  // }
  // let flag = true
  // let index = 0
  // let res = ''
  // while (flag) {
  //   const arr = strs.map(item => item[index])
  //   if (arr[0] !== undefined && arr.every(item => item === arr[0])) {
  //     res += arr[0]
  //     flag = true
  //     index++
  //   } else {
  //     flag = false
  //   }
  // }
  // return res

  if(strs.length == 0) 
  return "";
  let ans = strs[0];
  for(let i =1;i<strs.length;i++) {
    let j=0;
    for(;j<ans.length && j < strs[i].length;j++) {
        if(ans.charAt(j) != strs[i].charAt(j))
            break;
    }
    ans = ans.substring(0, j);
    if(ans === '')
    return ans;
  }
  return ans;
};
// @lc code=end

