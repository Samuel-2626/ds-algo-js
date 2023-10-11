# Big O Notation

Time complexity represents how the runtime changes as the input grows.

Big O notation is a way to describe the time complexity of an algorithm. More specifically, it is a way to describe the upper bound or worst-case scenario of how the runtime or space requirements of an algorithm grow in relation to the size of the input.

Big O uses mathematical expressions to represent the relationship between the input size (often denoted as "n") and the algorithm's performance. The "O" in Big O stands for "order of" and indicates the rate at which the algorithm's performance grows relative to the input size.

Just about every operation in your code has some kind of time complexity, not just entire functions or algorithms.

Time complexity refers to how the execution time of an operation scales as the size of the data it operates on increases.

## Array operations and time complexity

- Accessing elements by index (read): O(1)
- Insertion and deletion at the end: O(1)
- Insertion and deletion at the beginning: O(n)
- Insertion and deletion at the middle: O(n)
- Searching for an element: O(n)
- Searching for an element with binary search (only applicable to sorted arrays): O(log n)
