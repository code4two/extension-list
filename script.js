let mopo = document.querySelector(".nike");
let cardBg = document.querySelectorAll(".fiber"); // Returns nodelist for all 12 fiber classes that represent the card

mopo.addEventListener("click", () => {
  console.log("You are beautiful!!!!");

  let bodyBg = document.querySelector("body");
  let extensionBar = document.querySelector(".stone");
  let inactive = document.querySelectorAll(".bath1"); // Returns nodelist for all 2 bath1 classes that represent the active and inactive pages

  function LightTheme() {
    console.log("I am trying to master JavaScript");

    bodyBg.style.color = "#000"; // Changes the body tag text color to black
    bodyBg.style.backgroundColor = "#E3F2FD"; // Changes the body tag background color to lightblue
    extensionBar.style.backgroundColor = "#fff"; // Changes the extension bar bg color to white
    mopo.style.backgroundColor = "#D3D3D3"; // Changes the themebar bg color to white
    inactive[0].style.backgroundColor = "#fff"; // Changes the button bg colo to white
    inactive[1].style.backgroundColor = "#fff"; // Changes the button bg colo to white

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

let reels = cardBg.length;

function sumTotal() {
  console.log("The future is bright cos God's in it");
  console.log(reels);
}
