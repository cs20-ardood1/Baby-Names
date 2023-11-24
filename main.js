// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}
// Display All Baby Names
function displayAll() {
  for (let i = 0; i < babyData.length; i++) {
    let baby = babyData[i];
    nameCountSpan.innerHTML = babyData.length;
    container.innerHTML += `<div><p>
    <strong>${baby.name}</strong> 
    (Rank: ${baby.rank}, 
    Gender: ${baby.gender})</p></div>`;
  }
  console.log("Display All");

  // Confirm data load
  console.log(babyData);
}

// Display Names by Gender
function searchGender() {
  let genderInput = prompt("Please enter gender (Boy/Girl):");
  let genderCount = 0;

  for (let i = 0; i < babyData.length; i++) {
    let baby = babyData[i];

    if (genderInput == baby.gender) {
      container.innerHTML += `<div><p><strong>${baby.name}</strong> 
      (Rank: ${baby.rank}, Gender: ${baby.gender})</p></div>`;
      genderCount++;
    }
  }
  nameCountSpan.innerHTML = genderCount;

  console.log("Search By Gender");
}

// Display Names within a Range of Ranks
function searchRank() {
  let minRank = +prompt("Please enter minimum rank:");
  let maxRank = +prompt("Please enter maximum rank:");
  let rankCount = 0;
  for (let i = 0; i < babyData.length; i++) {
    let baby = babyData[i];
    if (baby.rank >= minRank && baby.rank <= maxRank) {
      container.innerHTML += `<div><p><strong>${baby.name}</strong> 
      (Rank: ${baby.rank}, Gender: ${baby.gender})</p></div>`;
      rankCount++;
    }
  }
  nameCountSpan.innerHTML = rankCount;

  console.log("Search By Rank");
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let startingLetter = prompt("Pleaase enter starting letter:");
  let letterCount = 0;
  for (let i = 0; i < babyData.length; i++) {
    let baby = babyData[i];
    if (baby.name.startsWith(startingLetter)) {
      container.innerHTML += `<div><p><strong>${baby.name}</strong>
      (Rank: ${baby.rank}, Gender: ${baby.gender})</p></div>`;
      letterCount++;
    }
  }
  nameCountSpan.innerHTML = letterCount;
  console.log("Search by Starting Letter");
}

// Display Names with a Specific Length
function searchLength() {
  let nameLength = +prompt("Please enter name length:");
  let lengthCount = 0;
  for (let i = 0; i < babyData.length; i++) {
    let baby = babyData[i];
    if (baby.name.length === nameLength) {
      container.innerHTML += `<div><p><strong>${baby.name}</strong>
      (Rank: ${baby.rank}, Gender: ${baby.gender})</p></div>`;
      lengthCount++;
    }
    nameCountSpan.innerHTML = lengthCount;
  }
  console.log("Search by Name Length");
}
