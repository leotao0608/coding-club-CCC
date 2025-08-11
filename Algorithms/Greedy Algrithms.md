# Greedy Algorithms

A **greedy** algorithm constructs a solution to the problem by always making a choice that looks the best at the moment. A greedy algorithm never takes back its choices, but directly constructs the final solution. For this reason, greedy algorithms are usually very efficient.  
Greedy does not refer to a single algorithm, but rather a way of thinking that is applied to problems; there's no one way to do greedy algorithms. Hence, we use a selection of well-known examples to help you understand the greedy paradigm.
***
**Try this problem to get a general idea of greedy algrithm.**  
[[Mad Scientist]](http://www.usaco.org/index.php?page=viewproblem2&cpid=1012)  

In this problem, the correct greedy solution is to continually flip the longest possible ranges of mismatching cows.

## Implementation
### Time complexity: $O(N)$
<pre>
#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;
int main() {
	int cow_num;
	cin >> cow_num;
	vector<char> a(cow_num);
	for (char &c : a) { cin >> c; }
	vector<char> b(cow_num);
	for (char &c : b) { cin >> c; }

	// diff[i] is true if the cows differ at the ith position
	// notice that there's an extra false at the beginning
	vector<bool> diff(cow_num + 1);
	for (int i = 0; i < cow_num; i++) { 
        diff[i + 1] = a[i] != b[i];
    }

	/*
	 * count the number of times [false, true] occurs in diff
	 * this is equivalent to the number of continous segments of trues
	 * that extra false at the beginning comes in handy here,
	 * since if we didn't have it we've have to have an edge case for
	 * the first segment that doesn't have a preceding false
	 */
	int min_flips = 0;
	for (int i = 0; i < cow_num; i++) {
		if (!diff[i] && diff[i + 1]) { min_flips++; }
	}
	cout << min_flips << endl;
}
</pre>
Note that not all greedy problems necessarily require mathematical proofs of correctness. It is often sufficient to intuitively convince yourself your algorithm is correct.
Sometimes, if the algorithm is easy enough to implement, you don't even need to convince yourself it's correct; just code it and see if it passes.

## Practice Problems
1. [Watching Mooloo](http://www.usaco.org/index.php?page=viewproblem2&cpid=1301)
2. [Cow Tipping](http://www.usaco.org/index.php?page=viewproblem2&cpid=689)
3. [Even More Odd Photos](http://www.usaco.org/index.php?page=viewproblem2&cpid=1084)