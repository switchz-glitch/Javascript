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



Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Give as Error </p>
<p>Why : nm exists but is not initialized yet resulting in </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: This is not given a error</p>
<p>Why : when console.log(b) runs b exists but has no value yet.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: output is 2</p>
<p>Why : var ignores block scope { }</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:  Inside: 20  Outside: 10</p>
<p>Why : let is block-scoped so The a inside { } is a different variable than the a outside</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error:  this work: person.name = "user"; </p>
<p>Why : const does not make the object immutable and It only makes the reference constant  const protects the reference, not the object itself</p>
</div>
 
 



 
<br>
<hr>
<br>
<h3>Example 1 :</h3>
<p>true + false </p>
<p>true</p>
</div>

 

<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>0</p>
</div>

 

<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>1212 </p>
</div>

 

<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
</div>

 

<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>11</p>
</div>




Javascript Operator
<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){

    console.log("Both are greater than 5");

}else{

    console.log("One or both are not greater than 5");

}</p>
<p>True</p>
<p>Why:Both conditions are true</p>
</div>
 
<div>

<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){

    console.log("Acess granted");

}else{

    console.log("Acess Denied");

}</p>
<p>Access granted</p>
<p>Why:At least one condition is true</p>
</div>
 
<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){

    console.log("Hot day");

}else{

    console.log("Pleasant day");

}</p>
<p> Hot day</p>

</div><p>Why:temp > 30 is true, !true becomes false</p>
 
<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){

    console.log("Truthy value");

}else{

    console.log("Falsy value");

}</p>
<p>Truthy value</p>
<p>Why:0 is a falsy value > </p>
</div>
 
<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Grade:C</p>

</div>
 
<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Status:Gold</p>
<p>Why:</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Access: Deny</p>
<p>Why:true && false = false</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>6</p>

</div>
 
<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>9</p>
</div>
 
<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>5 4</p>
<p>Why:c = 4 (old value)
b = 5 (incremented after)</p>
</div>
 
<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>5 5</p>

</div>
 
<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>10  9</p>
</div>
 
<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>12</p>
<p>Why:n++ → 5 (then n = 6)
++n → 7
5 + 7 = 12</p>
</div>
 
<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){

result ++likes;

}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>101</p>

</div>
 
<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   

console.log("Matched");

}else{

    console.log("Not Matched"); 

}</p>
<p>Matched</p>
<p>Why:Comparison happens before decrement</p>
</div>
 





 Javascript Controlflow
<div> 
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){

    case 2:

    console.log("Two");

    case 3:

    console.log("Three");

}</P>
<p>Ans:Two and Three</p>
<p>Why:Because variable valuse is two so the switch case select that varible and match with case and if that match that case will be the execute but this code there are not breck so this print all  </p>
<div>
 
<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Ans:
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) { 
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Invalid score';
    }
};
getGrade(75);

Ans is C
</p>
<div>
 
<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Ans:
function rps(player1, player2){
    if(player1 === player2){
        return "It's a tie!";
    }
    if((player1 === "rock" && player2 === "scissors") ||
       (player1 === "paper" && player2 === "rock") ||
       (player1 === "scissors" && player2 === "paper")){
        return "Player 1 wins!";
    }
    return "Player 2 wins!";
}
console.log(rps("rock", "scissors")); // Player 1 wins!</p>
<div>
 








 <div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
Ans: for (let i = 1; i <= 10; i++) {
    console.log(i);
}

</div>
 
<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
Ans: let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
</div>
 
<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
</p>
<p>Ans:</p>
</div>
 
<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i = 1;
while (i <= 15) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
</p>
</div>
 
<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
                                             
</p>
</div>
                                                      
<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>
let num = Number(prompt("Give a number"));

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
</p>
</div>
 
<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        count++;
    }
}

console.log(count);

</p>
</div>
 
<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
}

</p>
</div>
 
<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

</p>
</div>
 
<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
    count++;

    if (count === 5) {
        break;
    }
}

</p>
</div>








## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p>Ans:</p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why</p>
<p>Ans: this is run because in fuvc declaration can call fuction on above<p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans: let add = (a, b) => {
    return a + b;
} </p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why</p>
</div>









