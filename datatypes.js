// DATA TYPES IN JS
// Two types:
// 1. Primitive data types
// 2. Reference data types


//1. Primitive data types
// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Symbol
// Copy ---> real value
let a = 10;
let b = a;

// 2. Reference data types
// Types [], {}, ()
// Object
// Array
// Function
// Copy ---> Given reference address or parent address
let d = [1,2,3,4,5];
let e = d;
// d.popI(); // it will remove last element from array d
// console.log(d); // [1,2,3,4]
// console.log(e); // [1,2,3,4]

// Primitive data types
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol
// string:
// '', "", ``
let f = "name";
f = 'username';
f = `user`;

// number:
let g = 24;
g = 24.56;
g = -24;
// boolean:
let k = true;
k = false;
// undefined:
let h;
console.log(h);

// Typeof operator
console.log(typeof f); // string
console.log(typeof g); // number
console.log(typeof k); // boolean
console.log(typeof h); // undefined
console.log(typeof null); // object (bug in js)
console.log(typeof 123n); // bigint
console.log(typeof Symbol("id")); // symbol

// symbol:
// unique identifier
let id1 = Symbol("id");
let id2 = Symbol("id");
// check id1==id2
let obj = { uid: 1, name: "test", email: "test@gmail.com"};
let id3 = "uid";
let id4 = Symbol("uid");
// console.log(obj[id3]); // 1

// BigInt:
// check range of number
// Number.MAX_SAFE_INTEGER
let number = 9007199254741991;
number = number + 10;
let num2 = 900719925474199154n;
num2 + 10n; // you have to add n at the end of number to make it bigint
// typeof num2
// console.log(typeof num2); // bigint 
// console.log(obj);
// obj[id3] = "001";
/*
let id5 = "name";
obj[id5] = "updated name";
obj.name
let id6 = Symbol("name");
obj[id6] = "symbol name";
console.log(obj);
*/

// Non-primitive data types
// types: Object, Array, Function
let temp_array =["item1", "item2", "item3"];
let temp_object = { name: "test", age: 24, phone: 1234567890};
let profiles = [
    { name: "test1", age: 24, phone: 1234567890},
    { name: "test2", age: 25, phone: 1234567891},
    { name: "test3", age: 26, phone: 1234567892},
];
function name (params){}

// Dynamic typing
let u_name = "username";
u_name = 24;
u_name = {};
// javascript --> typescript
// typeof quirks
// typeof 12



// type coeration
// "5" + 5 --> "55" value add and convert into string
// "5" - 5 --> 0 convert string into number and do subtraction
console.log("5" + 5);
console.log("5" - 5);

// Truthy and Falsy values
// 0, false, "", null, undefined, NaN --> falsy values
// ex. !!0 -- check value is truthy or falsy
// ex. if(null){}. is convert into  false
// ex. if(-1){}, js convert into true
// all -> true

