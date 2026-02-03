// function 
// what --> function os a block ofocde taht performs a specific task
// why --> to avoid code repetition and to make code moduylar and reusable.
// how --> function keyword , name, parameters, body, return satement

// type  of function:
// function name(params){} --> functins declaration
function abc() {}
// let fnc = () => {} --> function expression
let fnc = function () {}
// let fnc = () => {} --> arrow function -->fat function

let fnc1 = () =>{};


function temp_cart()
{
    console.log("Adding Product");
}

temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// param are the name listed in the function definition
// (param --> () ni andar lakheli values)
// argu are te real value passed to the function (args --> fuction call karti () ni andar lakhelli(pass) kareli values)

function cartBtn_price(product,price){
    console.log("Ading", product, "to cart with",price);

}
cartBtn_price("laptop", 50000);
cartBtn_price("Apple 16", 50000);
cartBtn_price("Ps 5", 50000);

function cartBtn_price(product){
    console.log("Ading", product);
}

cartBtn_price("laptop", );
cartBtn_price("Apple 16", );
cartBtn_price("Ps 5", );

function std_record(roll,name,fees){
    console.log("Roll_no: ",roll,"Name of Student:",name,"Fees:",fees);
}

std_record(101,"om","paid");

// expresion function
let cartBtn = function (product,price){
    console.log("Ading", product, "to cart with",price);

}
cartBtn("laptop", 50000);
cartBtn("Apple 16", 50000);
cartBtn("Ps 5", 50000);

// Arrow fun
let cartBtn_arrow =  (product,price) =>{
    console.log("Ading", product, "to cart with",price);

}
cartBtn_arrow("laptop", 50000);
cartBtn_arrow("Apple 16", 50000);
cartBtn_arrow("Ps 5", 50000);

// DEfsult rest parameter in function
// defult
function def(v1, v2){
    console.log(v1, v2);
}

function BuyNow(Products = "Products Name", Price = "Products Price"){
    console.log(Products, Price);
}

BuyNow("Mobile")

// rest-- jayare function ma multiple arguments pass karava hoy to vadhare params banava pase chhe mate te na mate rest paerameter use karaye(rest -- ...jo function na parameter ni andar lakhavama ave chhe)
function abcd(p1,p2,...number){
console.log(p1,p2,number);
}

abcd(1,2,3,4,5,6,6,7,8,9,10);

function abcd1(p1,p2,...number){
console.log("rest", p1,p2,number);
}

abcd1(1,2,3,4,5,6,6,7,8,9,10);


function produts(p1,p2,...number){
console.log("rest", p1,p2,number);
}

abcd1(1,2,3,4,5,6,6,7,8,9,10);


// return or early return
function temp_fnc(){
    if(10>9) return "true";
}

temp_fnc();

// first Class function:
// function can be treated as variabes
// let fnc1 = function () {} -- function expression
// let fnc2 = () => {} -- arrow function 
const cart1 = function (pro,price){
    console.log(`Adding ${pro} at ${price}`); 
} ;
cart1("function expression - s25 ultra",80000);
// Convert arrow fun
const cart2 = (produts1,price) =>{
    console.log(`Adding ${produts1} at ${price}`); 
};

cart2("function expression - s25 ultra",80000);

const cart3 = (veg,non) =>{
    console.log(`Add to cart ${veg} or ${non}`); 
};
cart3("milk","egg");



// function can be passed as argument to other function
function a(params){
    params();// agrs
}
a(() =>{
    console.log("second fun");
});// function agrs -- function



// function can be returned from other function
function temp3(){
    return function temp4(){
        console.log("function 4");
    }
}

console.log(temp3()());

/// for example
function apple(){
    return function banana(){
      return  console.log("function is banana");
    }
}

console.log(apple()());

/// higher order function
// function tahat take another function as an argument or return a fun as aresult

// function abcd(val){val();}
// --> abcd((function){consol.log("hello")})
// function abcd(val){} -- higher ordere function

// function abcd(){return function(){}}abcd()() -- higher order
// pure func --> function je same input 
let temp_a = 20;
function temp_change (){
    return "hello";
} // pure func
console.log(temp_change());

console.log("value of temp_a before change:",temp_a);

// input func --> function je same input par diffrent output apse athava bahar  na state ne modify kare (input func --> je frunc bahar na state ne modify kare)

function temp_change1(){
    temp_a++;
} // input function

temp_change1();
console.log("value of temp_a after change",temp_a);
temp_change1();
console.log("value of temp_a after change",temp_a);
temp_change1();
console.log("value of temp_a after change",temp_a);


// close func
// func je potana parent func naa variables ne access kari shake(return thava valo  func use kaeshe parent funct na koi variable)(func within func)
function outer(){
    let outer_var = 50;// parent func variable
    function inner(){
        outer_var--;
        console.log(outer_var); //  chide func console.log
    }
    return inner();
}
console.log(outer())


function outer1(){
    let outer_var = 50;// parent func variable
    function inner(){
        outer_var++; outer_var++;
       
        console.log(outer_var); //  chide func console.log
    }
    return inner();
}
console.log(outer1())

// lexical scope --> nested func can acsses variable decalared in their outer scope

function outer2(){
    let temp_outer = "outer func variable";

    function inner1(){
        let temp_inner = "inner func variable";
        console.log(temp_outer);


        function most_inner(){
            console.log("Most_inner func outer",temp_outer);
            console.log("Most_inner func outer",temp_inner);

        function most_most_inner(){
                 console.log("Most_most_inner func outer",temp_outer);
                console.log("Most_most_inner func outer",temp_inner);
         
            }
            most_most_inner();
        }
        most_inner();
    }
    inner1();

}
outer2();

// IIFE - Immediately invocked func expression
(function () {})(); // func je declare jarta j call thai jaye
(function temp_IIFE(){
    console.log("IIFE Function")
})();

// Hoisting in function
temp_abc();
function temp_abc(){
    console.log("hosting Function")
}


let  temp_abc1 = () => {
    console.log("acd Function")
}
temp_abc1();

// <p>What's the difference between function declaration and function expression in terms of hoisting?</p>

