// cntrol flow statements in JavaScript

// 1. if...else statement(if,if...else if, else)
    // if (condition) {} --> condition is true, execute the block

    if(12<13){
        console.log(true);
    }

    if(15<13){
        console.log(true);
     }// Condition is false, that why if satement block is not executed

     if(!12){
        console.log("number");
     }

     if(!0){
        console.log("number");
     }

// if...else if...else
    
    let age = 25;
    if(age < 18){
        console.log("You are a minor");
    }
    else if(age >= 18 && age < 60){
        console.log("You are an adult");
    }
    else{
        console.log("You are a senior citizen");
    }

    if(!12){
        console.log("number");
    }else{
        console.log("not a number");
    }


// if else else if 
let loggedin = true;
let admin = true;
if(loggedin && admin){    
    console.log("You are logged in and you are an admin");
}
else if(loggedin && !admin){
    console.log("You are logged in but you are not an admin");
}
else{
    console.log("You are not logged in");
}

//  switch statement:

    let day = 3;
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }

    // Example 2
switch("Bogo"){
    case "First50":
        console.log("You get 50% off");
        break;
    case "Bogo":
        console.log("Buy one get one free");
        break;
    case "BlackFriday":
        console.log("70% off on all items");
        break;
    default:
        console.log("No discount available");   
}    

// Early return pattern
function score(value){
    if(value >= 90){
        return "value is more than 90";
    }
    else if(value >= 80){
        return "value is more than 80";
    }
    else if(value >= 70){
        return "value is more than 70";
    }
    else if(value >= 60){
        return "value is more than 60";
    }
    return "value is less than 60";
}
score(85);

function score1(value){
    if(value >= 90) return "value is more than 90";
    else if(value >= 80) return "value is more than 80";
     else if(value >= 70) return "value is more than 70";
    else if(value >= 60) return "value is more than 60";
    return "value is less than 60";
}   

function score2(value){
    if(value < 60) return "value is less than 60";
    else if(value < 70) return "value is more than 60";
    else if(value < 80) return "value is more than 70";
    else if(value < 90) return "value is more than 80";
    return "value is more than 90";
}


// <p>Rock-Paper-Scissors:</p>
// <p>rock - scissors --> rock</P>
// <p>paper - rock --> paper</P>
// <p>scissors - paper --> scissors</P>
