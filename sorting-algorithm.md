# What is sorting algorithm?

A sorting algorithm is an algorithm that puts elements of a list in a certain order. The most frequently used orders are numerical order and alphabetical order.

Efficient sorting is important for optimizing the use of other algorithms such as searching (as in a binary tree search) and merging. Both required data to be in sorted lists.

There are many different sorting algorithms and each has its own advantages and limitations.

Sorting is a basic building block that many other algorithms are built on.

Efficiency in an algorithm is defined in terms of time complexity and space complexity.

## Bubble sort algorithm

Bubble sort algorithm is one of the simplest sorting algorithms. It's also one of the least efficient. However, it is a very common interview question.

The Bubble sort sorting algorithm is comparison-based. Each pair of adjacent elements are compared with each other and the elements are swapped if they are not in order. This is repeated until the list is sorted.

- worst-case time complexity: O(n^2)
- best-case time complexity: O(n)
- average case time complexity: O(n^2)
- space complexity: O(1)

## Selection sort algorithm

The selection sort algorithm is a simple sorting algorithm that works by repeatedly selecting the minimum (or maximum) element from the unsorted part of the array and swapping it with the first unsorted element. This gradually builds up a sorted portion of the array.

Selection sort has a time complexity of O(n^2). This makes it inefficient for large arrays, but it's simple to implement and performs a fixed number of swaps, which can be advantageous in certain situations.

## Merge sort algorithm

The merge sort algorithm is a very efficient divide-and-conquer algorithm. It works by continuously splitting the array in half until it can no longer be divided. Then, it merges each subarray while sorting them in the process. This process continues until the whole array is sorted.

It has a time complexity of O(n log n)
