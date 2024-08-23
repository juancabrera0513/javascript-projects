// Code your selectRandomEntry function here:

let idSelected = [];

function selectRandomEntry(arr) {
  while (idSelected.length < 3) {
    let index = Math.floor(Math.random() * arr.length);
    let selectedItem = arr[index];
    if (!idSelected.includes(selectedItem)) {
      idSelected.push(selectedItem);
    }
  }
  return idSelected;
}

// Code your buildCrewArray function here:

let crew = [];
function buildCrewArray(idSelected, candidates) {
  for (let key in candidates) {
    if (idSelected.includes(candidates[key].astronautID)) {
      crew.push(candidates[key].name);
    }
  }
}



let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};

let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Code your template literal and console.log statements:

selectRandomEntry(idNumbers);
console.log(idSelected);
buildCrewArray(idSelected, animals);

console.log(`${crew[0]}, ${crew[1]} and ${crew[2]} are going to space!"`);

  