<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why </p>
<p>JS treats functions like normal values</p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
<p>Yes, function can be assigned to a variable and called</p>
<p>Output: Hello</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
<p>Functions are first-class citizens</p>
<p>Function passed as argument and executed</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why</p>
<p>Enables abstraction and reusable logic</p>
<p> Higher Order Function</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why</p>
<p>It modifies external variable (side effect)</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how</p>
<p>function numPure(total, n){
    return total + n;
}
numPure(5, 3);<p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example</p>
<p>When inner function remembers variables of outer function</p>
<p>function outer(){
    let x = 10;
    return function(){
        console.log(x);
    };
}</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why</p>
<p>Output: 1 and 2</p>
<p>Why: Closure preserves count value</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why</p>
<p>Why: Executes immediately</p>
<p>(function init(){
    console.log("Initialized");
})();</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why</p>
<p>Real-world use: Module pattern</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
<p>Output: TypeError</p>
<p>Why: var is hoisted but function value is undefined</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
<P>Why: Function declaration is fully hoisted</p>
<P>Output: Hello</p>
</div>
    






1. Double daily steps count

Real life: Fitness app doubling step goal

const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);
console.log(newSteps);


2. Convert minutes to seconds

Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds)


3. Add ₹50 delivery charge to prices

Real life: Food delivery app

const prices1 = [200, 350, 500];

const finalPrices = prices1.map(price => price + 50);

console.log(finalPrices);


4. Convert exam marks to grades

Real life: Result system

const marks = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);
console.log(grades)


5. Capitalize names

Real life: Display usernames properly

const names1 = ['rahul', 'neha', 'amit'];

const formattedNames = names1.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
console.log(formattedNames)


6. Apply 10% discount

Real life: Shopping sale

const prices1 = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices1.map(applyDiscount);
console.log(discounted)



7. Add bonus points to scores based on condition

Real life: Game scoring system

const scores1 = [45, 60, 85];

const finalScores = scores1.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
console.log(finalScores)


8. Convert temperatures with formula

Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit)



9. Generate table of numbers

Real life: Math learning app

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo)



10. Combine map with string formatting

Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);



### 1. Get even numbers
**Real life:** Find even roll numbers
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
ans:const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
```
---

### 2. Filter adults
**Real life:** Allow only 3+ users
```js
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
ans:const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
```

---

### 3. Remove empty items
**Real life:** Clean user input
```js
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
ans:const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
```
---

### 4. Filter passing marks
**Real life:** Exam result system
```js
const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
ans:const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
```
---

### 5. Get affordable prices
**Real life:** Shopping app price filter
```js
const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
ans:const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
```
---

### 6. Filter long words
**Real life:** Search keyword validation
```js
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
ans:const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
```

### 7. Filter positive numbers
**Real life:** Bank transaction validation
```js
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
ans:const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
```

---

### 8. Filter numbers within a range
**Real life:** Score selection
```js
const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
ans:const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
```



JavaScript .reduce() Method Example:

### 1. Total money in wallet

**Real life:** Add all cash amounts
```js
const money = [100, 200, 50];

