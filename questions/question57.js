/**
 * 21. Merge Two Sorted Lists
 * Source: https://leetcode.com/problems/merge-two-sorted-lists/
 * Tags: ['linked-list']
 * Difficulty: Easy
 * You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.
    Example 1:


    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]
    Example 2:

    Input: list1 = [], list2 = []
    Output: []
 */
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

let mergeTwoLists = function (l1, l2) {
  let headNode = {
    val: -1,
    next: null,
  };

  let curr = headNode;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;

  return headNode.next;
};
