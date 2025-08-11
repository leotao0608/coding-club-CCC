Table of contents:
1. [C++ syntax](#c-syntax)
2. [C++ Statements](#c-statements)
3. [C++ Inputs and Outputs](#c-inputs-and-outputs)
4. [C++ Comments](#c-comments)
5. [C++ Variables](#c-variables)
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
https://www.w3schools.com/cpp/cpp_operators.asp