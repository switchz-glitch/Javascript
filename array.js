// Array
//create
let a = [1,2,3,4,5]
// position inndex -- start with 0
a[0] = 10;
a[1] = 20;
a[2] = 30;
a[3] = 40;
a[4] = 50;    

// Array -- hold multiple values at saame time
// ["product", 5000, '20%']
// ["a", "b", "Hello"]

// Array method:(variable name. method_name())
// push, pop, shift, unshift, splice, slice, reverse, sort
// push -> enter new values into array -- place in to last
a.push(60);
// variable || function method -- koi varablre le function in pachhal dot(.) kari ne lakho to method kevai
// use case -- remove last values

// shift -- removew fiest values into array
a.shift();
// use -- remove old products automaticaliy aftre sometie

// unshift -- add values into array -- first
a.unshift(10);
// use  -- add values into top of that data you receives

// splice -- remove values into  arrray -- specific position and secificly number of values
// info () -- first index(position) how many value you wnat ti remove
let e = [50,60,30,40,10];
console.log(e.splice(3,2));
console.log(e.splice(1,2,2));
// use case -- select msg and remove multiple msg at on click

// slice -- copy values from array -- specofic position and specific number of values
// new variable = arra_name.slice(startindex, end)
// start index -- include into copy
// end index -- not include into copy
let f = [100,50,25,0];
let new_f = f.slice(1,2);
console.log(new_f)
// use case -- copy specificly data and save it into new variable
// genrate a report based on data and genrate a file or save the file into your local machine

// splice vs slice
// splice -- remove values into  arrray -- specific position and secificly number of values
// slice -- copy values from array -- specofic position and specific number of values

// reverse - reverse value of array
let g = [25,50,30,45,55];
// g.reverse();
// use -- show lastes upadate first into your fronted

//sort -- set into acending oreder
let h = [50,40,10,20,30];
// arr1.sort();
// use -- acending oreder
// let sr = h.sort(function(a,b){
// return a-b;
//})
let arr1 = [50,40,10,20,30];

let temp_arr1 = arr1.sort((a,b) => a-b);


let arr2 = ["b" , "f", "z", "q" , "m", "k"];

let arr3 = ["Hello", "Aero", "Right", "Array", "Object", "Variable" ];








// // example 1:
 let tasks = ['Wake up', 'Brush teeth'];
 tasks.push("but Milk")

// // example 2:
 let notifications = ['Email', 'Message', 'Reminder'];
 notifications.pop()

// //example 3 :
 let customers = ['Customer1', 'Customer2', 'Customer3'];
 customers.shift()

// // ex 4:
 let playlist = ['Song B', 'Song C'];
 playlist.unshift("Song A")

// // ex 5: 
 let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
 students.splice(1,1, "Jhon", "Sara")
 console.log(students)

// // ex 6
 let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
  
// // ex 7
 let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 weekendDays = days.slice(5,)

// // ex 8
 let levels = ['Easy', 'Medium', 'Hard'];
 levels.sort().reverse()

// //ex 9
 let scores = [45, 12, 78, 34, 89];
 scores.sort((a, b) => a - b)

// //ex 10
let prices = [199, 49, 999, 299, 149];
 prices.sort((a, b) => a - b)

// // ex 11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
 let newProducts = products.slice(0,3)

// //ex 12
 let colors = ['Red', 'Green', 'Blue', 'Yellow'];
 colors.splice(3,1,"Purple", "orange")

// // ex 13
 let steps = ['Step 1', 'Step 2', 'Step 3'];
 steps.sort().reverse().push("Final Step")
  console.log(steps)

// // ex 14
 let names = ['alice', 'Bob', 'charlie', 'David', "Asda"];
  names.sort((a,b)=>{
      return a.toLowerCase().localeCompare(b.toLowerCase())
 })
  console.log(names)

 let arr = ['10', '2', '5', '30', '20']; // sort() cant sort numberically
 arr.sort((a, b) => a - b)
 console.log(arr)

  let arr5 = ['b', 'f', 'a', 'r', 'w', 'c', 'h', 'i']
 arr5.sort()
 console.log(arr5)

let i = [10, 54, 2, 5, 45, 23, 345, 23];

let newI = []
 i.forEach(e => {
     newI.push(e + 10);
 })
 console.log(newI)

 i.map(e => {
     newI.push(e+10)
 })
  console.log(newI)





// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically

let movies = ['Avatar', 'Titanic', 'Gladiator'];

// Add 'Inception' to the end of the array
console.log(movies.push('Inception'));
// Remove the first movie from the array
console.log(movies.shift());

