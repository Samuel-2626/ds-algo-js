# Recursion

Understanding at least the basic concept of recursion is important and it is something that is often asked about in job interviews.

In programming terms, recursion is a function that calls itself until a "base case" or a "base condition" is true.

In most recursive functions, we break the problem down into smaller instances and then use that solution to solve the original problem.

When we call a function it gets added to what we call the call stack and when it comes to returning values, there's a concept called `unwinding`.

At first glance, recursion and iteration (loops) seem to be very similar. They both can be used to solve the same problems, but there are some differences between them. There are also pros and cons to both.

When using recursion, you're adding function calls to the call stack, and that takes up memory and can affect performance. Iteration doesn't because you aren't adding function instances. So that's one pro for iteration over recursion.

However, recursion can minimize the amount of code needed and can be very elegant solution and minimize complex problems.

Use recursion when the problem can be broken down into smaller instances of the same problem and you have a clear base case.

Recursion is often used for problems that have a natural recursive structure, like traversing trees or finding combinations.

Use iteration when you need to repeat a block of code a specific number of times or until a condition is met. Iteration is generally simpler to implement and understand for simpler repetitive tasks.

```js
function countDown(num) {
    // Base case
    if (num <= 0) {
        console.log("All done!");
        return;
    }

    // Recursive case
    console.log(num);
    num--;
    countDown(num);
}

countDown(3)
```

We are calling the same function with a smaller number each time. This is recursion.
