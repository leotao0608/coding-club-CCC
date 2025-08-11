Table of contents:
1. [C++ syntax](#c-syntax)
2. [C++ Statements](#c-statements)
3. [C++ Inputs and Outputs](#c-inputs-and-outputs)
4. [C++ Comments](#c-comments)
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