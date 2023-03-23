/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length
  if (len < 2) return 0
  let res = 0
  let minPrices = prices[0]
  for (let i = 1; i < len; i++) {
    res = Math.max(res, prices[i] - minPrices)
    minPrices = Math.min(minPrices, prices[i])
  }
  return res
};
// @lc code=end

