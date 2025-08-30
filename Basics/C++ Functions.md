# Functions
A function is a block of code which only runs when it is called.  
You can pass data, known as parameters, into a function.  
Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times.  

# 1. Declare a Function
C++ provides some pre-defined functions, such as `main()`, which is used to execute code. But you can also create your own functions to perform certain actions.  
To declare(create) a function, put the type of the function in the front, specify the name of the function, followed by parentheses ():  
```cpp
type functionName(){
    // code to be executed
}
```
1. `type` is where you put the type of the function
2. `functionName()` is the name of the function  
3. The name of the function is followed by parentheses `()`.
4. The code to be executed is surrounded by the curly brackets `{}`.  

>In most cases, functions should have unique names.
>In C++, functions must be declared before they are used, or else the compiler doesn’t know they exist.
There are two ways:  
- Define the function before `main()`.(Must commonly used.)
- OR write a prototype before `main()` and the definition after.

# 2. Call a function
Declared functions are not executed automaticly. They are "saved for later use", and will only be executed when called upon.  
To call a function, write the function's name followed by two parentheses `()` and a semicolon `;`.  

In the following example, myFunction() is used to print a text when it is called:
```cpp
void myFunction() {             // void means that the function doesn't have a return value. You will learn about this later
  cout << "Function executed.";
}

int main() {
  myFunction(); // call the function
  return 0;
}

// Output: "Function executed."
```
>A function can be called unlimited times
```cpp
void myFunction() {       
  cout << "Function executed.";
}

int main() {
  myFunction(); 
  myFunction(); 
  myFunction(); 
  return 0;
}

// Output: "Function executed.Function executed.Function executed."
```

# 3. Function Parameters
Information can be passed to functions as a parameter. Parameters act as variables inside the function.  
Parameters are specified after the function name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma `,`.
```cpp
int functionName(type parameter1, type parameter2, type parameter 3){
  //The example includes a function with three parameters
}
```
Example:
```cpp
int adding(int a, int b){
  int c = a + b;      //parameters 'a' and 'b' act as variables inside function "adding"
  return c;
}
```
## Global and Local Variables 
### Global Variables
- A **global variable** is declared `outside of all functions`, usually at the top of a program file.
- It can be accessed **by any function** in the program after its declaration.
### Local Variables
- A local variable is declared **inside a function** or **a block of code**, inside `{}`.
- It can be accessed only **within that function or block**.  

Example:
```cpp
#include <iostream>
using namespace std;

int globalVar = 100;   // Global variable (accessible anywhere after this point)


void printValues() {
    int localVarFunc = 20;   // Local variable inside printValues

    cout << globalVar << endl;      // Correct
    cout << localVarFunc << endl;  // Correct

    // cout << localVarMain;  // Error: localVarMain is not accessible here
}

int main() {
    int localVarMain = 50;   // Local variable inside main

    cout << globalVar << endl;      // Correct
    cout << localVarMain << endl;  // Correct

    printValues();

    // cout << localVarFunc;  // Error: localVarFunc is not accessible in main
    return 0;
}
```
# 4. Return Values
The `void` keyword in the previous examples, indicates that the function do not return a value. If you want the function to return a value, you can use the data type (such as `int`, `char`, `string`, etc.) according to the type of value you want to return, and use the `return` keyword inside the function.  
Example 1:
```cpp
int myFunction(int x) {
  return 5 + x;             //return 8
}

int main() {
  cout << myFunction(3);    //Ouput: 8
  return 0;
}
```
Example 2:
```cpp
void greeting(string name){
  cout<<"Hello, "<<name<<'.';    //Output: "Hello, Tom."
  //void functions have no return value
}

int main(){
  greeting("Tom");
}
```
## C++ Reference
A reference variable is an alias for an existing variable. It is created using the `&` operator.  
```cpp
string food = "Pizza";  // food variable
string &meal = food;    // reference to food
```
Now, you can use either `food` or `meal` to refer to the same value, "Pizza".   

When changing the value of a reference, the two variables change at the same time.  
Example: 
```cpp
string food = "Pizza"; // food variable
string &meal = food;   // reference to food

meal = "Burger"; // changes both meal and food

cout << food; // Output: Burger
cout << meal; // Output: Burger
```

# 5. Recursion
Recursion is the technique of making a function call itself.  
This technique provides a way to break complicated problems down into simple problems which are easier to solve.  

### Two Key Rules of Recursion

1. **Base Case**: The condition where the function stops calling itself. (Without this, recursion will run forever and cause a crash.)

2. **Recursive Case**: The step where the function calls itself with a simpler or smaller problem, moving closer to the base case.

**Example 1: Count Down**  
```cpp
#include <iostream>
using namespace std;
void countdown(int n) {
    if (n == 0) {               // Base case
        cout << "Exit" << endl;
        return;
    }
    cout << n << endl;          // Print current value
    countdown(n - 1);           // Recursive case: smaller problem
}
int main() {
    countdown(5);
    return 0;
}
/* Output:
5
4
3
2
1
Exit
*/
```
**Example 2: Factorial**  
Mathmatical Defination:
```
n! = n * (n - 1) * (n - 2) * (n - 3) * ... * 1
```
Recursive Function:
```cpp
int factorial(int n) {
    if (n == 1) return 1;   // Base case
    return n * factorial(n - 1);      // Recursive case
}
```
Explanation for `factorial(5)`:
```
factorial(5)
= 5 * factorial(4)
= 5 * (4 * factorial(3))
= 5 * (4 * (3 * factorial(2)))
= 5 * (4 * (3 * (2 * factorial(1))))
= 5 * 4 * 3 * 2 * 1
= 120
```