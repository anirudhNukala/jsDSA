# Arrays
## Ordered Lists

```js
let names = ['Michael', 'Melissa', 'Andrea'];
let values = ['true', {}, [], 2, 'awesome'];
```

## When to use arrays:
- When you need order
- When you need fast access and insertion/removal of data

## Big O of Array Methods:
- Insertion: *depends
- Removal: *depends
- Searching: O(N)
- Access: O(1)
- push: O(1)
- pop: O(1)
- shift: O(N)
- unshift: O(N)
- concat: O(N)
- slice: O(N)
- splice: O(N)
-sort: O(N * log(N))
- forEach/map/filter/reduce/etc: O(N)
*depends on where the object is being inserted/removed - closer to the front means longer time because of re-indexing of values