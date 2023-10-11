# Space complexity

Space complexity refers to the amount of memory or storage space that an algorithm or function consumes based on the size of its input. It measures how the memory usage of an algorithm scales with the size of the input data. The goal is to optimize the additional memory required during the execution of an algorithm or program.

There are a lot of similarities between time and space complexity. We can use the same Big O notation to describe space complexity. We have constant, linear, quadratic, logarithmic, exponential, and factorial space complexity.

In many cases, the space complexity of a function will be the same as the time complexity. If a function takes O(n) time, it will also take O(n) space.

This is because the amount of memory used by a function is often directly related to the number of operations it performs. However, this is not always the case. Sometimes a function will take up more memory than time, or vice versa.

## Rules for calculating space complexity

- Variables and data structure take up space: The space complexity increases with the number and size of variables and data structures used in your program.

- Function calls take up space.

- The space complexity of a function is the sum of the space complexity of all variables, data structures, and function calls inside the function.
