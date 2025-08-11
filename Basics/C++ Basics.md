Table of contents:
1. [C++ syntax](#c-syntax)
    + [Use of Semi-colons](#use-of-semicolons)
2. [C++ Statements](#c-statements)
3. [C++ Inputs and Outputs](#c-inputs-and-outputs)
    + [Output with `cout`](#output-with-cout)
    + [Input with `cin`](#input-with-cin)
4. [C++ Comments](#c-comments)
5. [C++ Variables](#c-variables)
    + [Declaring Variables](#declaring-variables)
    + [Variable Naming Rules](#variable-naming-rules)
    + [Assigning Values](#assigning-values)
    + [Constant Variables](#constant-variables)
    + [`auto` keyword](#auto-keyword)
6. [C++ Operators](#c-operators)
    + [Arithmetic Operators](#arithmetic-operators)
    + [`i++` and `++i`](#i-and-i)
    + [Assignment Operators](#assignment-operators)
    + [Comparison Operators](#comparison-operators)
    + [Logical Operators](#logical-operators)
7. [C++ Conditional Statements](#c-conditional-statements)
    + [`if` statement](#if-statement)
    + [`else` statement](#else-statement)
    + [`else if` statement](#else-if-statement)
    + [Short hand `if` `else` (Ternary Operator)](#short-hand-if-else-ternary-operator)
8. [C++ Loops](#c-loops)
    + [`while` Loop](#while-loop)
    + [`do while` Loop](#do-while-loop)
    + [`for` Loop](#for-loop)
    + [Ranged based `for` Loop](#ranged-based-for-loop)
    + [`break` and `continue`](#break-and-continue)
<br><br>
# C++ syntax
Start by the following code to understand the language better.
```C++
#include <iostream>
using namespace std;
int main() {
  cout << "Hello World!";
  return 0;
}
```
1. `#include <iostream>` is a header file **library** that lets us work with input and output objects.  
2. `using namespace std` means that we can use names for objects and variables from the standard library.   
    >Don't worry if you don't understand how `#include <iostream>` and `using namespace std` works. Just think of it as something that (almost) always appears in your program.  
3. Another thing that always appear in a C++ program is `int main()`. This is called a function, and `int` is its type. Any code inside its curly brackets `{}` will be executed.  
4. `cout` (pronounced "**see-out**") is an object used together with the insertion operator (`<<`) to **output/print** text. In this example, it will output "Hello World!".  
5. `return 0` ends the function.  



**Note**:
- C++ is **case-sensitive**: "cout" and "Cout" has different meaning.   
- The compiler ignores white spaces. However, multiple lines makes the code more readable.
    + White spaces include: tab(4 spaces usually), enter(a new line) and space.

### Use of Semicolons(;)
In C++, a semicolon marks the end of a complete statement (often called a statement terminator).  
It tells the compiler:
>“This instruction is done — now move on to the next one.”  

Where semi-colons are **required**:  
1. End of most executable statements
2. After variable declarations
3. After class/struct definitions
4. After typedef or using declarations

You will get used on how to use semicolons after seeing more code.

#### Try Practicing with this part of code and get familar to the language
Tips: don't forget semicolons(;) and closing bracket(})
<textarea id="code-editor" style="width:100%;height:200px;font-family:monospace;">
#include <iostream>
using namespace std;
int main() {
    cout << "Hello World";
    return 0;
}
</textarea>  
(More Syntax rules will be explained afterwards.)

<br><br>
# C++ Statements

A computer program is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called statements.

The following statement "instructs" the compiler to print the text "Hello World" to the screen:  
`cour << "Hello World";`  

Most C++ programs contain many statements.  
The statements are executed, one by one, in the same order as they are written:  
Example:  
```C++
cout << "Hello World!";
cout << "I'm learning C++!";
return 0;
```
Example explanation:  
From the example above, we have three statements:  
1. cout << "Hello World!";
2. cout << "I'm learning C++!";
3. return 0;  

The first statement is executed first (print "Hello World!" to the screen).   
Then the second statement is executed (print "I'm learning C++!" to the screen).  
And at last, the third statement is executed (end the C++ program successfully).  

<br><br>
# C++ Inputs and Outputs
**I/O** in C++ Uses Streams
+ Stream = a flow of data.
+ cin = input stream (from keyboard → program)
+ cout = output stream (from program → screen)

Both are part of the `<iostream>` library.
```C++
#include<iostream>
```
## Output with `cout`
```C++
cout << data;
```
+ `<<` is called the **insertion** operator (inserts data into the output stream).
+ "data" can be anything, from a string of charactors to a number.  
You can chain outputs:
```C++
cout << a << b << c << d;
```
You can also output a newline:
```C++
cout << endl; //endl makes a newline, or
cout << "\n"; //which also makes a newline.
```

## Input with `cin`
```C++
cin >> variable;
```
+ `>>` is the **extraction** operator (extracts data from the input stream into a variable).
Example:
```C++
int age;    //This line of code defines a new variable called age of int type. We will discuss this later.
cin >> age;
```

<br><br>
# C++ comments
Single line comments start with `//`.  
Multi-line comments start with `/*` and end with `*/`.  
Example: 
```C++
// This is a single line comment

/*
    This is a multi-line comment.
    line 2
    line 3
*/
```

<br><br>
# C++ Variables
Variables are containers for storing data values.

In C++, there are five main types of variables (defined with different keywords):  
1. `int`: stores integers (whole numbers), without decimals, such as 1, 2, -5, 100.
2. `double`: stores floating point numbers, with decimals, such as 1.5, -4.8, 3.14159
3. `char`: stores single characters, such as 'a', 'B', '.', '-'. Char values are surrounded by **single quotes**(`''`).
4. `string`: stores a list of charactors, such as "Hello World", "bewivbwiv", "8h6+f5-!", "aa". String values are surrounded by **double quotes**(`""`).
5. `bool`: stores values with two states: `true` or `false` (or `1` and `0`)

## Declaring Variables
To create a variable, specify the type and name (and assign it a value):
```C++
type variableName;
type variableName = value;
//type is one of the C++ types, such as int. variableName is the name of the variable, such as a or x.
//The equal sign assigns the value to the variable.
```
You can also declare two or more variables of the same type at the same time.
```C++
char var1, var2, var3.//variables are seperated bt commas.
```

## Variable Naming Rules
1. Variable names can only contain letters (A-Z, a-z), digits (0-9), and underscore (_).
2. The first character **cannot be** a digit.
3. C++ variable names are case sensitive. `value`, `Value`, and `VALUE` are three different variables.
4. Spaces, punctuation, or special symbols like `@`, `#`, `!` are **not** **allowed**. Underscore `_` **is allowed** to separate words.
5. You cannot use keywords for variable names, such as `int`, `for`, `return`...
Examples:
```C++
int _score;            
int age;
double count1;
```
**Invalid** examples:  
- `1num`(have a digit in the front),  
- `class`(is a keyword),  
- `first name`(have spaces between). 

## Assigning Values
After declaring a variable, values can be assigned to it.  
For example:
```C++
int a = 10; //Declaring an int variable called a and assigned a value of 10 to it.
cout << a;  //Output: 10
a = 5;      //assign 5 to a
cout << a;  //Output: 5
```
## Constant Variables
When you do not want the value of a variable to be changed, you can use the keyword `const` infront of the type of variable when declaring it.
For example:
```C++
const int a = 10; //a will always be 10.
a = 5;            //error: assignment of read-only variable 'a'
```

## `auto` keyword
The `auto` keyword automatically detects the type of a variable based on the value you assign to it.
For example, 
```C++
int a = 10; //Instead of writing int, you can write auto
auto a = 10; //which works the same
```

<br><br>
# C++ Operators
Operators are used to perform operations on variables and values.

## Arithmetic Operators
Arithmetic operators are used to perform common mathematical operations.  
Some common operators include:
| Operator | Name          | Description                                  |
|----------|--------------|----------------------------------------------|
| `+`      | Addition     | Adds together two values                     |
| `-`      | Subtraction  | Subtracts one value from another              |
| `*`      | Multiplication | Multiplies two values                        |
| `/`      | Division     | Divides one value by another                  |
| `%`      | Modulus      | Returns the division remainder                |
| `++`     | Increment    | Increases the value of a variable by 1        |
| `--`     | Decrement    | Decreases the value of a variable by 1        |

Examples:
```C++
#include <iostream>
using namespace std;
int main() {
  int a, b;
  a = 5, b = 10;
  int c = a + b;
  cout << c << endl;		//15
  c = a - b;
  cout<<c<<endl;            //-5
  c = a * b;
  cout << c << endl;		//50
  c = b / a;
  cout << c << endl;		//2
  int x = 13, y = 4;
  c = x % y;
  cout << c << endl;		//1
  c++;
  cout << c << endl;		//2
  c--;
  cout << c << endl;		//1
  return 0;
}
```

### `i++` and `++i`
`++` means increment by 1. However, although `i++` and `++i` both increases i by 1, they are different in some cases.
#### `++i` - Pre-increment
Order of operations:
- Increase i by 1.
- Use the new value of i.  
For example:
```C++
int x = 5;
y = ++x;    //x first increase by 1, then is assigned to y
cout << y;  //Output: 6
```
#### `i++` - Post increment
Order of operations:
- Use the current value of i.
- Increase i by 1 afterward.
For example:
```C++
int x = 5;
y = x++;    //the value of x is assigned to y first, then increase by 1
cout << y;  //Output: 5
```

## Assignment Operators
Assignment operators are used to assign values to variables.  
Here are some common assignment operators:  
| Operator | Example  | Same As      |
|----------|----------|--------------|
| `=`      | `x = 5`  | `x = 5`      |
| `+=`     | `x += 3` | `x = x + 3`  |
| `-=`     | `x -= 3` | `x = x - 3`  |
| `*=`     | `x *= 3` | `x = x * 3`  |
| `/=`     | `x /= 3` | `x = x / 3`  |
| `%=`     | `x %= 3` | `x = x % 3`  |
Examples:
```C++
#include <iostream>
using namespace std;
int main() {
    int a = 5;
    int b = 3;
    a += b;  // a = a + b
    cout << a << endl; // 8
    a -= b;  // a = a - b
    cout << a << endl; // 5
    a *= b;  // a = a * b
    cout << a << endl; // 15
    a /= b;  // a = a / b
    cout << a << endl; // 5
    a %= b;  // a = a % b
    cout << a << endl; // 2
    return 0;
}
```

## Comparison Operators
Comparison operators are used to compare two values (or variables).  
The **return value** of a comparison is either `1` or `0`, which means `true` (1) or `false` (0), which are **boolean values**
| Operator | Example                       | Example     |
|----------|--------------------------------|-------------|
| `==`     | Equal to                      | `x == y`    |
| `!=`     | Not equal                     | `x != y`    |
| `>`      | Greater than                  | `x > y`     |
| `<`      | Less than                     | `x < y`     |
| `>=`     | Greater than or equal to      | `x >= y`    |
| `<=`     | Less than or equal to         | `x <= y`    |

Example:  
```C++
#include <iostream>
using namespace std;
int main() {
    int x = 5;
    int y = 10;
    cout << (x == y) << endl;  // Equal to -> 0 (false)
    cout << (x != y) << endl;  // Not equal -> 1 (true)
    cout << (x > y) << endl;   // Greater than -> 0 (false)
    cout << (x < y) << endl;   // Less than -> 1 (true)
    cout << (x >= y) << endl;  // Greater than or equal to -> 0 (false)
    cout << (x <= y) << endl;  // Less than or equal to -> 1 (true)
    return 0;
}

```

## Logical Operators
Logical operators are used to determine the logic between variables or values.  
Here are three logical operators:
| Operator | Name        | Description                                         | Example                     |
|----------|-------------|-----------------------------------------------------|-----------------------------|
| `&&`     | Logical and | Returns true if both statements are true            | `x < 5 && x < 10`           |
| `||`     | Logical or  | Returns true if one of the statements is true        | `x < 5 || x < 4`            |
| `!`      | Logical not | Reverse the result, returns false if result is true  | `!(x < 5 && x < 10)`        |
Example:  
```C++
#include <iostream>
using namespace std;
int main() {
    int x = 5;
    int y = 10;
    // Logical AND (&&)
    cout << (x < 5 && x < 10) << endl;  // 0 (false, because x < 5 is false)
    cout << (x < 6 && y > 5) << endl;   // 1 (true, both conditions are true)
    // Logical OR (||)
    cout << (x < 5 || x < 4) << endl;   // 0 (false, both conditions are false)
    cout << (x < 6 || y < 5) << endl;   // 1 (true, first condition is true)
    // Logical NOT (!)
    cout << !(x < 5 && x < 10) << endl; // 1 (true, negation of false)
    cout << !(x < 6 && y > 5) << endl;  // 0 (false, negation of true)
    return 0;
}
```

# C++ Conditional statements
A **conditional statement** is a programming construct that lets a program make decisions by executing different code blocks depending on whether a given condition is true or false.
## `if` statement
Use the `if` statement to specify a block of C++ code to be executed if a condition is true.
```C++
if(condition){
    // block of code to be executed if the condition is true
}
```
Example 1:
```C++
if (20 > 18) {
  cout << "20 is greater than 18";
}
```
Example 2:
```C++
int x = 20;
int y = 18;
if (x > y) {
  cout << "x is greater than y";
}
```

## `else` statement
Use the `else` statement to specify a block of code to be executed if the condition is false.
```C++
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```
Note that else cannot appear alone and must be behind an if statement.
Example:
```C++
int time = 20;
if (time < 18) {
  cout << "Good day.";
} else {
  cout << "Good evening.";
}
// Outputs "Good evening."
```

## `else if` statement
Use the `else if` statement to specify a new condition if the first condition is false.
```C++
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
```
There can be multiple `else if` statements but only one pair of `if` and `else` statements.
Example:
```C++
int time = 22;
if (time < 10) {
  cout << "Good morning.";
} else if (time < 20) {
  cout << "Good day.";
} else {
  cout << "Good evening.";
}
// Outputs "Good evening."
```

## Short hand `if` `else` (Ternary Operator)
There is also a short-hand if else, which is known as the ternary operator because it consists of three operands.  
It can be used to replace multiple lines of code with a single line, and is often used to replace simple `if` `else` statements:  
`variable = (condition) ? expressionTrue : expressionFalse;`  
Instead of writing:
```C++
int time = 20;
if (time < 18) {
  cout << "Good day.";
} else {
  cout << "Good evening.";
}
```
You can simply write:
```C++
int time = 20;
string result = (time < 18) ? "Good day." : "Good evening.";
cout << result;
```

<br><br>
# C++ Loops
Loops can execute a block of code as long as a specified condition is reached.  
Loops are handy because they save time, reduce errors, and they make code more readable.  
## `while` Loop
The `while` loop loops through a block of code as long as a specified condition is `true`:
```C++
while (condition) {
  // code block to be executed if condition is true
}
```
In the example below, the code in the loop will run, over and over again, as long as a variable (`i`) is less than 5:
```C++
int i = 0;
while (i < 5) {
  cout << i << "\n";
  i++;
}
```
Note: Do not forget to increase the variable used in the condition (`i++`), otherwise the loop will never end!  
>`i` is commonly used in loops, which stands for 'iterator' and 'index'.

## `do while` Loop
The `do while` loop is a variant of the `while` loop. This loop will execute the code block once, before checking if the condition is true. Then it will repeat the loop as long as the condition is true.
```C++
do {
  // code block to be executed
}
while (condition);
```
Note: The semicolon `;` after the while condition is **required**!

Example:
```C++
int i = 0;
do {
  cout << i << "\n";
  i++;
}
while (i < 5);
```
The `do while` loop runs at least once even if the condition is false from the begining.
This is different from a regular `while` loop, which would skip the loop entirely if the condition is false at the start.  
<br>
We usually use `while` or `do while` loops when we are given a condition and don't know exactly how many times we want to run the loop for.

## `for` Loop
When you know exactly how many times you want to loop through a block of code, use the for `loop` instead of a `while` loop.
```C++
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```
- Statement 1 is executed (one time) before the execution of the code block.
- Statement 2 defines the condition for executing the code block.
- Statement 3 is executed (every time) after the code block has been executed.
Example 1:
```C++
for (int i = 0; i <  n; i++) {
  cout << i << "\n";
}
```
- Statement 1 sets a variable before the loop starts: `int i = 0`
- Statement 2 defines the condition for the loop to run: `i < n`. If the condition is true, the loop will start over again, if it is false, the loop will end.
- Statement 3 increases a value each time the code block in the loop has been executed: `i++`  

Example 2: 
```C++
for (int i = 0; i <= 10; i = i + 2) {
  cout << i << "\n";          // All even numbers between 0~10 are printed.
}
```

Example 3:
```C++
int sum = 0;
for (int i = 1; i <= 5; i++) {
  sum = sum + i;
}
cout << "Sum is " << sum; //This example calculates the sum of numbers from 1 to 5:
```

Example 4:
```C++
for (int i = 5; i > 0; i--) {
  cout << i << "\n";    //This example prints a countdown from 5 to 1:
}
```
## Ranged based `for` Loop
```C++
for (type variableName : arrayName) {
  // code block to be executed
}
```
Example:
```C++
int myNumbers[5] = {10, 20, 30, 40, 50};
for (int i : myNumbers) {
  cout << i << " ";
}
//Output: 10 20 30 40 50
```
## `break` and `continue`
The `break` statement can also be used to jump out of a loop.
Example:
```C++
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;          //In this example, the loop breaks at i == 4 and exits the loop(the loops ends)
  }
  cout << i << " ";
}
//Output: 0 1 2 3
```
The `continue` statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
```C++
for (int i = 1; i <= 10; i++) {
  if (i == 4) {
    continue;         //This example skips the value of 4:
  }
  cout << i << "\n";
}
// Output: 1 2 3 5 6 7 8 9 10
```