# Table of Contents
1. [Array](#array)
2. [String](#string)
3. [Vector](#vector)
4. [Pair and Tuple](#pair-and-tuple)
5. [Queue](#queue)
6. [Deque](#deque)
7. [Stack](#stack)
8. [Priority Queue](#priority-queue)
# Data Structures
A **data structure** determines how data is organized so that information can be used efficiently. Each data structure supports some operations efficiently, while other operations are either inefficient or not supported at all. Since different operations are supported by each data structure, you should carefully evaluate which data structure will work best for your particular problem.

<a id="array"></a>
<br><br><br><br><br>
# Array
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.  

## Declaration
To declare an array, define the **variable type**, specify the **name** of the array followed by **square brackets** and specify the **number** of elements it should store:  
Example:  
```cpp
int a[10];  //declares an array named a that can store 10 integers.
char b[100];    //declares an array named b that can store 100 characters
double decimals[1];  //declares an array named decimals that can store 1 decimal
```
>Arrays are fixed in size, meaning the number of elements must be known before declaration.

## Initialization
1. You can assign values when declaring an array  
    Example:
    ```cpp
    int arr[5] = {1, 2, 3, 4, 5}; //arr[0] = 1, arr[1] = 2, ..., arr[4] = 5
    double b[100] = {0};  //all values are set to 0
    ```
2. You can assign values after declaration  
    Example:
    ```cpp
    int a[100];
    for(int i = 0; i < 100; i++){
        a[i] = i; //This method is more commonly used when a large amount of data needs to be assigned
        // or when the values are changing
    }
    ```
    or you can assign a value to an array element by its index.  
    Example:
    ```cpp
    char c[5];
    c[3] = 'h'; //the value of c at index 3 is 'h'.
    ```

## Accessing Data

Array elements are accessed using their index (**starting from 0**).  
> Most programming languages like C++ are 0-based indexing.  
Example:
```cpp
int a[5] = {2, 35, 845, 123, 0};
cout << a[2];  
//Output: 845
int b = a[4];   //store the value of a[4] in b.
cout << b;
//Output: 0
```

## Input and Output
Just like regular variables, we use `cin` and `cout` to input and output an array.
Example:
```cpp
int a[3];
cin >> a[0] >> a[1] >> a[2];
cout << a[2];
```
However, when there are too many values to input, we can use loops.
```cpp
int a[101];
for(int i=1;i<=5;i++){
    cin>>a[i];  //Input array a from index 1 to 5
}
```

<a id="string"></a>
<br><br><br><br><br>
# String
A string in C++ is a sequence of characters. Unlike arrays of char, strings in C++ are dynamic, meaning their size can change. The C++ Standard Library provides the `std::string` class to handle text efficiently. 
To use a string, include the `<string>` library.   

```cpp
#include<iostream>
#include<string>    //string library
using namespace std;
int main(){
    
}
```
>Note that in C++ we use double quotes `""` for **string** and single quotes `''`for **char**.
## String Methods
When using string methods, we use the dot operator (`.`) to call methods on a string object.
For example, `str.length()`.  
### Here are some common string methods:
| Method | Description | Example |
|--------|-------------|---------|
| `size()` / `length()` | Returns the number of characters in the string | `s.size();` |
| `empty()` | Checks whether the string is empty | `s.empty();` |
| `append(string)` / `+` | Appends another string | `s.append(" World"); s = s + s1;` |
| `insert(pos, string)` | Inserts a string at a given position | `s.insert(5, ",");` |
| `erase(pos, len)` | Erases `len` characters starting at `pos` | `s.erase(5, 2);` |
| `replace(pos, len, string)` | Replaces `len` characters starting at `pos` with another string | `s.replace(6, 5, "C++");` |
| `substr(pos, len)` | Returns a substring starting at `pos` with length `len` | `s.substr(0, 5);` |
| `find(string)` | Returns the first position of the substring (or `std::string::npos` if not found) | `s.find("C++");` |

## Special Input for Strings
When entering a line that contains many spaces, `cin >> str;` only reads the first word, stopping at the first space.  
In order to store the whole line into a string, we use the `getline()` function.    
For example, `getline(cin, str)` reads an entire line from input into the string `str` until a newline character is encountered.  
Example: (using `cin`)
```cpp
#include<iostream>
#include<string>
using namespace std;
int main(){
    string s;
    cin>>s;
    //Input: I am entering a string.
    cout<<s;
    //Output: I
}
```
Example: (using `getline`)
```cpp
#include<iostream>
#include<string>
using namespace std;
int main(){
    string s;
    getline(cin, s);
    //Input: I am entering a string.
    cout<<s;
    //Output: I am entering a string.
}
```

## Dynamic Array
A **dynamic array** is an array whose size can be changed during the execution of
the program. The most popular dynamic array in C++ is the `vector` structure,
which can be used almost like an ordinary array.
<a id="vector"></a>
<br><br><br><br><br>

# Vector
In C++, a vector is a dynamic array provided by the C++ Standard Template Library (STL). Unlike regular arrays, a vector can change its size automatically when elements are added or removed.  

When using a vector, we need to include the `vector` library, using `#include <vector>`.  

## Declaration
To declare a vector, use the `vector` keyword first, followed by a pair of angle brackets `<>` with the type of the vector(`int`, `char`, `string`, `double`, `float` ...) inside it. After that, we define the name of the vector.
Example:
```cpp
vector<int> vec;    //declaring a vector of type int called vec
```

## Input and Output
There are two common ways to fill a vector with values:
1. Initialize with a fixed size and assign values by index(`cin`)
```cpp
int n = 100;
vector<int> a(n);
for(int i = 0; i < n; i++){
    cin >> a[i];
}
```
2. Start with an empty vector and add values dynamically using `push_back()`
```cpp
vector<int> a;
for(int i = 0; i < n; i++){
    int b;
    cin >> b;
    a.push_back(b); //push_back() is a vector method which pushes a value to the end of the vector.
}
```

## Vector Methods
**Here are some common vector methods and usages:**
| Method / Function           | Description |
|-----------------------------|-------------|
| `vector<type> v;`           | Declare an empty vector of given type named v|
| `vector<Type> v(n);`        | Declare a vector with size `n` and default values |
| `vector<Type> v(n, m);`     | Declare a vector with size `n` and initialize each element with value `m` |
| `v.push_back(x);`           | Add element `x` to the end of the vector |
| `v.pop_back();`             | Remove the last element of the vector |
| `v.size();`                 | Returns the number of elements in the vector |
| `v.empty();`                | Returns `true` if vector has no elements |
| `v.clear();`                | Removes all elements from the vector |
| `v.resize(n);`              | Changes the size of the vector to `n` |
| `v[i]`                      | Access element at index `i` (0-based) |
| `v.front();`                | Access the first element |
| `v.back();`                 | Access the last element |
| `v.begin();`                | Returns iterator to the first element |
| `v.end();`                  | Returns iterator to one past the last element |
| `sort(v.begin(), v.end());` | Sort vector in **ascending order** |
| `sort(v.begin(), v.end(), greater<int>());` | Sort vector in **descending order** |
| `for(int i=0;i<v.size();i++){}` | Standard way to iterate through a vector using indices. `i` represents the index of each element. |
| `for(auto i : v){}` | Range-based for loop. `i` represents each element of the vector directly. |

<a id="pair-and-tuple"></a>
<br><br><br><br><br>

# Pair and Tuple
**`pair`**   
A `pair` is a simple data structure that stores **exactly two values**, possibly of different types, together in a single object. It is commonly used to group two related values.  

**`tuple`**   
A `tuple` is a data structure that can store **any number of values**, each potentially of a different type, in a single object. Tuples are more flexible than pairs and can hold more than two elements.


```cpp
#include<utility>   //library for pair
#include<tuple>     //library for tuple
#include<iostream>
using namespace std;
int main(){
    //pair<type1, type2> name;
    pair<int, int> a;
    //tuple<type1, type2, type3, ...>   
    tuple<int, char, string> b;

    //assigning values
    a = make_pair(10, 20);          // Use "make_pair" to make a pair
    b = make_tuple(4, 'e', "C++");  // Use "make_tuple" to make a tuple

    //accessing values
    int value1, value2;
    //pair
    value1 = a.first;   //value1 = 10
    value2 = a.second;  //value2 = 20
    //tuple
    int value3; char value4; string value5;
    value3 = get<0>(b); // 4
    value4 = get<1>(b); // 'e'
    value5 = get<2>(b); // "C++"
    //put the index of the tuple between <>
}
```
**More Common Usages**  
Just like `int` or `string`, `pair` and `tuple` are data structures. They are often used together with vectors to store multiple pieces of related data:  

- `vector<pair<type1, type2>>` → a vector where each element is a pair  
- `vector<tuple<type1, type2, type3>>` → a vector where each element is a tuple  

Using them inside a vector makes it possible to efficiently store and manage more complex information.
<a id="queue"></a>
<br><br><br><br><br>
# Queue
`queue`: A queue is a linear data structure that follows the FIFO (First In, First Out) principle, meaning **the first element added is the first one to be removed.**   

## Declaration
```cpp
#include <queue>        // Use <queue> library
using namespace std;
int main(){
    queue<int> q;
}
```
## Operations
```cpp
q.push(value); // add a variable to the back of the queue
q.pop();       // remove the element from the front of the queue
```
## Accessing Values:(can only access the front and back element)
```cpp
q.front();
q.back();
```
## Output Example
```cpp
while(!q.empty()){      // check if queue is not empty
    cout<<q.front();
    q.pop();
}
```

<a id="deque"></a>
<br><br><br><br><br>
# Deque
`deque`: A deque (double-ended queue) is a linear data structure that allows insertion and deletion from **both the front and the back**.

## Declaration
```cpp
#include <deque>
using namespace std;
int main(){
    deque<int> d;
}
```
## Operations
```cpp
d.push_back(value); // add element to the back
d.push_front(value); // add element to the front
d.pop_back(); // remove element from the back
d.pop_front(); // remove element from the front
```
## Accessing Elements
```cpp
d[index]; // access element at position index
d.at(index); // access element at position index with bounds checking
d.front(); // access the front element
d.back(); // access the back element
```
## Output Example
```cpp
for(auto i : d){
    cout << i << " ";
}
```
<a id="stack"></a>
<br><br><br><br><br>
# Stack
`stack`: A stack is a linear data structure that allows adding or removing elements **only at the top** (LIFO: Last In, First Out).

## Declaration
```cpp
#include <stack>
using namespace std;
int main(){
    stack<int> s;
}
```
## Operations
```cpp
s.push(value); // add element to the top
s.pop(); // remove the top element
```
## Accessing Elements (can only access top element)
```cpp
s.top();
```
## Output Example
```cpp
while(!s.empty()){
    cout << s.top() << " ";
    s.pop();
}
```
<a id="priority-queue"></a>
<br><br><br><br><br>
# Priority Queue
`priority_queue`: A priority_queue is a data structure that **always keeps the largest (or smallest) element at the top**, automatically sorting elements whenever a new element is added.

## Declaration
```cpp
#include <queue>
using namespace std;
int main(){
    priority_queue<int> pq; // decreasing order (default)
    priority_queue<int, vector<int>, greater<int>> pq_inc; // increasing order
}
```
## Operations
```cpp
pq.push(value); // add an element
pq.pop(); // remove the top element
```
## Element Access (can only access top element)
```cpp
pq.top();
```
## Output Example:
```cpp
while(!pq.empty()){
    cout << pq.top() << " ";
    pq.pop();
}
```