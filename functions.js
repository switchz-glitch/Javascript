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

cartBtn_price("laptop", 50000);
cartBtn_price("Apple 16", 50000);
cartBtn_price("Ps 5", 50000);

