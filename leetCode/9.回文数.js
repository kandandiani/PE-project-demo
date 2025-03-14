/*
 * @Author: v_wangchanghao v_wangchanghao@baidu.com
 * @Date: 2025-02-26 17:45:29
 * @LastEditors: v_wangchanghao v_wangchanghao@baidu.com
 * @LastEditTime: 2025-02-26 17:47:07
 * @FilePath: /eop-tpl-develop-ssr-multi-list/Users/wangchanghao/Desktop/demospace/wch/leetCode/9.回文数.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // return x.toString() === x.toString().split('').reverse().join('');
    if (x < 0) {
        return false;
    }
    let str = x + '';
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
// @lc code=end

