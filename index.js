// When the user scrolls the page, execute stickyNav
window.onscroll = function() {stickyNav()};

// Open mobile menu when hamburger is clicked
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav__open');
});

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

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  // Get the navbar
  var navbar = document.getElementById("navbar");
  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Open menu on mobile
function mobileMenu() {
  var checked = document.getElementById("side__menu").checked;
  console.log(checked);
  var nav = document.getElementById("navbar");
  var menu = document.getElementById("nav");
  if(checked) {
    nav.style.height = "100%";
    menu.style.display = "block";
  } else {
    nav.style.height = "auto";
    menu.style.display = "none";
  }
}

// Close mobile menu
function closeMenu() {
  if(screen.width < 1000) {
    var nav = document.getElementById("navbar");
    var menu = document.getElementById("nav");
    var checked = document.getElementById("side__menu");
    nav.style.height = "auto";
    menu.style.display = "none";
    checked.checked = false;
  }
}