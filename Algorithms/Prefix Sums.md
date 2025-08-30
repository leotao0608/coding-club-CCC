# Prefix Sums
Let's say we have a one-indexed integer array `arr` of size `N` and we want to compute the value of
```
arr[a] + arr[a + 1] + ... + arr[b]
```
for `Q` different pairs `(a,b)` satisfying `1 <= a <= b <= N`. We'll use the following example with `N = 6`:  

| Index `i` | 1 | 2 | 3 | 4 | 5 | 6 |
|------------|---|---|---|---|---|---|
| `arr[i]`  | 1 | 6 | 4 | 2 | 5 | 3 |

Naively, for every query, we can iterate through all entries from index `a` to index `b` to add them up. Since we have `Q` queries and each query requires a maximum of `O(N)` operations to calculate the sum, our total time complexity is `O(NQ)`. For most problems of this nature, the constraints will be `N, Q <= 10^5`, so `NQ` is on the order of `10^10`. This is not acceptable; it will almost certainly exceed the time limit.

Instead, we can use **prefix sums** to process these array sum queries. We designate a prefix sum array `prefix`. First, because we're 1-indexing the array, set `prefix[0] = 0`, then for indices `k` such that `1 <= k <= N`, define the prefix sum array as follows:
```
prefix[k] = arr[1] + arr[2] + ... + arr[k]
```
Basically, what this means is that the element at index `k` of the prefix sum array stores **the sum of all the elements in the original array from index `1` up to `k`**. This can be calculated easily in `O(N)` by the following formula for each `1 <= k <= N`:
```
prefix[k] = prefix[k-1] + arr[k]
```
For the example case, our prefix sum array looks like this:

|  Index `i`    | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---------------|---|---|---|---|---|---|---|
| `arr[i]`      |   | 1 | 6 | 4 | 2 | 5 | 3 |
| `prefix[i]`   | 0 | 1 | 7 | 11 | 13 | 18 | 21 |

Now, when we want to query for the sum of the elements of `arr` between
(1-indexed) indices `a` and `b` inclusive, we can use the following formula:
```
arr[a] + arr[a + 1] + ... + arr[b] = prefix[b] - prefix[a-1]
```
Let's do an example query and find the subarray sum between indices `a = 2` and `b = 5`, inclusive, in the 1-indexed 
`arr`. From looking at the original array, we see that this is
```
6 + 4 + 2 + 5 = 17
```
Using prefix sums, 
```
prefix[5] − prefix[2 - 1] = 18 − 1 = 17.
```

## Practice Questions
1. [Breed Counting](http://www.usaco.org/index.php?page=viewproblem2&cpid=572)
2. [Subarray Sums II](https://cses.fi/problemset/task/1661)
3. [Good Subarrays](https://codeforces.com/contest/1398/problem/C)

Sample solution for Question 1:
```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
	freopen("bcount.in", "r", stdin);   //In some past problems, the inputs/outputs were provided through files,
    freopen("bcount.out", "w", stdout); //Using freopen makes it easy redirect input from a file  and output to another file. In this case, bcount is the file name provided by the question. Use .in for input and .out for output.
	int N, Q;
	cin>>N>>Q;
	int a[N+1];
	int p1[N+10], p2[N+10], p3[N+10];
	for(int i=1;i<=N;i++){
		cin>>a[i];
	}
	p1[0] = p2[0] = p3[0] = 0;
	for(int i=1;i<=N;i++){
		if(a[i] == 1){
			p1[i] = p1[i-1]+1;
		}else{
			p1[i] = p1[i-1];
		}
		if(a[i] == 2){
			p2[i] = p2[i-1]+1;
		}else{
			p2[i] = p2[i-1];
		}		
		if(a[i] == 3){
			p3[i] = p3[i-1]+1;
		}else{
			p3[i] = p3[i-1];
		}
	}
	for(int i=0;i<Q;i++){
		int a, b;
		cin>>a>>b;
		cout<<p1[b]-p1[a-1]<<" "<<p2[b]-p2[a-1]<<" "<<p3[b]-p3[a-1]<<endl;
	}
	return 0;
}
```