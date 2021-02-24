const headerMenu = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-background");
const hamburgerLines = hamburgerMenu.querySelectorAll(".line");

function headerShowUp() {
  headerMenu.classList.toggle("show-up");
  for (i = 0; i < hamburgerLines.length; i++) {
    hamburgerLines[i].classList.toggle("line-white");
  }
}

hamburgerMenu.addEventListener("click", headerShowUp);
