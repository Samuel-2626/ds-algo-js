# Hash table

In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values.

A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, where the desired values can be found along with its index.

A hash function is a function that takes in a key and returns an index. The index is used to determine where the key-value pair should be stored in the hash table.

The hash function should always return the same index for the same key.

There is something called a hash collision that can occur when using hash tables. A collision occurs when two keys are mapped to the same index in the array.

A good hash function will evenly distribute the keys across the hash table. This will minimize collisions and improve the time complexity of the hash table.

When it comes to time complexity, hash tables are a great data structure for fast lookups.

The average time complexity for lookups, insertions, and deletions is O(1). Collisions can slow down the time complexity to O(n).

Space complexity is O(n) because we have to store all the keys and values in the hash table and the size of the hash table is proportional to the number of keys and values.

## Hash methods

- set(key, value): Adds a key-value pair to the hash table.
- get(key): Returns the value associated with a key.
- remove(key): Removes a key-value pair from the hash table.
- has(key): Returns true if the key exists in the hash table, false otherwise.
- keys(): Returns an array of all the keys in the hash table.
- values(): Returns an array of all the values in the hash table.
