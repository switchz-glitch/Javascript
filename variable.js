// Variable declarations with different naming conventions
var a = "temp";
var _123 = "value";
var $123 = "dollar";

// Global variable without keyword (not recommended)
b = 24;

// Block-scoped variable with let
let temp = "let temp";

// Constant variable that cannot be reassigned
const temp_const = "Hello World";

// Variable declaration without initialization
var d;
// Redeclaring and assigning value to var d
var d = 12;
// String variables
var name = "John";
var name1 = "Doe";

// Variable reassignment from number to string
var temp1 = 12;
temp1 = "new value";
// Another number variable
var temp2 = 24;

// Demonstrating variable scope with var (var is function-scoped, not block-scoped)
var e = 30;
console.log( "global e:" + e );
{
    // This var e shadows the global one within the block, but since var is function-scoped, it affects globally
    var e = 40;
    console.log( "local e:" + e );
}
function test() {
    // var e inside function is local to the function
    var e = 50;
    console.log( "function e:" + e );
}
test();
console.log( "global e after block and function:" + e );

// Demonstrating hoisting with var and let
// var declarations are hoisted to the top of their scope and initialized with undefined
console.log(temp_b);
var temp_b = "temp b";

// let declarations are hoisted but not initialized, causing ReferenceError if accessed before declaration
//console.log(temp_c); // This would cause a ReferenceError
console.log(temp_c); // This line is after declaration, so it works
let temp_c = "temp c";

// hoisting impact example
// Accessing temp_d before declaration will log undefined due to hoisting
// but accessing temp_d_let before declaration would cause ReferenceError
// if you use console.log before initialization that give you undefined for var
var temp_d = 12;

// Accessing temp_d_let before declaration would cause ReferenceError
// Uncommenting the next line would throw an error
let temp_d_let = 24;
// hosting impact on var and let count

// var --> hosist --> undefined
// let --> hosist --> ReferenceError
// const --> hosist --> ReferenceError



