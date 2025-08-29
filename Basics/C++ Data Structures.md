# Table of Contents
1. [Array](#array)
    + [Declaration](#declararion)
    + [Initialization](#initialization)
    + [Accessing Data](#accessing-data)
    + [Input and Output](#input-and-output)
2. [String](#string)
    + [String Methods](#string-methods)
    + [Special Input for Strings](#special-input-for-strings)
3. [Vector](#vector)
# Data Structures
A **data structure** determines how data is organized so that information can be used efficiently. Each data structure supports some operations efficiently, while other operations are either inefficient or not supported at all. Since different operations are supported by each data structure, you should carefully evaluate which data structure will work best for your particular problem.

<a id="array"></a>
<br><br><br><br><br>
# Array
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.  

## Declararion
To declare an array, define the **variable type**, specify the **name** of the array followed by **square brackets** and specify the **number** of elements it should store:  
Example:  
```cpp
int a[10];  //declares an array named a that can store 10 integers.
char b[100];    //declares an array named b that can store 100 charactors
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
        a[i] = i; //this methode is more commonly used when a large amount of data needed to be assigned
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
    cin>>a[i];  //Input array a from index 1 to 50
}
```

<a id="array"></a>
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
When using string methods, we use a dot `.` to connect the string's name and the method we are using.  
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
For example, `getline(cin, str)` inputs a string named str which reads an entire line until a newline charactor is encountered.  
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

# Dynamic Array
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

## Initialization

## Input and Output
There are two ways to input values into a vector:  
1. Use normal `cin`
```cpp
int n = 100;
vector<int> a(n);
for(int i = 0; i < n; i++){
    cin >> a[i];
}
```
2. Use `push_back()`
```cpp
vector<int> a;
for(int i = 0; i < n; i++){
    int b;
    cin >> b;
    a.push_back(b); //push_back() is a vector method which pushes a value to the end of the vector.
}
```
