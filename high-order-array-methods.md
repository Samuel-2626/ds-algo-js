# High Order Array Method

A high order array method is a method that takes in a function as an argument or
returns a function as a result.

The most common high order array methods are map, filter, and reduce.

They allow us to iterate over an array and perform some sort of operation on each
element.

## Map, Filter & Reduce

### Map

The map method takes in a function as an argument and returns a new array with the result
of calling the function on each element in the array.

```js
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num) => {
    return num * 2;
})

console.log(doubleNumbers)
// Output: [2, 4, 6, 8, 10]
```

### Filter

The filter method takes in a function as an argument and returns a new array with all the elements
that pass the test implemented by the function.

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
})

console.log(evenNumbers);
// Output: [2, 4]
```

### Reduce

The reduce method takes in a function as an argument and returns a single value.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0)

console.log(sum);
// Output: 15
```

### forEach

The forEach method takes in a function as an argument and executes the function on each element in
the array.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num);
})

// Output: 1 2 3 4 5
```

Here are some other high order array methods that you might see:

- `some` - returns `true` if at least one element in the array passes the test implemented
by the function.
-  `every` - returns `true` if all elements in the array pass the test implemented by the function.
- `find` - returns the value of the first element in the array that passed the test implemented
by the function.
- `findIndex` - returns the index of the first element in the array that passes the test implemented
by the function.
- `sort` - sorts the elements in the array.
- `reverse` - reverses the order of the element in the array.
- `includes` - returns true if the array contains a certain elements.
