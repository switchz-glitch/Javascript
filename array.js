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