const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
ans:const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
// Output: 350
```
 
---
 
### 2. Total steps walked in a week
**Real life:** Fitness tracker
```js
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
ans:const steps = [3000, 5000, 4000, 6000];
const weeklySteps = steps.reduce((total, step) => total + step, 0);
// Output: 18000
```
 
---
 
### 3. Find total cart price
**Real life:** Shopping bill
```js
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
ans:const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
// Output: 997
```
 
---
 
### 4. Find maximum score
**Real life:** Highest exam mark
```js
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
ans:const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
// Output: 92
```

---
 
### 5. Count total characters
**Real life:** Text length calculation
```js
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
ans:const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
// Output: 9
```
 
---
 
### 6. Combine words into a sentence
**Real life:** Message builder
```js
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
ans:const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
// Output: "Learning JavaScript is fun"
```

---
 
### 7. Count passed students
**Real life:** Result summary
```js
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
ans:const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);
// Output: 3
```
 
---
 
### 8. Calculate final balance
**Real life:** Bank account calculation
```js
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
ans:const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// Output: 1000
```
---
 
---
 
### 10. Build comma-separated string
**Real life:** Display values in UI
```js
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
ans:const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
// Output: "Pen, Book, Pencil"
```





















## create Readmd.md file and write the answers of all questions
## 🟢 BEGINNER LEVEL (1–20)

### Q1. Variables

What is the difference between `var`, `let`, and `const`?

---

### Q2. Data Types

Name all primitive data types in JavaScript.
boolen, number, string, etc

---

### Q3. Type Checking

How do you check the type of a variable?
type(var_name);

---

### Q4. Operators

What is the difference between `==` and `===`?
==  -- for value assing in variable
===  --  for check vale is equal is other value
---

### Q5. Arithmetic Operators

What will be the output?

```js
let x = 10;
console.log(x + 5 * 2);
```
20
---

### Q6. String Concatenation

What is the output?

```js
console.log('5' + 2);
```
52
---

### Q7. Boolean Logic

What is the result?

```js
console.log(true && false);
```
true
---

### Q8. Functions

What is a function and why is it used?
functin is a block of code that used for multiuple pal time and easy to use a block of code in one line
---

### Q9. Function Call

What will this return?

```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```
5
---

### Q10. Arrays

How do you create an array in JavaScript?
let a = [20,10,50,45]
---

### Q11. Array Access

What is the output?

```js
const arr = [10, 20, 30];
console.log(arr[1]);
```
20
---

### Q12. Objects

What is an object in JavaScript?
object is a block of array that store a value and key info in too
---

### Q13. Object Access

What is the output?

```js
const user = { name: 'A', age: 20 };
console.log(user.age);
```
20
---

### Q14. Control Flow

What does an `if` statement do?
if statement is used for given a condition in code
---

### Q15. Condition Check

What is the output?

```js
let x = 5;
if (x > 3) console.log('Yes');
```
error
---

### Q16. Loops

What is a loop and why is it used?
loop is used for 
---

### Q17. for Loop

What is the output?

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```
0,1,2,3
---

### Q18. while Loop

When should you use a `while` loop?
while loop is run one time, it does't matter a code is give a error it run a code in his block
---

### Q19. Increment Operator

What is the result?

```js
let a = 5;
a++;
console.log(a);
```
6
---

### Q20. Comments

How do you write single-line and multi-line comments?
// and /* */
---

## 🟡 INTERMEDIATE LEVEL (21–35)

### Q21. Scope

What is block scope?
block scope is a block of a code 
---

### Q22. Hoisting

What is hoisting in JavaScript?

---

### Q23. Undefined vs Null

Explain the difference between `undefined` and `null`.

---

### Q24. Truthy & Falsy

List all falsy values in JavaScript.

---

### Q25. Functions vs Arrow Functions

What is the difference between normal functions and arrow functions?

---

### Q26. Parameters vs Arguments

Explain with an example.

---

### Q27. Return Keyword

What happens if a function does not return anything?

---

### Q28. Array Methods

What is the difference between `push()` and `pop()`?

---

### Q29. Loop vs Array Methods

When should you use loops instead of array methods?

---

### Q30. Object Iteration

How do you loop through object properties?

---

### Q31. Break & Continue

Explain `break` and `continue` with loops.

---

### Q32. Comparison Operators

What is the result?

```js
console.log(0 == false);
console.log(0 === false);
```

---

### Q33. Ternary Operator

Rewrite using ternary:

```js
if (age >= 18) {
  status = 'adult';
}
```

---

### Q34. Array Destructuring

What is array destructuring?

---

### Q35. Spread Operator

What does the spread operator do with arrays?

---

## 🔵 ADVANCED LEVEL (36–50)

### Q36. Closures

What is a closure? Give a simple example.

---

### Q37. Execution Context

What is the JavaScript execution context?

---

### Q38. Call Stack

What is the call stack?

---

### Q39. Pass by Value vs Reference

Explain with arrays or objects.

---

### Q40. Shallow vs Deep Copy

What is the difference?

---

### Q41. Higher-Order Functions

What is a higher-order function?

---

### Q42. Callback Functions

What is a callback function?

---

### Q43. Immutability

Why is immutability important in JavaScript?

---

### Q44. Event Loop (Conceptual)

What is the event loop?

---

### Q45. Synchronous vs Asynchronous

Explain the difference.

---

### Q46. forEach vs map

What is the difference?

---

### Q47. == Interview Trap ⭐

