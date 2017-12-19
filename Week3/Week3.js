/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];

    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}
cars = generateCars (10);
//1.1: Cars with speeds between 30 and 60
//If this function we create returns true the element is saved in the, if we return false the element is filtered out.

const SpeedCars = cars.filter(function(car){
   if (30 < car.speed  && car.speed > 60){
     return true;
   } else {
     return false;
   }

});
console.log(SpeedCars);

//1.2: Car makes of the cars that are not lightyellow,
//so the array is going to look like this: ['BMW', 'Fiat'] etc


const notlightyellowCars = cars.filter(function(car){
   if (car.color !== "lightyellow"){
     return true;
   } else {
     return false;
   }

});
const notlightyellowCarsMake = notlightyellowCars.map(function(car){
  return car.make;
});
console.log(notlightyellowCars);
console.log(notlightyellowCarsMake)

//1.3: Cars sorted descending (fast first) where the color is lightgreen and the speed is lower than 80.
 //Now get the index of the first BMW
 const lightgreenslowcars = cars.filter(function(car){
     if (car.color === "lightgreen"  && car.speed > 80){
       return true;
     } else {
     return false;
   }
 });
console.log(lightgreenslowcars);
 const fastcarsfirst = lightgreenslowcars.sort(function(a, b) {
    return b.speed - a.speed;
});
console.log(fastcarsfirst);

//1.4: Lets change the cars array so it can be read by a danish person.
//Return an array of objects where the key in the object called speed is called fart
//(danish for speed), the make is called maerke and the color is called farve.
//The out put will look kind of like this:
var obj = [
    {
        mark: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    }
];
var carmark = obj[0];   // get first object
var val = carmark.mark;      // get current value
carmark.mærke = val;        // assign to new key
delete carmark.mark;         //

var carspeed = obj[1];   // get first object
var val2 = carspeed.speed;      // get current value
carspeed.fart = val2;        // assign to new key
delete carspeed.speed;         //

var carcolor = obj[2];   // get first object
var val3 = carcolor.color;      // get current value
carcolor.farve = val3;        // assign to new key
delete carcolor.color; 
