/*
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let dummy = new ListNode(0)
    dummy.next = head
    let i = dummy
    let j = dummy
    // 让j先走n步
    while (n) {
        j = j.next
        n--
    }
    // 一起走！！！
    while (j.next) {
        i = i.next
        j = j.next
    }
    // 此时j走到了最后一个节点 i此时是需要删除节点的前一节点
    // 开始链接！！！！
    i.next = i.next.next
    // 链接成功！！！！
    return dummy.next
};