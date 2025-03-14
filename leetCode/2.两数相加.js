/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let cur = head; // {val: 0, next: null}
    let carry = 0; // 储存每个节点的进位 满10进1
    while (l1 || l2) {
        const x = l1 ? l1.val : 0; // 2  4  3
        const y = l2 ? l2.val : 0; // 5  6  4
        const sum = carry + x + y; // 7 10  7
        carry = Math.floor(sum / 10); // 0 1 0
        // {val: 0, next: {val: 7, next: null}}
        // {val: 7, next: {val: 0, next: null}}
        // {val: 0, next: {val: 7, next: null}}
        cur.next = new ListNode(sum % 10); 
        if (l1) l1 = l1.next; // {val: 4, next: {val: 3, next: null}} {val: 3, next: null}
        if (l2) l2 = l2.next; // {val: 6, next: {val: 4, next: null}} {val: 4, next: null}
        cur = cur.next; // {val: 7, next: null} {val: 0, next: null}
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);// {val: 0, next: {val: 1, next: null}}
    }
    return head.next;
};
// 因为是链表 其实l1 l2 的结构应该是下面这样
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}}
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// l2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}}
console.log(addTwoNumbers(l1, l2));
// @lc code=end

