//operators
// Arithmetic , logical , comparison , bitwise ,unitary, ternary

// Arithmetic Operators:
// + , - , * , / , % , ** , ++ , --
let a = 10;
let b = 3;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus   
console.log("a ** b =", a ** b); // Exponentiation
console.log("++a =", ++a); // Pre-increment
console.log("--b =", --b); // Pre-decrement
console.log("a++ =", a++); // Post-increment
console.log("b-- =", b--); // Post-decrement
console.log("a after post-increment =", a);
console.log("b after post-decrement =", b);
console.log('5 + "5" =', 5 + "5");// 5 + "5" = "55" (string concatenation)

// logical Operators:
// && , || , !
let x = true;
let y = false;
let w = 12;
let z = 7;
console.log("x && y =", x && y); // Logical AND
console.log("w > z && x =", w > z && x); // Logical AND

console.log("x || y =", x || y); // Logical OR
console.log("w < z || y =", w < z || y); // Logical OR

console.log("!x =", !x); // Logical NOT
console.log("!y =", !y); // Logical NOT 

// Comparison Operators:
// == , === , != , !== , > , < , >= , <=
let m = 5;
let n = '5';
console.log("m == n =", m == n); // don't check type only check value
console.log("m === n =", m === n); // check type and value
console.log("m != n =", m != n); // don't check type only check value
console.log("m !== n =", m !== n); // check type and value
console.log("m > n =", m > n);
console.log("m < n =", m < n);
console.log("m >= n =", m >= n);
console.log("m <= n =", m <= n);

// Assignment Operators:
// = , += , -= , *= , /= , %=
let p = 10;
p += 5; // p = p + 5 add value 5 to p
console.log("p after += 5:", p);
p -= 3; // p = p - 3 subtract value 3 from p
console.log("p after -= 3:", p);
p *= 2; // p = p * 2
console.log("p after *= 2:", p);
p /= 4; // p = p / 4
console.log("p after /= 4:", p);
p %= 3; // p = p % 3
console.log("p after %= 3:", p);


// Unary Operators:
// typeof , delete , + , - , ++ , --, !
let q = 15;
let r = "5";
console.log("typeof q =", typeof q); // typeof operator
console.log("+q =", +q); // Unary plus
console.log("+r =", +r); // Unary plus converts string to number
// +"name" => NaN
console.log("-q =", -q); // Unary minus
console.log("++q =", ++q); // Pre-increment
console.log("--q =", --q); // Pre-decrement
console.log("!true =", !true); // Logical NOT
console.log("!false =", !false); // Logical NOT

// Ternary Operator:
// condition ? value_if_true : value_if_false
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log("Is adult?", isAdult);
// example 2
let num = 10;
let parity = (num % 2 === 0) ? "Even" : "Odd";
console.log("The number is", parity);

// instanceof operator
let f = [1,2,3,4,5];
f instanceof Array; // true
f instanceof Object; // true