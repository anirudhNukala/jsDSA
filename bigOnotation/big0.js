// Timing Functions to see Big 0

// Write a function that inputs a number, n and outputs the sum of all the preceding numbers (inclusive)

// Function with for loop
function addUpTo1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Using an algebraic function
function addUpTo2(n) {
    return n * (n + 1)/2
}

let t1 = performance.now();
addUpTo1(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed for addUpTo1: ${((t2-t1) / 1000)} seconds.`);
console.log('This reflects time complexity O(n)');
let t3 = performance.now();
addUpTo2(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed for addUpTo2: ${((t4-t3) / 1000)} seconds.`);
console.log('This reflects O(1)')
