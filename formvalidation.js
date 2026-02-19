let form  = document.querySelector("forrm");
let ee = document.querySelector("#ee");
form.addEventListener("submit", (e) => {
    e.preventDefault()
let email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

let test_ans = email_regex.text(email.value);
console.log(test_ans);

if (!test_ans) {
    ee. textContent = "Your Eamil is Valid"
    ee.style.color = "red"
} else {
    
}

})

// value vs textContanct
// value ---> get value from inout fild
// textContant ---> html tag set value abd get value

