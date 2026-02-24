let d = 20;
function abc(){
    console.log(d)
}
function def(){
    let d = 25;
    abc();
}
def();
// clg ans: 20

function parent(){
    let a =  12;
    return function (){
        console.log(a)
    };
}

let fnc1  = parent();
fnc1();

/// counter
function counter(){
    let a = 0;
    return function (){
        a++;
        console.log(a)
    };
}

let fnc = counter();
fnc();//1
fnc();//2
fnc();//3
fnc();//4

let fnc2 = counter();
fnc2(); // 1
fnc2();
fnc2(); 
fnc2(); // 4
fnc2(); // 5

// create toaster
function createToaster(configs = {}){  
    let toast = document.querySelector(".toast");
    return function(data){
        let toaster  = document.createElement("div");
        toaster.className = `${configs.theme === "dark"? "bg-black text-white border border-white" : "bg-white text-black border border-black"} px-6 py-3 top-4 right-4 rounded-xl pointer-events-none`
        toaster.textContent = data

        if(configs.positionY !== "top" || configs.positionX !=="left"){
            toast.className += `${configs.positionY === "top"? " top-10" : " bottom-10"}  ${configs.positionX === "left"? " left-10" : " right-10"}`
        }

        toast.appendChild(toaster);
        setTimeout(() => {
            toast.removeChild(toaster);
        }, configs.duration * 1000);
    };
}

createToaster();

let toast = createToaster({
    positionY: "right",
    positionX: "bottom",
    theme: "light",
    duration: 5,
});


setTimeout(()=>{
    toast("Welcome Admin");
},2000)

setTimeout(()=>{
    toast("You have 2 new Notifications");
},4000)
setTimeout(()=>{
    toast("Manager has Login At 9:30 Am");
},6000)
setTimeout(()=>{
toast("New Leave Application Raised By Devloper");
},8000)


