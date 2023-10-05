# Unwinding

We know that when we run a function recursively, it calls itself until it reaches a base case. After it reaches that base is when it starts returning values as it "unwinds" the recursion.

The order in which the function calls are returned is the reverse order of the function calls. This is because the function calls are added to the call stack, which is a LIFO (last in, first out) data structure.

As I said above, the call stack is a LIFO (last in, first out) data structure, which means that the last function that was added to the call stack is the first one to be removed.

This is why the function calls are returned in the reverse order of the function calls.

```js
function sumUpTo(n) {

    if (n === 1) {
        return 1;
    }

    return n + sumUpTo(n - 1);

}
```
