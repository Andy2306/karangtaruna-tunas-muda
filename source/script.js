//slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// animasi scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click',function (e){
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
  })
})

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const FixedNav = header.offsetTop;

  if (window.pageYOffset > FixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.remove("text-white");
  } else {
    header.classList.remove("navbar-fixed");
    header.classList.add("text-white");
  }
};

// Navbar button
const navbutton = document.querySelector("#navbutton");
const navMenu = document.querySelector('#nav-menu');

navbutton.addEventListener("click", function () {
  navbutton.classList.toggle("button-active");
  navMenu.classList.toggle('hidden');
});