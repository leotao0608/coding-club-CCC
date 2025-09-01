# Dynamic Programming
Dynamic Programming (often shortened to DP) is a method for solving problems by **breaking them down into smaller overlapping subproblems**, solving each subproblem just once, and **storing the results** (usually in an array or table) so we don’t need to recompute them later.

## Using Memoization
The idea of dynamic programming is to use memoization to efficiently calculate values of a recursive function. This means that the values of the function are stored in an array after calculating them. For each parameter, the value of the function is calculated recursively only once, and after this, the value can be directly retrieved from the array.

## Example
Start from this problem: [**Frog 1**](https://atcoder.jp/contests/dp/tasks/dp_a)

The problem asks us to compute the minimum total cost it takes for a frog to
travel from stone `1` to stone `N` (where `N <= 10^5`) given that the frog can
only jump a distance of one or two.  

The cost to travel between any two stones `i` and `j` is given by `|h[i] - h[j]|`,
where `h[i]` represents the height of stone `i`.

### Solution without using DP
```cpp
#include <bits/stdc++.h>
using namespace std;
vector<int> h;
int N;

int dfs(int i) {
    if (i == N-1) return 0; // If the frog is already at the last stone, no more cost is needed.
    int a = dfs(i+1) + abs(h[i+1] - h[i]);  // Cost of jumping to the next stone (i+1).
    if (i+2 < N) {  // Check if the frog can jump two stones ahead (i+2).
        int b = dfs(i+2) + abs(h[i+2] - h[i]);  // Cost of jumping two stones ahead.
        return min(a, b);   // Choose the minimum cost option.
    }
    return a;   // If only one jump (to i+1) is possible, return that cost.
}

int main() {
    cin >> N;
    h.resize(N);
    for (int i = 0; i < N; i++) {
        cin >> h[i];
    }
    cout << dfs(0) << endl; // Start from the first stone (index 0)
    return 0;
}
```
The time complexity is `O(2^N)`.
Since there are only two options, we can use recursion to compute what would
happen if we jumped either 1 stone, or 2 stones. There are two
possibilities, so recursively computing would require computing both a left and
right subtree. Therefore, for every additional jump, each branch splits into
two, which results in an exponential time complexity. That's too slow when `N` gets too large.

### Solution using DP
```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> h;
vector<int> dp; // dp[i] stores the minimum cost to reach the last stone starting from stone i
int N;

int dfs(int i) {
    if (i == N-1) return 0;  // If the frog is already at the last stone, no more cost is needed.(Base case)
    if (dp[i] != -1) return dp[i];  // If already computed, return stored value.

    // Option 1: jump to the next stone
    int a = dfs(i+1) + abs(h[i+1] - h[i]);

    if (i+2 < N) {
        // Option 2: jump two stones ahead
        int b = dfs(i+2) + abs(h[i+2] - h[i]);
        dp[i] = min(a, b);  // Take the better (minimum) option
    } else {
        dp[i] = a; // If only one jump is possible, store that cost
    }
    return dp[i];
}

int main() {
    cin >> N;
    h.resize(N);
    dp.resize(N, -1);   // Initialize dp with -1 (uncomputed states)
    for (int i = 0; i < N; i++) {
        cin >> h[i];
    }
    cout << dfs(0) << endl; // Start from the first stone (index 0)
    return 0;
}
```
The time complexity using dynamic programming is `O(N)`.
Because we are using dp to store the stones the frog had jumped, the cost of each stone is only calculated once. As there are `N` stones, the time complexity is `O(N)`, which is much faster than the original `O(2^N)`.  


>When you are using recursion and received a TLE from the compiler, consider using dynamic programming to speed up your program.
