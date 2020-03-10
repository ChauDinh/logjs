# A Programming Language

![Logo](./logo.png)

## What we will cover?

- Parsing

- Eveluator

- Special forms

- The Environment

- Functions

- Compilation

- Cheating

- Etc.

## Parsing

- A string is simply a sequence of characters that are not double quotes, wrapped in double quotes.

- A number is a sequence of digits.

- Binding names can consist of any character that is not whitespace and that does not have a special meaning in the syntax.

- Applications are written in the way they are in JS, by putting parenthese after an expression and having any number of arguments between those parenthese, separated by commas.

```
do (define(x, 10),
  if (>(x, 5),
    print("large"),
    print("small")
  )
)
```

The program above would be represented like this. To simple, our programming language has only 3 kinds of type: `word`, is used for identifiers (names) and `value`, is used for reprenting literal strings or numbers. And finally, `apply` expressions represent applications.

```json
{
  "type": "apply",
  "operator": { "type": "word", "name": ">" },
  "args": [
    { "type": "word", "name": "x" },
    { "type": "value", "value": 5 }
  ]
}
```

Such a data structure is called a `syntax tree`.

## Evaluator

What can we do with the syntax? Run it! And that is what the evaluator does. You give it a syntax and a scope object that associates names with values, and it will evaluate the expression that the tree represents and return the value that this produces.

The evaluator has code for each of the expression types (we have 3 types in this programming language). A literal value expression produce its value.

For instace, the expression 100 just evaluates to the number 100.

For a binding, we have to check whether it is actually defined in a scope and, if it is, fetch the binding's value.

If the type of evaluator is apply, there are more things involved. In particular, if they are a special form, like `if`, we do not evaluate anything and pass the argument expressions, along with the scope, to the function that handles this form. On the other hand, if it is a normal call, we evaluate the operator, verify that it is a function, and call it with the evaluated arguments.

The `if` construct expects three arguments. `Sarada` will evaluate it first, and if the result isn't the value false, `Sarada` will evaluate the second. Otherwise, the third gets evaluated. Acutually this `if` form is more similar to JavaScript's ternary `?:` operator than to `if...else`.

`Sarada` also differs from JavaScript in how it handles the condition value to `if`. It will not treat things like zero or the empty string as `false`, only the precise value `false`.

`Sarada` also has `while` special form, and it is similar to `if`.

## Function

Functions in Sarada get their own local scope like those in JavaScript. The function produced by the func form creates this local scope and adds the arguments bindings to it. The function, then, evaluates the function body in this scope and returns the result.

Ex:

```
run (`
  do (define (plusOne, func(a, + (a, 1))),
    print (plusOne (10))
  );
`)

// => 11
```

## Compilation

During evaluation, it acts directly on the representation of the program produced by the parser.

Compilation is the process of adding another step between the parsing and the running of a program.
