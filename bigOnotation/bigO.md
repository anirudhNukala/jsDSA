# Big O Notation
A way to formally note the runtime of an algorithm as the input size grows

## What is the idea?
Imagine there are multiple ways to write the same function
Big O notation finds which is the most efficient way to do so

## Examples:
### Write a function that accepts a string and outputs the reversed string

- Implementation 1:
```js
function reverse(s) {
    let o = '';
    for (let i = s.length - 1; i >= 0; i--) {
        o += s[i];
    return o;
    }
}
```
-Implementation 2:
```js
function reverse(s) {
    let o = [];
    for (let i = s.length - 1; j = 0; i >=0; i--; j++) {
        o[j] = s[i]
    return o.join('');
    }
}
```

## What makes a function better?
- Faster
- Less Memory Intensive
- Readability

## Problems with using time to measure
- Different machines will record different times
- Same machine will even record same time
- Fast algorithms have imprecise speed

## Counting operations
- Counting the number of various discrete arithmetic operations that occur in the function
- Function can have a fixed value (eg. 3) or it can scale up (eg. 3n, n^2, 2^n)

## More Examples:

- O(n):
```js
function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}
console.log("At the top!\nGoing down...");
for (let j = n - 1; j >= 0; j--) {
    console.log(j)
}
console.log("Back down. Bye!");
```
This function is O(n) because there is only one for loop which means that it will be O(n)

- O(n^2)
```js
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```
This function is O(n) because there is a nested for loop, which means that it will be O(n^2)

## Simplifying Big O Expressions
### Constants don't matter:  
- O(2n) = O(n) 
- O(500) = O(1)
-  O(13n^2) = O(n^2)
### Smaller Terms don't matter:
- O(n + 10) = O(n)
- O(1000n + 50) = O(n)
- O(n^2 + 5n + 8) = O(n^2)


## Big O Shorthands:
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity
- Most primitives (bool, num, undefined, num) are constant space
- Strings require O(n) space (where n is string length)
- Reference types are generally O(n), where n is the length of array/object

## Space Complexity Examples
- O(1)
```js
function sum(arr) {
    let total = 0;
    for (let i = o; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}
```
This is space complexity O(1) because there is only one variable and since it is a number, it takes up the same amount of space no matter what

-O(n)
```js
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
```
This is space complexity O(n) because the output is directly proportional to the size of the input