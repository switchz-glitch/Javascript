// SetTimeOut, clearTimeout

// setTimeout --> run only one time
// timeout -- in ms

setTimeout(()=>{
    console.log("Hello");
},2000);

// setIntervsl, cleanInterval

// setInterval run into (infinity time)
let timmer = setInterval(() => {
    console.log("hi, set interval");
}, 2000);

// clear Interval
clearInterval(timmer);

let count = 0;
let counter = setInterval(()=>{
count ++;
if (count <=10) {
    console.log(count);    
} else {
    console.log("Stop Timmer")
    clearInterval(counter);
}
}, 100);    

// popup windod
let button  = document.querySelector("button");
let card = document.querySelector(".card");

let popup = setTimeout(()=> {
    card.style.display = "block";
}, 5000);


button.addEventListener("click",()=>{
    card.style.display = "none";
})


// Real use:delaying UI action, auto refresh

// Downloading card
let dCount = 0;
let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let h2 =  document.querySelector("h2")

let download = setInterval(()=>{
    if(dCount <= 99){
        console.log(dCount);
         dCount++;
         percent.textContent = `${dCount}%`;
         bar.style.width = dCount + "%";
    }else{
        h2.textContent = "Downloaded";
        clearInterval(download);
    }
}, 30)



// setTimeout vs setInterval






