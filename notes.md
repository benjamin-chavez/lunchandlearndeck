6  Notes.md
  5
  4 Dynamic vs Static Typing:
  3  - What is static typing, through the lens of dynamic typing
  2  - Software is about tradeoffs, what are the tradeoffs?
        - Development Speed, or at lease initial speed
        - Coder performance
7       - ... no other cons?
  1
  2     Pros:
  3     - As the codebase grows, it is easier for the team to maintain quick feature development and stay
  4
  5 ## Example 1a:
  6     - What is wrong with this code?
  7

```python 
data = {
  title: "Pydantic & Mypy: Runtime Meets Static Typing",
  bullets: [
    "Pydantic: Data validation and settings management using Python type annotations",
    "Runtime type checking vs mypy's static analysis",
    "Complementary tools: mypy checks at development time, Pydantic validates at runtime",
    "Type safety throughout the application lifecycle",
    "Shared type annotations - write once, validate twice"
  ],
  tabImages: [],
  slideImg: [],
},
{
  title: "Other Tools in the Python Type Checking Ecosystem",
  bullets: [
    "Pyright: Microsoft's static type checker (powers Pylance in VS Code)",
    "Pyre: Facebook's type checker with incremental checking and performance focus",
    "Cython/Mojo: Compiled extensions with static typing for performance",
    "mypy-extensions: Additional typing constructs beyond standard library",
    "typing-extensions: Backported typing features for older Python versions",
    "pytype: Google's type inferencer that works without type annotations",
    "MonkeyType: Automatic type annotation through runtime tracing"
  ],
  tabImages: ["image-1.0.svg", "image-1.1.svg", "image-1.2.svg"],
  slideImg: [],
}
```
  8 ```py
  9
 10 def my_func(loan_id):
 11     return loan_id
 12
 13 # output: my_func(loan_id): 42424242
 14
 15
 16 def my_func2(loan_id):
 17     return loan_id + 5
 18
 19
 20 if __name__ == "__main__":
 21     loan_id = "42424242"
 22
 23     my_func(loan_id)
 24     my_func2(loan_id)
 25
 26 ```
 27     - We do not have enough information about my_func()
 28     - my_func2(loan_id) attempts to add the number/integer 5 to a string. THe error is only caught at runtime:
Notes.md [+]                                                                                                        7,25           Top
-- INSERT --


