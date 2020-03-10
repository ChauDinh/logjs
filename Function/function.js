const run = require("../Environment/environment");

run(`
  do (define (plusOne, func (a, + (a, 1))),
    print (plusOne (10))
  )
`);

run(`
  do(define(pow, func(base, exp, if(==(exp, 0), 1, *(base, pow(base, - (exp, 1)))))),
    print(pow(2, 10))
  )
`);