What is the output?

```js
console.log([] == []);
```

---

### Q48. typeof Interview Trap ⭐

What is the output?

```js
console.log(typeof null);
```

---

### Q49. NaN Check

How do you check if a value is `NaN`?

---

### Q50. FINAL INTERVIEW QUESTION ⭐⭐⭐

Explain how JavaScript code runs from start to finish (high-level).

---












## Write Answers, Errors, How, Why for Every Questions

## 🟢 VARIABLES & DATA TYPES (1–15)

> Use the given variables while solving. Do NOT change values unless asked.

```js
let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;
```

1. Compare `a == "a"` and `a === "a"`. Log both results.
2. Compare `b == c` and `b === c`. Explain the output using code comments.
3. Convert `b` so that `b === c` becomes `true`.
4. Check whether `d` is `undefined` without using `typeof`.
5. Write a condition that safely checks both `d` and `e`.
6. Write code to prove that `null == undefined` but `null !== undefined`.
7. Show type coercion using `c + b` and fix it.
8. Check if `c` is `NaN` after doing `c / "a"`.
9. Convert `b` to a number using **two different approaches**.
10. Convert `c` to a string using **two different approaches**.
11. Write code that turns any value into a boolean.
12. Store a number in `const` and explain why reassignment fails (using code).
13. Copy a primitive value and prove changes don’t affect the original.
14. Write a comparison that returns `false` but looks like it should be `true`.
15. Fix a buggy comparison caused by implicit type conversion.

---

## 🟢 OPERATORS (16–30)

16. Check if a number is even **without `%` operator**.
17. Find maximum of two numbers **without `if` or `Math.max()`**.
18. Write a calculator using only arithmetic operators.
19. Use logical operators to provide default values.
20. Rewrite an `if-else` using ternary operator.
21. Chain multiple ternary conditions.
22. Use `&&` to conditionally execute a function.
23. Demonstrate short-circuit behavior with code.
24. Compare two values of different data types.
25. Write code using nullish coalescing (`??`).
26. Show difference between `||` and `??` using examples.
27. Use spread operator to merge arrays.
28. Use rest operator to accept variable arguments.
29. Create a copy of an array and modify it safely.
30. Demonstrate operator precedence using code.

---

## 🟡 CONTROL FLOW (31–45)

31. Write a grading system using `if-else`.
32. Convert the grading system into `switch`.
33. Demonstrate switch fall-through behavior.
34. Write nested `if` logic for login validation.
35. Refactor nested `if` into clean conditions.
36. Write code that executes only when two conditions are true.
37. Handle multiple conditions using logical operators.
38. Write a menu-driven program using `switch`.
39. Show what happens when `break` is missing.
40. Rewrite `switch` logic using `if-else`.
41. Validate input range using conditions.
42. Write code that exits early from a function.
43. Implement a simple traffic light system.
44. Convert real-life decision logic into code.
45. Handle edge cases in conditional logic.

---

## 🟡 LOOPS (46–60)

46. Print numbers from 1 to 100 using a loop.
47. Print only even numbers using loop.
48. Stop a loop when a condition is met.
49. Skip numbers divisible by 3.
50. Find sum of numbers using loop.
51. Reverse a number using loop.
52. Count digits in a number.
53. Find factorial using loop.
54. Generate Fibonacci sequence.
55. Break out of nested loops.
56. Use `continue` in a loop.
57. Create a multiplication table.
58. Detect infinite loop and fix it.
59. Compare `for` vs `while` using code.
60. Replace a loop with array methods.

---

## 🟡 FUNCTIONS (61–80)

61. Write a function that returns sum of two numbers.
62. Rewrite it using arrow function.
63. Use default parameters.
64. Write a function that returns another function.
65. Pass a function as an argument.
66. Write a callback-based example.
67. Create a pure function.
68. Demonstrate side effects in a function.
69. Write a recursive function.
70. Convert recursive logic to iterative.
71. Write a function that accepts unlimited arguments.
72. Implement a higher-order function.
73. Use closure to preserve state.
74. Create a function counter.
75. Implement currying.
76. Write a memoized function.
77. Handle invalid input inside a function.
78. Compare arrow vs normal function behavior.
79. Write a function that runs only once.
80. Refactor repeated logic into a function.

