# TypeScript Type System Limitation

This repository demonstrates a limitation of TypeScript's type system:  not all runtime errors are caught at compile time.  Specifically, the example showcases a function expecting numerical inputs, which is called with a string and a number. This would lead to unexpected behavior (likely string concatenation) during execution, but the TypeScript compiler fails to flag this as an error.

## Bug Description:
The `add` function is defined to take two numbers (`number`) as input and return a number.  However, the code calls it with a string and a number. While this results in a runtime error (type coercion might cause unexpected results), the TypeScript compiler doesn't detect this type mismatch before running the code.

## Solution:
Implementing stricter type checks or using runtime type validation can help mitigate this issue.