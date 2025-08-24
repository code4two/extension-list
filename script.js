let mopo = document.querySelector(".nike");

// classes with nodelist yet to be assigned tasks
let cardBg = document.querySelectorAll(".fiber"); // Returns nodelist for all 12 fiber classes that represent the card
let inactive = document.querySelectorAll(".bath1");

mopo.addEventListener("click", () => {
  console.log("You are beautiful!!!!");

  let bodyBg = document.querySelector("body");
  let extensionBar = document.querySelector(".stone");

  function LightTheme() {
    console.log("I am trying to master JavaScript");

    bodyBg.style.color = "#000"; // Changes the body tag text color to black
    bodyBg.style.backgroundColor = "#E3F2FD"; // Changes the body tag background color to lightblue
    cardBg[3].style.backgroundColor = "#fff"; // Changes all card background color in the nodelist to white
    cardBg[3].style.border = "none"; // Removes the card border
    extensionBar.style.backgroundColor = "#fff"; // Changes the extension bar bg color to white
    mopo.style.backgroundColor = "#D3D3D3"; // Changes the themebar bg color to white
  }

  LightTheme();
});
