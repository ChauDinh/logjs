# Project: A Programming Language

This repo is my practice while reading the book "Eloquent JavaScript", chapter 12.

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
