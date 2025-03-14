/*
 * @Author: v_wangchanghao v_wangchanghao@baidu.com
 * @Date: 2025-02-26 11:20:19
 * @LastEditors: v_wangchanghao v_wangchanghao@baidu.com
 * @LastEditTime: 2025-02-26 17:34:04
 * @FilePath: /eop-tpl-develop-ssr-multi-list/Users/wangchanghao/Desktop/demospace/wch/leetCode/3.无重复字符的最长子串.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s abbabcbbb
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let max = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= left) {
      left = map.get(s[i]) + 1;
    }
    max = Math.max(max, i - left + 1); // 从最大长度和当前下标到left的长度中取最大值
    map.set(s[i], i);
  }
  return max;
};
// @lc code=end

/********** 测试用例 **********/
/**
 * @description: 无重复字符的最长子串
 * @param {string} s
 * @return {num}
 * 
 * 示例:
 * 输入: s = "abcabcbb" 输出: 3
 * 输入  a  b  c  a  b  c  b  b
 * 存一个map, key是字符, value是下标
 * 声明一个left指针, 用来记录当前子串的起始位置
 * 声明一个max  记录子串最大长度
 * 
 * 遍历字符串，a b c map无记录 set a:0 b:1 c:2 left=0 max=3
 * 继续遍历, index = 3, map有记录,并且记录的下标大于等于left, 则left在当前字符的下标+1 left = 1  相当于map存的abc去掉了a 变成了bca
 * i - left + 1 就是当前子串的长度, 比较当前长度和max的长度, 更新max
 * 👆
 *       i
*        ⬇️  
 * a  b  c  a  b  c  b  b
 * lt
 * 👆
 *          i
*           ⬇️  
 * a  b  c  a  b  c  b  b
 *    lt
 *    👆
 * i - lt + 1 = 3
 */
