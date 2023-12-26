# Theory Questions:

### Q1. What are the differences between binary and tertiary search? Why is binary preferred over tertiary although tertiary has less time complexity?

> Ternary search is not always preferred over binary search for a few reasons:
> Complexity and Performance:
> Ternary search divides the search space into three parts with each comparison, while binary search divides it into two. This means that ternary search requires more comparisons and has a larger overhead compared to binary search. In practice, this can make ternary search slower for many search scenarios, especially when the search space is large.
> The time complexity of ternary search is typically O(log3 n), which is slower than the O(log2 n) time complexity of binary search.
> Limited Applicability:
> Ternary search is most useful when you have a unimodal function or a sorted array with a single maximum or minimum point. In such cases, it can be used to find the maximum or minimum value efficiently. However, in many search scenarios, the data may not exhibit a unimodal pattern, and in those cases, ternary search is not the appropriate choice.
> Space Complexity:
> Ternary search requires three recursive calls or iterations in each step, which can lead to higher space complexity compared to binary search.
> Simplicity and Maintainability:
> Binary search is generally easier to understand and implement compared to ternary search. It's a simpler algorithm, which makes it more robust and less error-prone in practice.
> Alternatives:
> For finding specific elements or values in a sorted array, binary search is often the go-to choice. If you need to find multiple occurrences or rank elements, you might use binary search variants like binary search with duplicates or binary search tree traversal.

### Q2. Difference between normal hosting and VCS hosting?
