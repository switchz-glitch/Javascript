// loops
// 1 1 1 1 1 1 
// 1 2 3 4 5 6

// for loop
// why use for loop? when we know the number of iterations
// syntax:
// for(initialization; condition; increment/decrement){
//     // code to be executed
// }


// for (i = 0; i < 5; i++) {
//     console.log("for loop iteration:", i);
// }

// for (let j = 9; j > 1; j--) {
//     console.log("for loop iteration:", j);
// }


// for (let k = 0; k < 10; k++) {
//     console.log("Hello");
// }

// while loop
// kaya thi javanu chhe --> kaya rokava nu chhe --> kevi rite javanu chhe
// syntax:
// while(condition){
//     // code to be executed
//     // increment/decrement
// }
// let h = 5;
// while (h <= 10) {
//     console.log("while loop iteration:", h);
//     h++;
// }


// let j = 50;
// while (j <= 100) {
//     console.log(j);
//     j++;
// }

    // let a = 60;
    // while (a <= 120) {
    //     console.log(a);
    //     a++;
    // }

let c = 30
while (c >= 20) {
    console.log("c:",c);
    c--;
}

let d = 1;
while (d <= 20){
    console.log("Hello",d)
    d++;
} 

let f = 50;
while (f <= 60){
    console.log(f);
    f++;
}

let q = 50;
while (q <= 60){
    console.log(q)
    ++q;
}

// do while loop
// do {} while (end);
// start
// end
// do
// code
// change
// while(end);

let j  = 12;
do {
    console.log("do while loop:",j); //code
    j++; // change(condition)
} while (j<20); // while check after executing code block (end)

let z = 15; // start 
do{
      console.log("do while loop error:",z); /// code
      z++;
} while(z < 10);


// breck
for (let k = 1; k <= 201; k++){
    console.log("loop with breck",k);
    if (k === 24){
        break;
    }
}

for (let k = 12; k <= 201; k++){
    console.log("loop with breck 2" ,k);
    if (k < 24){
        break;
    }
}


for (let score = 70; score <= 200; k++){
    console.log("Math Grade is:" ,score);
      if (score >= 90 && score <= 100) {
        console.log("A")
        break;
    } else if (score >= 80 && score < 90) {
         console.log("B")
        break;
    } else if (score >= 70 && score < 80) { 
         console.log("C")
        break;
    } else if (score >= 60 && score < 70) {
         console.log("D")
        break;
    } else if (score >= 0 && score < 60) {
        console.log("D++")
        break;
    } else {
        console.log('Invalid score');
    }
}


// for(let a = 1; a <= 10; a++){
//     if(a=== 5){
//         continue;
//     }
//     console.log(a);
// }

// for(let A = 1; A <= 10; A++){
//     if(A >= 5){
//         continue;
//     }
//     console.log("loop that skip number", A);
// }


               