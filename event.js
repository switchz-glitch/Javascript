// event -- page per koi pan action karo tene ek event rise karshe, page par click, hover, typing all are event
// event listener --- event nu reaction -- give reaction when click, doubleclick, hover, typing

// add event listener
// select --> event --> function --> what you change
// event.addEventListener("event_name", function(){})

// =============================================
// command event: click, input, change, submit, mouseover, keyup
// click
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("cs-body");
    console.log(btn.textContent)
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode"
    } else{
        btn.textContent = "Dark Mode"
    }
});

// change box color

let box = document.querySelector(".box");
let btn1 = document.querySelector(".btn1");
let span = document.querySelector("span");

btn1.addEventListener("click", () => {
    box.classList.toggle("bg-red");
    
    if (span.textContent=== "change color into Red" ) {
        span.textContent = "change color into white"
        
    } else {
         span.textContent = "change color into Red"
    }

  
});



// input
// how to know whitch is typed ?
let inp = document.querySelector(".text");
inp.addEventListener("input", (dets) => {
    // console.log(dets);
    if (dets.data !== null){
        console.log(dets.data);
    }
});



// change -- when you change element state
let sel = document.querySelector(".sel");
let device = document.querySelector(".device");

sel.addEventListener("change", (dets)=> {
    console.log(dets.target.value),
    device.textContent = dets.target.value;
});


let box2 = document.querySelector(".outer_box");
let inp1 = document.querySelector(".color-inp");
let inp2 = document.querySelector(".b-inp");

inp1.addEventListener("change", (dets)=> {
    box2.style.backgroundColor = dets.target.value;
 
});
inp2.addEventListener("change", (dets)=> {
    box2.style.borderColor = dets.target.value;
 
});

// submit

// submit
let form = document.querySelector("form");
form.addEventListener("sumbit",() => {
    document.body.style.backgroundColor = "red";
});
// mousemove
let box3 = document.querySelector(".box3");
box3.addEventListener("mousemove", () => {
    box3.style.width = "500px";
})

box3.addEventListener("mouseout", () => {
    box3.style.width = "100px";
})


  document.getElementById("inputBox").addEventListener("keyup", function() {
    document.getElementById("output").textContent = this.value;  });


// event object:
// sel.addEventListener("change", (dets) => {
// console.log(dets); ==> dets -- that called event object  
//})


// target, type, preventDefault
// target --> that show element
// type -- show event type
// preventdefault --> use for html-form --> prevent from to refresh and clean details


//======================
// event bubbling and capturing
// event bubbling --> jena par event aave tene par listener na hoy to aapu event tena par listener gotasean aavu karta karata u[ar tarf move karshe
 
// or

// event capturing ==> revece of event bubblig
// when  you raise event then your evevt flow(propogation) ==> can run into two phase

// first phase  ===  event can run to top level element to bottom level element(parent -- child element)
// second phase ===  event can run to raised element to parent element(child -- parent element)

// first --> first phase then ssecond phase ==> but phase 1 is default off, you have to on that setting
// first phase -- capture phase
// second phase -- event bubbling

// phase 2: chlid --> parent (most_inner  -- inner -- outer)
// true  --- outer : phase 1(true vali event run) : parent --> child (outer(done)) phase 2 {true vage rni event run thai }: child --> parent {most_inner -- inner}
// true -- outer , inner : phase 1 {true vali event run} :parent -- child {outer(done)} -- inner (done) phase 2 (true vagar ni event run thai) : child --> parent (most_inner)





let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let most_inner = document.querySelector(".most_inner");

outer.addEventListener("click", () => {
    console.log("outer div click");
    document.body.style.backgroundColor = "skyblur";
},true);

inner.addEventListener("click", () => {
    console.log("inner div click");
   
}); // this true is event capturing event so this run first

most_inner.addEventListener("click", () => {
    console.log("most inner div click");
    document.body.style.backgroundColor = "red";
});


//use case : make it to do list thing
// when you click that that show strick using biubbling 
// create list that show shopping thing -- use css (text decorection -- list-through)

let ul = document.querySelector("ul");

ul.addEventListener("click", (dets) => {
    if (dets.target.tagName === "LI") {
        if (dets.target.style.textDecoration === "line-through") {
            dets.target.style.textDecoration = "none";
        } else {
            dets.target.style.textDecoration = "line-through";
        }
    }
});

// /// ex ==============
// let ul = document.querySelector("#list");

// ul.addEventListener("change", function (e) {
//     if (e.target.matches("input[type='checkbox']")) {
//         let li = e.target.parentElement;
        
//         if (e.target.checked) {
//             li.style.textDecoration = "line-through";
//         } else {
//             li.style.textDecoration = "none";
//         }
//     }
// });


// live character
let counter = document.querySelector("#counter");
let count = document.querySelector(".count");
counter.addEventListener("input", (dets) => {
    console.log(dets.target.value.length);
    console.log(counter.value.length);

    let limit = 10 - counter.value.length;

    if (limit < 0) {
        alert("Limit Reached");
        counter.disabled = true;
        
    } else {
        count.textContent = limit;
    }
}) ;

