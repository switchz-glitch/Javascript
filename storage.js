// localStorage API: setItem, getItem, removeItem, clear, key
// localStorage --> save that data into browser, storage, after close broser data won't delete
// (breowser nu aevu storage ke jema data storage thai chhe and browser bsnd thai jai data delete thato nathi)
// ~5MB storage

const { jsx } = require("react/jsx-runtime");

// setItem
// localStorage.setItem("key", "value");
localStorage.setItem("name", "test_user");

// getItem
// localStorage.getItem("key");
localStorage.getItem("name"); // "test_user"

// removeItem
// let user = localStorage.getItem("name");

//update
localStorage.setItem("name", "user");



// sessionStorage API:
// sessionStorage --> save that for temporarity time when you colse tab delete was delete 
//(aa storage data tab clode thay tyare delete thai jai chhe, browser)

// ~5MB storage

// setItem
sessionStorage.setItem("email", "test@test.com");

// getItem
let email = sessionStorage.getItem("email");

// removeItem
// sessionStorage.removeItem("email");

// update item
sessionStorage.setItem("email", "user@gmau.com");
sessionStorage.setItem("name", "user");
sessionStorage.setItem("age", "10");
sessionStorage.setItem("cart", "");

// clear
sessionStorage.clear();

// cookies API:
// 4kb storage
document.cookie = "email = user@gmail.com";

// max age
document.cookie = "user = demo; max-age = 10" // 10sec

// date and time
document.cookie = "age = 10; expires = wed, 20 Feb 2026 12:00:00 GMT"; 

// storing / retrieving string ns json
// save as string into localstorage and sessiomstorage -- try to save array and string
localStorage.setItem("user", '["demo", "test", "test1", "test2"]');
let users= localStorage.getItem("users");

// json.stringfy
// json.pares

localStorage.setItem("demo", JSON.stringify({name:'demo',age: 10, email: "demo@gmaol.com"})
);
let demo  = JSON.parse(localStorage.getItem("demo"));


