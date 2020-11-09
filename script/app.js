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
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

// Dynamically size projects images to be equal
function setAspectRatio(projects, expected) {
  if (projects.naturalWidth === 'undefined') return;

  let width = projects.naturalWidth;
  let height = projects.naturalHeight;

  //  Examine if width is larger than height then reduce the width but fix the height

  if (width > height) {
    projects.style.width = (width / height * expected) + 'px';
    projects.style.height = expected + 'px';

      return projects;
  }

  // Examine if height is larger than width then reduce the height but fix the width
  else if (height > width) {
    projects.style.width = expected + 'px';
    projects.styel.height = (height / width * expected) + 'px';

      return projects;
  }

  // Or return fixed width and height
  else {
    projects.style.width = expected + 'px';
    projects.style.height = expected + 'px';
  }
}