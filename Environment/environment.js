/**
 * Global Scope
 */

const evaluate = require("../Evaluator/evaluator");
const parse = require("../Parser/parser");

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;

let prog = parse(`if(true, false, true)`);
console.log(evaluate(prog, topScope));
