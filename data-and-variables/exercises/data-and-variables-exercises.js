// Declare and assign the variables below

nameShuttle = "Determination";
shuttleSpeed = 17500;
distanceToMarsInKm = 225000000;
distanceToTheMoonInKm = 384400;
mileToKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof(nameShuttle))
console.log(typeof(shuttleSpeed))
console.log(typeof(distanceToMarsInKm))
console.log(typeof(distanceToTheMoonInKm))
console.log(typeof(mileToKilometer))

// Calculate a space mission below

let milesToMars = distanceToMarsInKm * mileToKilometer;
let hourToGetToMars = milesToMars / shuttleSpeed
let daysToGetToMars = hourToGetToMars / 24

// Print the results of the space mission calculations below

console.log(milesToMars + " mph")
console.log(hourToGetToMars + " hours")
console.log(daysToGetToMars)


console.log(nameShuttle + " will take " + daysToGetToMars + " days to reach Mars.")

// Calculate a trip to the moon below

let milesToMoon = distanceToTheMoonInKm * mileToKilometer;
let hourToGetToMoon = milesToMoon / shuttleSpeed
let daysToGetToMoon = hourToGetToMoon / 24



// Print the results of the trip to the moon below

console.log(nameShuttle + " will take " + daysToGetToMoon + " days to reach The Moon.")

