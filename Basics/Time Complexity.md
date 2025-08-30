>Time complexity is important to understand for junior participants, and especially crucial for senior participants.<br>
Starting from question 5 in the junior section, and from question 3 in the senior section, time complexity needs to be taken into consideration.<br>If a program with high time complexity is submitted, it will result in TLE (Time Limit Exceeded) during compilation.
Therefore, it is essential to consider the time complexity of a certain algorithm and the problem requirements when trying to implement it.

# Time Complexity
The efficiency of algorithms is important in competitive programming. Usually, it is easy to design an algorithm that solves the problem slowly, but the real challenge is to invent a fast algorithm. If the algorithm is too slow, it will get only partial points or no points at all.  

The time complexity of an algorithm estimates how much time the algorithm will use for some input. The idea is to represent the efficiency as a function whose parameter is the size of the input. By calculating the time complexity, we
can find out whether the algorithm is fast enough without implementing it.  

## Calculation Rules
The **time complexity** of an algorithm is denoted `O(...)` where the three dots
represent some function. Usually, the variable `n` denotes **the input size**. For
example, if the input is an array of numbers, `n` will be the size of the array, and if
the input is a string, `n` will be the length of the string.

>O(f(n)) is called the [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation), which expresses worst-case time complexity of an algorithm as a function of `n` as `n` gets arbitrarily large.

### Loops
A common reason why an algorithm is slow is that it contains many loops that go
through the input. The more nested loops the algorithm contains, the slower it is.
If there are `k` nested loops, the time complexity is `O(n^k)`.  

For example, the time complexity of the following code is `O(n)`:
```cpp
for (int i = 1; i <= n; i++) {
    // code
}
```
The time complexity of the following code is `O(n^2)`:
```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        // code
    }
}
```

### Order of magnitude
A time complexity does not tell us the exact number of times the code inside
a loop is executed, but it only shows the order of magnitude. In the following
examples, the code inside the loop is executed `3n`, `n+5` and `n/2` times, but the
time complexity of each code is `O(n)`.
```cpp
//Exampe 1: Time Complexity: O(n)
for (int i = 1; i <= 3*n; i++) {
    // code
}
//Exampe 3: Time Complexity: O(n)
for (int i = 1; i <= n+5; i++) {
    // code
}
//Exampe 3: Time Complexity: O(n)
for (int i = 1; i <= n; i += 2) {
    // code
}
```
### Phases
If the algorithm consists of consecutive phases, the total time complexity is the
largest time complexity of a single phase. The reason for this is that the slowest
phase is usually the bottleneck of the code.  
For example, the following code consists of three phases with time complexities
`O(n)`, `O(n^2)` and `O(n)`. Thus, the total time complexity is `O(n^2)`.  
```cpp
for (int i = 1; i <= n; i++) {
    // code
}
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
        // code
    }
}
for (int i = 1; i <= n; i++) {
    // code
}
```

### Several variables
Sometimes the time complexity depends on several factors. In this case, the time
complexity formula contains several variables.  
For example, the time complexity of the following code is `O(nm)`:
```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= m; j++) {
        // code
    }
}
```
### Recursion
The time complexity of a recursive function depends on **the number of times
the function is called** and **the time complexity of a single call**. The total time
complexity is the product of these values.  
For example, consider the following function:
```cpp
void f(int n) {
    if (n == 1) return;
    f(n-1);
}
```
The call `f(n)` causes `n` function calls, and the time complexity of each call is `O(1)`.
Thus, the total time complexity is `O(n)`.

**Complexity factors that come from some common algorithms and data structures are as follows:**
| Operation / Algorithm                                                    | Time Complexity          |
|--------------------------------------------------------------------------|--------------------------|
| Mathematical formulas that just calculate an answer                      | `O(1)`                   |
| Sorted set/map or priority queue (per operation)                         | `O(log n)`               |
| Reading in n items of input                                              | `O(n)`                   |
| Iterating through an array or a list of n elements                       | `O(n)`                   |
| Iterating through all permutations                                       | `O(n!)`                  |
| Linear search                                                            | `O(n)`                   | 
| Binary search                                                            | `O(log n)`               | 
| Prefix sums / cumulative sums                                            | `O(n)`                   |
| Hash maps / sets (average case)                                          | `O(1)`                   | 
| Sorting (quicksort/mergesort)                                            | `O(n log n)`             | 
| BFS / DFS (graph traversal)                                              | `O(n + m)`               |


The following table contains some useful estimates assuming a time limit of **one second**.
| Input Size (n)     | Maximum Acceptable Time Complexity  |
|--------------------|-------------------------------------|
| n ≤ 10             | `O(n!)`                             |
| n ≤ 20             | `O(2^n)`                            |
| n ≤ 500            | `O(n^3)`                            |
| n ≤ 5000           | `O(n^2)`                            |
| n ≤ 10^6           | `O(n log n)` or `O(n)`              |
| n is very large    | `O(1)` or `O(log n)`                |

Most CCC Senior problems have a time limit of 0.5 to 3 seconds. If the time limit is longer, algorithms with higher time complexity may be feasible, and if it is shorter, only faster algorithms are practical.  

>Note that during a timed coding competition, it is often better to implement a solution quickly to earn partial marks and move on to the next question, rather than spending a long time trying to find a perfect solution and risking not finishing all the questions.
