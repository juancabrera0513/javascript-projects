// Code your orbitCircumference function here:


function calcCircumference(orbitRadius){
   
   return 2 * Math.PI * orbitRadius

  
}
let circumference = calcCircumference(2000)

// Code your missionDuration function here:

function missionDuration(orbitsCompleted, orbitRadius = 2000, speed= 28000){
    const circumference = calcCircumference(orbitRadius); 
    const distance = orbitsCompleted * circumference;     
    const time = distance / speed;                 
    return time.toFixed(2);                              s
  

}
let orbitRadius = 2000
let speed = 28000
let duration = missionDuration(5)

console.log(`The mission will travel ${orbitRadius} km around the planet, and it will take ${duration} hours to complete.`);




// Copy/paste your selectRandomEntry function here:
let idSelected = ""
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(arr) {
  while (idSelected.length < 1) {
    let index = Math.floor(Math.random() * arr.length);
    let idSelected = arr[index];
   
      idSelected.push(selectedItem);
    
  }
  return idSelected;
}


// Code your oxygenExpended function here:

let spaceWalk = missionDuration(3)
function oxygenExpended(candidate){
  let oxygenUsed = candidate.o2Used(spaceWalk).toFixed(3)
  
  
  
  
  console.log(`${candidate.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${oxygenUsed} kg of oxygen.`)
}




// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
  };
 
 let crew = [candidateA,candidateC,candidateE];
 
// console.log(oxygenExpended(selectRandomEntry(crew)))
console.log(selectRandomEntry(crew))