// Slideshow JS
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("projects");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "inline";
  dots[slideIndex - 1].className += "active";
}

// MODAL 
const modal = document.getElementById('myModal');
const btn = document.getElementById('contactBtn');
const span = document.getElementsByClassName('close')[0];

// When user clicks on the button, open modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When user clicks anywhere outside of modal, close modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}