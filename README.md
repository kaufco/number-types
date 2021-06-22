# @kobayami/number-types

## Installation

```sh
npm install --save @kobayami/number-types
```

## Version and License

- Latest version: 1.0.0
- License: [MIT](https://kobayami.github.io/number-types/LICENSE.md)
- [Changes](https://kobayami.github.io/number-types/CHANGES.md)

## Summary

A minor package that provides the type aliases `int`, `long`, `float` and `double` for number types in TypeScript.
The types `int`, `float` and `double` are aliases for `number`, `long` is an alias for `bigInt`.

While the TypeScript compiler cannot enforce the associated number ranges (e.g., restricting `int` to the 32 bit signed integer range),
these type aliases allow for a more precise notation of number types.
This serves documentation purposes and makes the code more readable.
For example, a variable that represents an index could be declared an `int`, 
while a variable used for computations could be declared a `double`.

Also, this may simplify things if code should later be ported from TypeScript to some other language.

## Usage Example

```ts
import { int, double } from "@kobayami/number-types";

function getElementAt<T>(array: T[], index: int): T {
    return array[index];
}

function getDistance(velocity: double, time: double): double {
    return velocity * time;
}
```

## See Also

- [API Documentation](https://kobayami.github.io/number-types/docs/modules.html)
- [Project Homepage](https://kobayami.github.io/number-types)
- [Project on GitHub](https://github.com/kobayami/number-types)
- [Issues](https://github.com/kobayami/number-types/issues)
