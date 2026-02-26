// this keyword
// this keyword special heyword in js
// beacause of this keyword we can access the properties and methods of an object
// this keyword is used to refer to the current object
// this keyword is useful when we have to access the properties and methods of an object inside a function

// this keyword context is determined by how a function is called
// (that is the reson why this keyword is also called as dynamic keyword) (this ni value this nu use keys context ma chhe te par depend kare chhe)

// globle context
console.log(this)
// function context
function abc(){
    console.log(this); // this will refer to the global object (window in browser)
}
abc(); // this will refer to the global object (window in browser)

// method context
const obj = {
    name: "John",
    sayName: function(){
        console.log(this.name); // this will refer to the obj object
        console.log("this", this);
    },

// method --> ek function je koi object ni under hoy tene method kevaay chhe
// this -- give object

// if you use arrow function then this key give you window object because arrow function does not have its own this keyword it takes the this value from the surrounding context

// if you create one more function inside method then this loose their value -- soluion -- you have to create a arrow functon
}
obj.sayName(); // this will refer to the obj object

// method arrow function context
const obj2 = {
    name: "John",
    sayName: () => {
        console.log("this arrow fnc",this); // this will refer to the global object (window in browser)
    },
};
obj2.sayName(); 

// method -- fnc into fnc
let obj3 = {
    name: "John",
    sayName: function(){
       function abc1 (){
        console.log("this abc1", this); // this will refer to the global object (window in browser)
       }
         abc1();
    },
};
obj3.sayName();

// arrow fun and lexical this
// arrow fun does not have its own this keyword it takes the this value from the surrounding context
let obj4 = {
    name: "John", 
    sayName: function(){
        console.log(this); // this will refer to the obj4 object
         const abc2 = () => {
            console.log("this abc2", this); // arrow function does not have its own this keyword it takes the this value from the surrounding context (obj4 in this case)
            }
            abc2();
    },
};
obj4.sayName();

// manual binding of this keyword
// call, apply, bind
// function ne call karti vakhate this keyword ni value set kari sakay chhe
// mate call, apply, bind method no upyog kari sakay chhe

let obj5 = {
    name: "John",
    email: "john@example.com",
}; // save this obj into this keyword

function temp_a(){
    console.log(this); 
}

// func,call (obj_name) -- this keyword ni value set karva mate call method no upyog kari sakay chhe 
temp_a.call(obj5);

// FUNXTION, APPLY (obj_name) -- this keyword ni value set karva mate apply method no upyog kari sakay chhe
temp_a.apply(obj5);

// function, bind (obj_name) -- this keyword ni value set karva mate bind method no upyog kari sakay chhe
let  fnc = temp_a.bind(obj5); // blank onj create
fnc(); // call the function
// console.log(fnc); // this will give you the function definition