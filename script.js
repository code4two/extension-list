let mopo = document.querySelector(".nike");

// classes with nodelist yet to be assigned tasks
let cardBg = document.querySelectorAll(".fiber"); // Returns nodelist for all 12 fiber classes that represent the card
let removeButton = document.querySelectorAll(".fikayo"); // Returns nodelist for all 12 fikayo classes that represent the remove button

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

    //CONVERT THE NODELIST TO FOREACH INSTEAD
    cardBg[2].style.backgroundColor = "#fff"; // Changes all card background color in the nodelist to white
    cardBg[2].style.border = "none"; // Removes the card border
    removeButton[0].style.backgroundColor = "#fff"; // Changes the button bg colo to white
    removeButton[4].style.backgroundColor = "#fff"; // Changes the button bg colo to white
  }

  LightTheme();
});
