// object v array
// object -- when you want to show all data based on one entity(ek j entity mat all data  jota hoy) (ex. user data)
// array -- when you want to show all data 




// create 
// variable = {}
// ket : value -- key value sturcture 
let user = {
    name: "test",
    email: "test@gmail.com",
    roll_no: 70,
};

// access (dot vs  square notation)
// variable_name.key_name;
user.name;
user.email;
// user.first-name;
// variable_name['key1'];
// user['name']
// user[name]
let demo1 = "name"
user[demo1] // convert into name (demo = 'name') ---> output: test

// neasted and deep access
const user1 =  {
    name:"test",
    address: {
        city: "surat",
        pin: 395010,
        location: {
            lat: 24.2,
            lng: 77.4,
        },
    },
    email: "test@gmailcom",
}; // nested object
user1.address.location.lat; // -- deep access
// user1.address.location.lng;

// object destructuring:
let {lat, lng} = user1.address.location;
let {name, email, address} = user1;
let {city} = user1.address;
let {lat:abc_lat} = user1.address.location;

// destructuring and rename variable name

let demo = {
    first_name: "demo",
    last_name: "user",
    age: 56,
    email: "demo@gmaial.com",   
};

// looping(for in loop)
// for (variable name in object_name) {}
for (const key in demo){
   // console.log(key);
   // Object.key -- // not working
    // consol.log(key, ":", demo[key]); // -- log whole object
}

// copying object: spred, object.assign, deep-clone
// spred
// let user_data = {...demo};
let user_data = {gender: "male", role: "user", ...demo} // add key-value and copy object
// user case:  state update
// const user = {
// name: "amit",
// age: 30
// };

// const updateuser = {
// ...user,
// age : 31
// };
 
// consol.log(updateuser);

// object.assign -- copy and add key-value
let user_data_assign = Object.assign({}, demo); // noting will be add just copy
let user_data_assign1 = Object.assign({phone_number: 4514724525}, demo); // add and copy
// use case: default setting + user setting merge
// theme: "light",
// language: "en"
// };

// const userSetting = {
// theme: "dark"
// };

// const finalSetting = Object.assing({},
// defaultSetting, userSettings);

// consol.log(finalSetting);

// Object.assign vs spred
// Object.assign() -- method -- ES5 old version, less used
// spred -- oprator -- state update, most used i react application , clean code


// deep clone 
let temp_user1_clone = {...user1}
// user1_clone.address.city  = "valsad"  --> that will change value of user1 too
// issue: when you clone & copy nesterd object using pred or object.assing into new variable that copy all the vaue nested object pass only refrence not copy
//(jyare tame nested object(parent obj.) spred na upayog thi copy karo tyare nested onj.(child obj.) reference pass karshe -- value copy thase nahi)
// how to clone that -- use deep clone
// first convert your object to string
// json -- javascript object notation
// json.stringfy(obj._name) -- convert object into string
// json.parse(stringify_Object) -- convet string to object
let clone_user1 = JSON.parse(JSON.stringify(user1))
// Deep clone = completely new memory
// use case:
// Real time use:
// APL response handling
// Avoid data mutation bugs

// object.key -- add all keys into array formate
let key_arr = Object.keys(demo);
// use case: user profile from validation
// ex. website par thi user from ma data add kare chhe ane te data backend pase object formate ma aaave chhe
// const userProofile = {
// name: "Rahul",
// email: "rahul@gmail.com",
// age: 25
//};
// now check how many filed user fill up 
// const keys = Object.keys(userProfile);
// console.log(keys);
// console.log(keys.length);

// Object.entries -- add key and value into array formate
// give array of array
let key_value_arr = Object.entries(demo);
// use case: Display user details dtnmically (UI)
// ex. backend give you data into object formate 
const user3 = {
    name: "priya",
    city: "surat",
    role: "admin"
};
// print key and value both in profiles page
Object.entries(user3).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// Object.entries(user)  ==> convet into arrays 
// forEach ==> Array loop

// optinal chaining, computer properties
// user1.address.location.lng;
user1?.address?.location?.lng; // -- ? optinal chaning
// use case: 
// without optinal chaining -- app crash
// backend data incoplete
// api resonse safty
// const apiResponse = {
// user: {
//  profile: {
//       name: "neha"

//  }
//}

//};

// console.log(apiResponse.user?.profile?.name);
// console.log(apiResponse.user?.address?.city);

// ----------------------------------------------
// compted properties
let role  = "admin";
let user2 = {
    name: "test",
    age: 56,
    email: "test@gmail.com",
    address: {
        city: "surat" 
    },
    [role]: "test"
}

// use case: Dynamic object key 
// const fieldName = "email";
// const user6 = {
//     name: "ravi",
//     [fieldName]: "ravi@gmailcom",
// };
// console.log(user);
