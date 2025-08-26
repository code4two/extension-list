let mopo = document.querySelector(".nike");

mopo.addEventListener("click", () => {
  console.log("1. Parent Function Clicked!😬");

  let bodyBg = document.querySelector("body");
  let extensionBar = document.querySelector(".stone");
  let inactive = document.querySelectorAll(".bath1"); // Returns nodelist for all 2 bath1 classes that represent the active and inactive pages
  let modalCard = document.querySelector(".fighter"); // Modal card
  let cancelButton = document.querySelector(".phiki"); // Returns cancel button

  function LightTheme() {
    console.log("2. LightTheme Function Clicked!!🤗");

    bodyBg.style.color = "#000"; // Changes the body tag text color to black
    bodyBg.style.backgroundColor = "#E3F2FD"; // Changes the body tag background color to lightblue
    extensionBar.style.backgroundColor = "#fff"; // Changes the extension bar bg color to white
    mopo.style.backgroundColor = "#D3D3D3"; // Changes the themebar bg color to white
    inactive[0].style.backgroundColor = "#fff"; // Changes the button bg colo to white
    inactive[1].style.backgroundColor = "#fff"; // Changes the button bg colo to white
    modalCard.style.color = "#000"; // Changes the modalCard tag text color to black
    modalCard.style.backgroundColor = "#fff"; // Changes the modalCard background color to white
    cancelButton.style.backgroundColor = "#fff"; // Changes the cancelButton background color to white

    //USING FOR LOOP
    let cardBg = document.querySelectorAll(".fiber"); // Returns nodelist for all 12 fiber classes that represent the card

    //USING FOR LOOP TO CONVERT ALL CARD BG TO WHITE
    for (let i = 0; i < cardBg.length; i++) {
      cardBg[i].style.backgroundColor = "#fff"; // Changes all card background color in the nodelist to white
    }

    //USING FOR LOOP TO  CONVERT ALL CARD BORDER TO NONE
    for (let k = 0; k < cardBg.length; k++) {
      cardBg[k].style.border = "none"; // Changes all card background color in the nodelist to white
    }

    //USING FOR EACH
    let removeButton = document.querySelectorAll(".fikayo"); // Returns nodelist for all 12 fikayo classes that represent the remove button

    //USING FOR EACH TO CONVERT ALL REMOVE BUTTON BG TO WHITE
    removeButton.forEach((element) => {
      element.style.backgroundColor = "#fff";
    });
  }

  LightTheme();
});

// CODE REQUIRED TO SETUP ALL ACTIVE & INACTIVE COUNTER
let activeIcon = document.querySelectorAll(".muyiwa"); // Returns nodelist for all muyiwa classes that represent the remove button
let inActiveIcon = document.querySelectorAll(".bolu"); // Returns nodelist for all bolu classes that represent the remove button

let bothIcons = activeIcon + inActiveIcon;

let activeCount = activeIcon.length;
let inActiveCount = inActiveIcon.length;

let totalCount = activeCount + inActiveCount;

let allButton = document.querySelector(".bath");
let inActiveButton = document.querySelectorAll(".bath1");

allButton.innerHTML = `All (${totalCount})`;
inActiveButton[0].innerHTML = `Active (${activeCount})`;
inActiveButton[1].innerHTML = `Inactive (${inActiveCount})`;

// SETTING REMOVE BUTTON FUNCTION
let removeButton = document.querySelectorAll(".fikayo"); // Returns nodelist for all 12 fikayo classes that represent the remove button

// SETTING UP REMOVE BUTTON FUNCTION
removeButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Remove Button Clicked");

    let backdrop = document.querySelector(".backdrop");
    let modal = document.querySelector(".fighter");

    backdrop.style.display = "block";
    modal.style.display = "block";
  });
});

//SETTING UP CANCEL BUTTON FUNCTION
let cancelButton = document.querySelector(".phiki");
cancelButton.addEventListener("click", () => {
  console.log("Cancel Button Clicked!!");

  let backdrop = document.querySelector(".backdrop");
  let modal = document.querySelector(".fighter");

  backdrop.style.display = "none";
  modal.style.display = "none";
});

//SETTING UP DELETE BUTTON FUNCTION
let deleteButton = document.querySelector(".phiki2");
deleteButton.addEventListener("click", () => {
  console.log("Delete Button Clicked!!");

  let backdrop = document.querySelector(".backdrop");
  let modal = document.querySelector(".fighter");
  let mainCard = document.querySelectorAll(".fiber"); // Returns nodelist for all 12 fiber classes that represent the card

  backdrop.style.display = "none";
  modal.style.display = "none";

  mainCard[0].style.display = "none";
  //   mainCard[1].style.display = "none";
  //   mainCard[2].style.display = "none";
  //   mainCard[3].style.display = "none";
  //   mainCard[4].style.display = "none";
  //   mainCard[5].style.display = "none";
  //   mainCard[6].style.display = "none";
  //   mainCard[7].style.display = "none";
  //   mainCard[8].style.display = "none";
  //   mainCard[9].style.display = "none";
  //   mainCard[10].style.display = "none";
  //   mainCard[11].style.display = "none";

  //   for (let w = 0; w < mainCard.length; w++) {
  //     // THIS DELETES ALL BUTTON INSTEAD OF THE SELECTED ONE
  //     mainCard[w].style.display = "none";
  //   }
});

// HOW TO FILTER PARENT DIV OF TWO CHILDREN INTO SEPARATE VARIABLES
let totalCard = document.querySelectorAll(".fiber"); // Returns nodelist for all 12 fiber classes that represent the card
let activeCard = Array.from(totalCard).filter((el) =>
  el.querySelector(".muyiwa")
);
let inActiveCard = Array.from(totalCard).filter((el) =>
  el.querySelector(".bolu")
);

// Array.from(variableName) turns a variable with nodelist into an array
let newArray = Array.from(totalCard);

let allCards = document.querySelectorAll(".fiber");

allCards[0];
