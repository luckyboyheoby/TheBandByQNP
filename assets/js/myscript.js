let slideIndex = 0;

function slideShow() {
  let i;
  var x = document.getElementsByClassName("slide-section");

  //turn off all slide section container
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 4000);
}

slideShow();

// modal
function displayModal() {
  const forOpacity = document.getElementById("forOpacity");
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  forOpacity.style.display = "block";
}

function closeModal() {
  const forOpacity = document.getElementById("forOpacity");
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  forOpacity.style.display = "none";
}

// get all buttons with text is Buy Tickets
const buttons = document.querySelectorAll("button");
for (const i of buttons) {
  if (i.textContent === "Buy Tickets") {
    i.addEventListener("click", displayModal);
  }
}

//When user click outside the windows, close modal
const forOpacity = document.getElementById("forOpacity");
window.onclick = function (event) {
  if (event.target == forOpacity) {
    closeModal();
  }
};

// get 2 close element by class closeModal and set event
const closeModalButton = document.getElementsByClassName("closeModal");
for (const i of closeModalButton) {
  i.addEventListener("click", closeModal);
}

// end modal

//toggle menu
const getAllAElement = document.querySelectorAll(
  "#nav-bar a:not(#toggle-menu):not(#nav-bar-search):not(#dropdown):not(#toggle-menu):not(#home)"
);
const toggleBtn = document.getElementById("toggle-menu");

let counter = 1;
toggleBtn.addEventListener("click", displayMenu);
for (const i of getAllAElement) {
  i.addEventListener("click", displayMenu);
}

function displayMenu() {
  //Neu khung hinh nho hon 739px tuc la mobile
  if (document.body.clientWidth <= 739) {
    if (counter % 2 !== 0) {
      const allHiddenItems =
        document.getElementsByClassName("mobile-scr-hidden");
      for (const i of allHiddenItems) {
        i.classList.add("mobile-scr-show");
        i.style.cssFloat = "none";
      }
    } else if (counter % 2 === 0) {
      const allHiddenItems =
        document.getElementsByClassName("mobile-scr-hidden");
      for (const i of allHiddenItems) {
        i.classList.remove("mobile-scr-show");
        i.style.cssFloat = "left";
      }
    }
    counter++;
  }
}
