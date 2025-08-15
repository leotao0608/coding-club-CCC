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
```cpp
>A function can be called unlimited times
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
>Note: all functions must be defined after the `main` function
