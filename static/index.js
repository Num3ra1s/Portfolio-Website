// Copyright (c) 2023, Ryan Fae Oet
// All rights reserved.

// This source code is licensed under the BSD-style license found in the
// LICENSE file in the root directory of this source tree. 

// When the user scrolls the page, execute stickyNav
window.onscroll = function() {stickyNav()};

// Open mobile menu when hamburger is clicked
const navToggle = document.querySelector('.nav__toggle');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav__open');
});

// Close mobile menu when link is selected
const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      document.body.classList.remove('nav__open');
  })
})

// Change image to emphasized on hover
function emphasize(img) {
 img.classList.add("fa-beat")
}

// Change image to deemphasized after hovering
function deemphasize(img) {
  img.classList.remove("fa-beat")
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