---

## 🔵 ARRAYS (81–101)

81. Find sum of array elements.
82. Find maximum element in array.
83. Remove duplicates from array.
84. Find second largest number.
85. Filter positive numbers.
86. Map array values to squares.
87. Use `reduce()` to count elements.
88. Chain `filter → map → reduce`.
89. Find first matching element.
90. Check if any value satisfies condition.
91. Check if all values satisfy condition.
92. Extract first and rest values using destructuring.
93. Merge arrays using spread operator.
94. Clone array deeply.
95. Sort array without `.sort()`.
96. Rotate array elements.
97. Flatten nested array.
98. Implement custom `map()`.
99. Implement custom `filter()`.
100. Implement custom `reduce()`.
101. FINAL BOSS ⭐ Combine multiple array methods with constraints.



# ✅ ANSWERS & HOW (Concise)

> Each answer shows **what happens** and **why**. Keep code minimal.

## Variables & Data Types (1–15)

1. `==` checks value, `===` checks value + type → both true here.
2. `b == c` true (coercion), `b === c` false (string vs number).
3. `b = Number(b)` or `b = +b`.
4. `d === undefined`.
5. `d == null` safely checks both `null` & `undefined`.
6. `null == undefined // true`, strict comparison is false.
7. `c + b` becomes string concat → fix by converting `b` to number.
8. `c / 'a'` → `NaN`; check via `Number.isNaN()`.
9. `Number(b)`, `+b`.
10. `String(c)`, `c.toString()`.
11. `Boolean(value)` or `!!value`.
12. `const` blocks reassignment, not mutation.
13. Primitives copy by value → independent.
14. Example: `0 == false` → true.
15. Use strict equality to avoid coercion.

## Operators (16–30)

16. Use bitwise: `(n & 1) === 0`.
17. Ternary: `a > b ? a : b`.
18. Basic ops with `+ - * /`.
19. Defaults via `||` or `??`.
20. `condition ? a : b`.
21. Nest ternaries carefully.
22. `cond && fn()`.
23. OR stops at first truthy.
24. Coercion occurs with `==`.
25. `x ?? y` only for null/undefined.
26. `||` treats falsy; `??` doesn’t.
27. `[...a, ...b]`.
28. `function f(...args){}`.
29. `const copy=[...arr]`.
30. Parentheses change order.

## Control Flow (31–45)

31. `if/else` grading.
32. `switch(score)`.
33. Missing `break` falls through.
34. Nested checks for auth.
35. Combine conditions.
36. Use `&&`.
37. Logical operators.
38. `switch(menu)`.
39. Execution continues.
40. Equivalent conditions.
41. Range checks.
42. Early `return`.
43. `switch(color)`.
44. Translate rules to code.
45. Handle edges first.

## Loops (46–60)

46. `for` loop.
47. `i+=2` or check even.
48. `break`.
49. `continue`.
50. Accumulator.
51. Mod/div loop.
52. Count divisions.
53. Multiply loop.
54. Iterative fib.
55. Label or flags.
56. Skip iteration.
57. Nested loop.
58. Fix condition.
59. Use cases differ.
60. Prefer array methods.

## Functions (61–80)

61. `function sum(a,b){return a+b}`.
62. `(a,b)=>a+b`.
63. Defaults in params.
64. Return function.
65. Pass fn.
66. Callback execution.
67. No side effects.
68. Mutates outer state.
69. Base case.
70. Loop version.
71. Rest params.
72. Takes/returns fn.
73. Closure retains state.
74. Increment counter.
75. Partial application.
76. Cache results.
77. Guard clauses.
78. `this` differs.
79. IIFE/flag.
80. DRY refactor.

## Arrays (81–101)

81. `reduce` sum.
82. Track max.
83. Filter/indexOf.
84. Two-pass or one-pass.
85. `filter(n>0)`.
86. `map(n*n)`.
87. `reduce((c)=>c+1)`.
88. Chain methods.
89. `find`.
90. `some`.
91. `every`.
92. `[first,...rest]`.
93. `[...a,...b]`.
94. Recursive copy.
95. Implement sort.
96. Slice/concat.
97. Recursion.
98. Loop + callback.
99. Conditional push.
100. Accumulator logic.
101. Combine with constraints.