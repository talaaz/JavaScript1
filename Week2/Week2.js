//1-Create a function that takes 3 arguments and returns the sum of the three arguments.
function Sumfkt(a, b, c) { // a, b, c parameters
    return a + b + c;
}
Sumfkt(3, 7, 8); //argument   18 the sum
//2- Create a function named colorCar that receives a color, and prints out, "a red car" for example. (Hint: put it in your file and run it like before.)
var color = "red";

function colorCar(color) {
    return (` a ${color} car`);
};
colorCar(color);
//3-Create an object and a function that takes the object as a parameter and prints out all of its names and values.
let me = {
    name: 'tala',
    age: 20,
    nat: 'syrian'
}

function info(me) {
    console.log(`${me.name} ${me.age} ${me.nat}`)
}
info(me);
//-4Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)
var type1 = "car";
var type2 = "motorbike"

function vehicleType(color, code) {
    if (code == 1) {
        console.log(`a ${color} car`)
    } else if (code == 2) {
        console.log(`a ${color} motorbike`)
    }
}
vehicleType("blue", 2)
//-5Can you write the following without the if statement, but with just as a single line with console.log(...);?

/*if (3 == 3) {
console.log("true")
} else {
console.log("false")
}*/
console.log(`it's true? ${3==3}`);

//-6 Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"
var type1 = "car";
var type2 = "motorbike";

function vehicle(color, code, age) {
    if (code == 1 && age == 5) {
        console.log(`a ${color} used car`)
    } else if (code == 2 && age == 2) {
        console.log(`a ${color} motorbike`)
    }
}
vehicle("blue", 1, 5)
//-7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
//-8How do you get the third element from that list?
let vehicles = ['motorbike', 'caravan', 'bike', 'car'];

function vehicle(number) {
    console.log(vehicles[2]);
}
vehicle(number);
//-9Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".
var type1 = "carvan";
var type2 = "motorbike";
var type3 = "car";

function vehicle(color, code, age) {
    if (code == 1 && age == 3) {
        console.log(`a ${color} new carvan`)
    } else if (code == 2 && age == 2) {
        console.log(`a ${color} motorbike`)
    }
}
vehicle("green", 1, 3)
//10-Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
var vehicles = ['motorbike', 'caravan', 'bike', 'car'];

function advertisement(car) {
    for (vehicles) {
        console.log(`Amazing Joes Garage, we service ${vehicles[0]}`)
    }
}
advertisement(vehicles);

//11-What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7?
var vehicles = ['motorbike', 'caravan', 'bike', 'car'];
vehicles.bus = "bus"
//-12Create an empty object
var emptyObj = {}

//13-Create a function that takes two objects as parameters and compares them. You will actually need to write two functions — one that compares with == and one that compares with ===. Remember that objects can have objects inside of them so you'll need to find a way to compare every element of every object (types and values). For example:

var obj1 = {
    a: 1,
    b: 'this is the letter b',
    c: {
        foo: 'what is a foo anyway',
        bar: [1, 2, 3, 4]
    }
}

var obj2 = {
    a: '1',
    b: 'this is the letter b',
    c: {
        foo: 'what is a foo anyway',
        bar: [1, 2, 3, 4]
    }
}

//In our example we'll say that `obj1 == obj2` is `true` and `obj1 === obj2` is `false`. Make sure you can see why before you write any code!

function objectsTaskTrue(obj1, obj2) {
    if (obj1 == obj2) {
        return true;
    }
}

function objectsTaskfalse(obj1, obj2) {
    if (obj1 === obj2) {
        return false;
    }
}

//14-We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
    return bar; //maybe ?
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

//15Write some code to test two arrays for equality using == and ===. Test the following:What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;


x == y; //flase
x === y; //false
z == y; //true
z == x; //false



//16- Take a look at the following code:

var o1 = {
    foo: 'bar'
};
var o2 = {
    foo: 'bar'
};
var o3 = o2;

o2 = {
    foo: 'not bar'
};
console.log(o3); //did not change
Show that changing `o2`
changes `o3` (or not) and changing~~`o2`
changes `o3`~~`o1`
changes `o3` (or not).

Does the order that you assign(`o3 = o2`
    or `o2 = o3`) matter ? {
    Jim Cramer: ? ? ?
}

//17-What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;
//string typeof returns a string, of the type of the value you provided,
//When you check the value returned by typeof, it will be in string form, like:
