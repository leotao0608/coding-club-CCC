# Sorting Methods

## Static Arrays
Sorting refers to arranging items in some particular order.  
To sort static arrays, use `sort(arr, arr + N)` where $N$ is the  number of elements to be sorted. The range can also be specified by replacing `arr` ans `arr + N` with the intended range. For example, `sort(arr + 1, arr + 4)` sorts indices $[1, 4)$.
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int arr[] = {5, 1, 3, 2, 4};
	int N = 5;
	sort(arr, arr + N);
	for (int i = 0; i < N; i++)
        cout << arr[i] << " ";  // 1 2 3 4 5
	cout << endl;

	int arr2[] = {5, 1, 3, 2, 4};
	sort(arr2 + 1, arr2 + 4);
	for (int i = 0; i < N; i++)
        cout << arr2[i] << " ";  // 5 1 2 3 4
}
```
## Dynamic Arrays
In order to sort a dynamic array, use `sort(v.begin(), v.end())`. The default sort function sorts the array in ascending order. Similarly, we can specify the range. For example,`sort(v.begin() + 1, v.begin() + 4)` sorts indices $[1, 4)$.
```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	vector<int> v{5, 1, 3, 2, 4};
	sort(v.begin(), v.end());
	// Outputs 1 2 3 4 5
	for (int i : v) {
        cout << i << " ";
    }
	cout << endl;

	v = {5, 1, 3, 2, 4};
	sort(v.begin() + 1, v.begin() + 4);
	// Outputs 5 1 2 3 4
	for (int i : v) {
        cout << i << " "; 
    }
	cout << endl;
}
```
## Dynamic Arrays of Pairs & Tuples
By default, C++ pairs are sorted by first element and then second element in case of a tie.
```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	vector<pair<int, int>> v{{1, 5}, {2, 3}, {1, 2}};
	sort(v.begin(), v.end());

	/*
	 * Outputs:
	 * 1 2
	 * 1 5
	 * 2 3
	 */
	for (pair<int, int> p : v) {
        cout << p.first << " " << p.second << endl;
    }
}
```
## Practice Questions (Easy to Hard)
1. [Distinct Numbers](https://cses.fi/problemset/task/1621)
2. [Playing in a Casino](https://codeforces.com/contest/1808/problem/B)
3. [Kayaking](https://codeforces.com/contest/863/problem/B)
4. [Permutator](https://codeforces.com/gym/104520/problem/H)