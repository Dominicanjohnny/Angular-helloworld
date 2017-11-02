"use strict";
exports.__esModule = true;
// ---- calc.ts ----
var math_1 = require("./math");
var r1 = math_1.sum(42, 1);
var r2 = math_1.powerOf2(42);
var r3 = math_1.sub(42, 3);
console.log("Result of sum(42, 1) is " + r1);
console.log("Result of powerOf2(42) is " + r2);
console.log("Result of sub(42, 3) is " + r3);
