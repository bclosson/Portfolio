// CONTACT MODAL
const modal = document.getElementById("myModal");
const btn = document.getElementById("contactBtn");
const span = document.getElementsByClassName("close")[0];

// When user clicks on the button, open modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When user clicks anywhere outside of modal, close modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
