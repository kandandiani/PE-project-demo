/*
 * @Author: v_wangchanghao v_wangchanghao@baidu.com
 * @Date: 2025-02-27 15:07:53
 * @LastEditors: v_wangchanghao v_wangchanghao@baidu.com
 * @LastEditTime: 2025-02-27 16:04:02
 * @FilePath: /ubc-report-sdk/Users/wangchanghao/Desktop/demospace/wch/leetCode/13.罗马数字转整数.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let res = 0;
    for (let i = 0; i<s. length; i++) {
        if (map[s[i]] < map[s[i+1]]) {
            res -= map[s[i]];
        }
        else {
            res += map[s[i]];
        }
    }
    return res;
};
// @lc code=end

