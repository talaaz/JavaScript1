//  Declare a variable x and initialize it with an integer.
let T = 6;
console.log(T)
//    How do you round the number 7.25, to the nearest integer?
//math.round(7.25);
//Create a array called colors with the strings red, green and blue inside.
let colors = ["red", "green", "blue"];
//  How can you find the length of the string you just created?
console.log(colors.length);
//Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type. For example:

let x = 9;
let y = 'Hello';

if (x === y) {
    console.log('SAME TYPE');
} else if (x == y) {
    console.log('Not!');
}

//If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
console.log(7 % 3);
//Write a program to answer the following questions:
//Can you store multiple types in an array? Numbers and strings?
let multi = [1, "Yes"]
//Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?
if (6 / 0 == 10 / 0) {
    console.log('Yas');
}
