# Sorting

## Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list.

Here's a step-by-step explanation of how the Bubble Sort algorithm works:

1. Comparison: The algorithm starts by comparing the first two elements in the list.

2. Swap: If the first element is greater than the second element, a swap is performed. Otherwise, the elements remain in their positions.

3. Move to the Next Pair: The algorithm then moves to the next pair of elements (i.e., the second and third elements), and the process is repeated.

4. Continue Comparisons and Swaps: The process continues, comparing and swapping adjacent elements until the algorithm reaches the end of the list. At this point, the largest element is guaranteed to be at the end of the list.

5. Repeat: The algorithm then repeats the process for the remaining elements in the list, excluding the already sorted elements.

6. Termination: The algorithm terminates when it completes a pass through the list without any swaps, indicating that the list is now sorted.

> The time complexity of the Bubble Sort algorithm is O(n^2) in the worst and average cases, where "n" is the number of elements in the list. This makes it inefficient for large datasets. However, it has the advantage of being easy to understand and implement, making it suitable for educational purposes or small datasets.

## Selection Sort

Selection Sort is another simple comparison-based sorting algorithm that divides the input list into two parts: the sorted portion at the left end and the unsorted portion at the right end. The algorithm repeatedly selects the smallest (or largest, depending on the sorting order) element from the unsorted portion and swaps it with the first unsorted element. This process continues until the entire list is sorted.

Here's a step-by-step explanation of how the Selection Sort algorithm works:

1. Initial State: The entire list is considered unsorted.

2. Find the Minimum: The algorithm scans the unsorted portion of the list to find the minimum element.

3. Swap: Once the minimum element is found, it is swapped with the first element in the unsorted portion.

4. Expand Sorted Portion: The sorted portion is expanded to include the newly swapped element, and the unsorted portion is reduced by one element.

5. Repeat: Steps 2-4 are repeated until the entire list is sorted.

6. Termination: The algorithm terminates when the entire list is sorted.

> The time complexity of Selection Sort is O(n^2) in the worst and average cases, where "n" is the number of elements in the list. Like Bubble Sort, Selection Sort is not the most efficient algorithm for large datasets. However, it has the advantage of minimizing the number of swaps, making it useful in situations where swapping elements is expensive.

## Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as QuickSort, MergeSort, or HeapSort. However, it performs well for small datasets or partially sorted lists, and it has several advantages, such as simplicity and low overhead.

Here's a step-by-step explanation of how the Insertion Sort algorithm works:

1. Initial State: The first element of the list is considered to be a sorted subarray of length 1.

2. Insertion: For each subsequent element in the unsorted portion of the list, the algorithm compares it with the elements in the sorted subarray. It finds the correct position for the element in the sorted subarray and shifts elements to make space for the new element.

3. Repeat: Steps 1 and 2 are repeated until the entire list is sorted.

4. Termination: The algorithm terminates when all elements are part of the sorted subarray.

> The time complexity of Insertion Sort is O(n^2) in the worst and average cases, where "n" is the number of elements in the list. The best-case time complexity is O(n) when the list is already sorted.