// Sort the movies alphabetically
console.log(movies.sort());

// Final value of movies:
// ['Gladiator', 'Inception', 'Titanic']



// Q16. splice() return value
// splice(startIndex, deleteCount)
// It returns the removed elements as a new array

let nums1 = [1, 2, 3, 4];

// Removes 2 elements starting from index 1 (removes 2 and 3)
let removedNums = nums1.splice(1, 2);
console.log(removedNums);
// removedNums → [2, 3]
// nums1 → [1, 4]



// Q17. slice() immutability check
// slice(startIndex, endIndex)
// It does NOT change the original array

let nums2 = [10, 20, 30, 40];

// Extracts elements from index 1 up to (but not including) index 3
let result = nums2.slice(1, 3);
console.log(result);
// result → [20, 30]
// nums2 remains → [10, 20, 30, 40]



// Q19. reverse() mutation
// reverse() mutates the original array and returns the same reference

let letters = ['a', 'b', 'c'];

// Reverses the array in place
let reversedLetters = letters.reverse();
console.log(reversedLetters);
// letters → ['c', 'b', 'a']
// reversedLetters → ['c', 'b', 'a']
// Both variables point to the same array



// Q21. splice() edge case
// What happens if deleteCount is 0?
// No elements are removed, only insertion happens

let arr4 = ['x', 'y', 'z'];

// Insert 'new' at index 1 without deleting anything
arr4.splice(1, 0, 'new');
console.log(arr4);
// arr4 → ['x', 'new', 'y', 'z']



// Q23. slice() negative index
// Negative indexes count from the end of the array

let values = [100, 200, 300, 400, 500];

// slice(-3, -1) means:
// start at 3rd element from the end (300)
// end at 1st element from the end (not included)
let sliced = values.slice(-3, -1);
console.log(sliced);
// sliced → [300, 400]



// Q24. splice() vs slice()
// a) Use splice() when you want to update the original array
// b) Use slice() when you want to keep the original array unchanged



// Q25. Chained methods (brain teaser)
// shift() removes and returns the first element
// push() adds an element to the end of the array

let arr7 = [1, 2, 3];

// shift() removes 1 → arr7 becomes [2, 3]
// push(1) adds it to the end
arr7.push(arr7.shift());
console.log();
// Final value of arr7 → [2, 3, 1]

// for each loop
// for each -- array n1 darek value note loop  chalse
let n1 = [10,35,40,68];

n1.forEach((val) => {
let new_val = val + 10;
console.log(new_val);
});


let z1 = [10,20,30,40,50,60,70,80];

z1.forEach((val) => {
let new_val = val + 10;
console.log(new_val);
});


// important into array
// now all method are used in real world projects
// all method are worked with function
// manipulate data using arrry method and finction

// .map() method:
// map tyare j use karavu jyare ek new array create karo chhe
// first map create aq black array -- only for undestanding
let data = [10,20,50,40,15];
// same like a for each loop but map return a new array

let temp_data = data.map((val) =>{
    if (val > 15){
        return val;
    }
});

// use case -- data ma thi specific data new array ma store karvo hoy
// ex. product ma thi specific category na product new array ma store karavo hoy
// if you want to show only electronics product on your homepage



// filter 
// filter tayare use karvu kr jayare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else (false) --> not add into new array
let laptop = [150000,20000,25000,65000,90000,45000];

let expensive = laptop.filter((price) => {
    if (price > 30000) return true;
});

// je value 300000 thi vadhare chhe te new aray ma add thase and biji value ne array ma add nahi kare

// use case --> data ma thi specificly data new array ma store karvo hoy based on condition

// ex. product ma thi specificly price na products new array ma store karva hoy

// if you want to show only expensive products on home page 
// if you wnat to fillter products based on price
let product_type = ["mobile", "tablet", "laptop", "mouse", "keybord"];

let filter_product_type = product_type.filter((type) => {
    if (type === "tablet" || type === "mobile") return true;
});


// reduce
// reduce tayare j use karvu ke jaya ek single values clacutate karavi hoy from array
let = total_price = [10,68,45,58,52,48];

let final_total_price = total_price.reduce((accumulator, val) => {
    return accumulator + val;
});

// 0 + 10 = 10
// 10 + 68 = 78
// 78 + 45 = 123
console.log("final price", final_total_price);
// accumulator --> je value functon ma retun thase te accumulator ma store thase --> accumulator name change kari sako chho
// val -- array ni darek values

// use case --> data ma thi ek single values cluclate karavi hoy \
// ex. products ma thi total price claculate karavi hoy

