// Change image to emphasized on hover
function emphasize(img) {
 if(img.id === "github") {
  img.src = "images/github-emphasis.png";
 } else if(img.id === "linkedin") {
  img.src = "images/linkedin-emphasis.png";
 } else if(img.id === "mail") {
  img.src = "images/mail-emphasis.png";
 }
}

// Change image to deemphasized after hovering
function deemphasize(img) {
  if(img.id === "github") {
   img.src = "images/github.png";
  } else if(img.id === "linkedin") {
   img.src = "images/linkedin.png";
  } else if(img.id === "mail") {
   img.src = "images/mail.png";
  }
}

// When the user scrolls the page, execute stickyNav
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}