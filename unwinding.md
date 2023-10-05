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

`sumUpTo(5)`

__The call stack__

- *5 = 1 => sumUpTo(1)
- *4 = 2 + *5 => sumUpTo(2)
- *3 = 3 + *4 => sumUpTo(3)
- *2 = 4 + *3 => sumUpTo(4)
- *1 = 5 + *2 => sumUpTo(5)

__Unwinding (LIFO)__

1 + *4 (2 + 1) + *3 (3 + 2 + 1) + *2 (4 + 3 + 2 + 1) + *1 (5 + 4 + 3 + 2 + 1)

__Therefore:__ => sumUpTo(5) = *1 = (5 + 4 + 3 + 2 + 1) = 15.