// find
// find tayare j use karvu ke jayare array mathi ek values find karavi hoy based on condition
// find() return kare chhe array no element --> callback no return value nathi
// never return what you return inside it
// return the arrray element itself -- not return array
// find() stop at the first match
// it does not continues looping

let product = ["mobile", "tablet", "laptop","desktop", "mouse", "keybord"];

let find_product = product.find((item) => {
    if (item === "desktop"){
        return true;

    } else if (item === "tablet"){
        return true;
    } else{
      return false;
    }
});

// use case --> data ma thi ek value find karavi hoy based on condition
// ex. product ma thi specificly product find karavo hoy based on name



// find vs filter 
// real-life scenario: shopping mall security
// your are security guard at a shopping mall
// chack the list of visitors
let people = ["jhon", "sara", "mike", "anna","david", "sara"];
 // find --> you are looking for the first person  named "sara" in the list and stop serching (pehli var j male, bas e j and anagal check j na kare)
let person = people.find((name)=> name === "sara");
console.log("find", person);

// filter --> you want to find all visitors name "sara" in the list(all data check kare and list na end sudhi check kare)
let allsara = people.filter((name)=> name === "sara");
console.log("filter", allsara);

// ex 2: book bus for travel

// some
// check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() return values of array true or false, find() return value of array
// give ans in true and false
let markes1 = [10,20,35,90];
let any = markes1.some((val)=>{
    if (val > 85) return 12;
    // if (val < 85) return "need improvment";
});
console.log(any);
// use case --> check if some product are out of stock in your cart

// every 
// check kare chhe ke aray ma baddha j item condition satisfy kare chh ke nai
// true -- baha items condition mathch kare
// false -- ek pan fail thay to
let def = [20,30,5,35];
let num = def.every(function(val){
    return val < 40;
});
 
// use case --> check all stusent is pass or not

// some(), find(), filter(), every()
// let products = ["tablet", "mobile", "laptop", "mobile"];
// method --> condition --> output
// .some() --> item === "mobile" --> true
// .find() --> item === "mobile" --> "mobile"
// .filter() --> item === "mobile" --> ["mobile", "mobile"]
// .every() --> item === "mobile" --> false

// destucturing oprator -- give value to variable (ex. we don't use every time arr11[1], just sane it into variable let [ , k] = arr1)
let arr12 = [1,2,3,4,5];
// let j = arr12[0]; --> 1
// let k = arr12[0]; --> 3
let [j, , k] = arr12; // destrucring
// let [, , n]= arr12;
console.log(k);
let user_data = ["test", "test@gamil.com", "male", "suart"]
// console.log("name", name)


// spead oprator -- copy value from main array
let arr8 = [1,2,3,4,5,6,7,8];
// let arr12 = arr13; -- just give refernce not copy value 
let arr9 = [...arr8];
// ... --- rest -- into function
// ... --- spred --- into array and object -- copy
let temp_arr = [1,2,3];
let temp_arr2 = [4,5,6];
let mix_arr = [...temp_arr, ...temp_arr2]






// map + filter + reduce – Practice Questions (Single File)

// Q1. Shopping App – Discounted Total
const prices1 = [50, 120, 300, 80, 200];
const total1 = prices1.filter(price => price > 100).map(price => price * 0.5).reduce((sum, price) => sum + price, 0);
console.log('Q1 Total:', total1); // 310

// Q2. Fitness App – Total Active Minutes
const minutes = [10, 25, 40, 15, 60];
const totalCalories = minutes
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);
console.log('Q2 Total Calories:', totalCalories); // 975

// Q3. Exam System – Average of Passed Marks
const marks = [35, 72, 88, 40, 25, 90];
const passed = marks.filter(mark => mark >= 40);
const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
console.log('Q3 Average Marks:', average); // 72.5

// Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);
console.log('Q4 Total Payout:', totalPayout); // 2700

// Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];
const totalPoints1 = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 Total Points:', totalPoints1); // 450

// Q6. Bank Transactions – Final Credited Amount
const transactions = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);
console.log('Q6 Credited Amount:', creditedAmount); // 4590

// Q7. Game App – Final Score
const scores1 = [30, 60, 90, 45, 80];
const finalScore = scores1
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);
console.log('Q7 Final Score:', finalScore); // 270

// Q8. E-commerce – Total Taxed Amount
const prices2 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices2
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);
console.log('Q8 Final Amount:', finalAmount); // 6724

// Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];
const totalPoints2 = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);
console.log('Q9 Total Points:', totalPoints2); // 270

// Q10. Interview Brain Teaser – Sum of Squares
const numbers = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log('Q10 Sum of Squares:', sumOfSquares); // 56

