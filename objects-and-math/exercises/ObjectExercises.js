let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
};

let monkey = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
};

let beagle = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
};

let tardigrade = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
};

// After you have created the other object literals, add the astronautID property to each one.
let astronautID = [];
const animals = [superChimpOne, salamander, monkey, beagle, tardigrade];

while (astronautID.length < 5) {
  let ids = Math.floor(Math.random() * 10) + 1;
  if (!astronautID.includes(ids)) {
    astronautID.push(ids);
  }
}

for (let i = 0; i < animals.length; i++) {
  animals[i].astronautID = astronautID[i];
}

for (let animal of animals) {
  animal.move = function () {
    let steps = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
    return steps;
  };
}
for (let animal of animals){
   animal.steps = animal.move()
}

let crew = animals




function crewReports (animals){

   for (let animal of animals){
      console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
   }

}

function fitnessTest (animals){
   stepsReached = ""






}

function fitnessTest(candidates){
   let results = [], numSteps, turns;

   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
    }

    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
}

return results;
}

fitnessTest(animals)

console.log(fitnessTest(animals))









// Add a move method to each animal object


// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
