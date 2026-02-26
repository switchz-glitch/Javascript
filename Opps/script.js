// obj oriented js
// OOPS
// dar vakhat blueprint banavo ke obj karo dekhase ane  shu propertis ane method hase, ane pachhi tena upyog thi nava nava obj banava sakiye chhie tene j kevay chhe obj oriented programming

// blueprint (obj kevo dekhashe obj ma su method ) --> based on blurprint create obj

// blueprint -- contructor
// fnc based contructor --> contructor function --> function name alwayes start with capital letter


function CreatePencil (name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;

    this.write = function (text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.appendChild(h1);
    }
    console.log(this);
    // this.erase = function () {
    // let allH1 = document.querySelectorAll("h1");
    // if (allH1.length > 0) {
    //     allH1[allH1.length - 1].remove(); 
    // }}

    this.erase = function () {
    document.querySelectorAll("h1").forEach((text)=>{
        if(twxt.style.color === this.color){
            text.remove();
        }
    })


}
}

let p1 = new CreatePencil("pencil1", 5, "black")
let p2 = new CreatePencil("pencil2", 50, "white")
let p3 = new CreatePencil("pencil3", 20, "red")
let p4 = new CreatePencil("pencil4", 10, "skyblue")
let p5 = new CreatePencil("pencil5", 15, "brown")


// jo construction func koi field tene prototype ma add attech kari de to te field badha obj ma available thase

CreatePencil.prototype.shape = "rounded";

// what is protype: prototype is a property of function which is used to add new field to all the obj create by that funvtion

// class in js
// class is sytatical sugar over construction  function, class ma apde constructor fuction no upyog kariye chhiye

// why use class: class is more reable and easier to understand than construction function

class CreatePen {
    constructor(name, price, color, company) {
        this.name  = name;
        this.price = price;
        this.color = color;
        this.company = company;
        // what is constructor is a special method which is called when an obj is created, it is used to initialize the obj

        // why use constructor: constructor  is used to intialize the obj, it is called automatically when ans obj is created id is used to set the intial value of the obj
        console.log(this);
    }

       write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase() {
        document.querySelectorAll("h1").forEach((el) => {
            if (el.style.color === this.color) {
                el.remove();
            }
        });
    }
}

let pen1 = new CreatePen("pen1", 10, "red", "Cello");
// pen1.write("Hello Red");
// pen1.erase();

class User {
    constructor(name, email, age) {
        this.name  = name;
        this.email = email;
        this.age = age;
        this.role = "user"
        console.log(this)

    }

}

let u1 = new User("test", "test@gmail.com", 25);
let u2 = new User("Demo", "Demo@gmail.com", 20);


class Admin extends User {
    constructor(name,email,age){
        super(name,email,age); // je class extend kariye tenu constructore aet;le super -- user nu constructor -- super
        this.role = "admin";
        console.log(this);
    }
}

let u2admin = new User("admin", "admin@gmail.com", 20);