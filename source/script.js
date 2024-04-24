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

//animasi masuk
/*window.addEventListener("scroll", function () {
  const box = document.querySelector("#animateSlide");
  const distanceFromTop = box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (distanceFromTop < windowHeight / 2) {
    box.classList.add("box");
  } else {
    box.classList.remove("box");
  }
});
*/

// Mendapatkan referensi elemen yang ingin diubah
var elemen = document.getElementById('animateSlide');
var elemensatu = document.getElementById('animateSlideSatu');
var elemendua = document.getElementById('animateSlideDua')

// Fungsi untuk menambahkan atau menghilangkan class
function toggleClassOnScroll() {
  var lastScrollTop = 0; // Variabel untuk menyimpan posisi scroll terakhir

  window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Jika scroll ke bawah dan melewati kelipatan 400px, tambahkan class
    if (currentScroll > lastScrollTop && currentScroll % 400 < 100) {
      elemen.classList.add('box');
    }
    else if (currentScroll > lastScrollTop && currentScroll % 425 < 100) {
      elemensatu.classList.add('box');
    }
    else if (currentScroll > lastScrollTop && currentScroll % 775 < 100) {
      elemendua.classList.add('box')
    }
    // Jika scroll ke atas, hilangkan class
    else if (currentScroll < lastScrollTop && currentScroll % 400 > 300) {
      elemen.classList.remove('box');
      elemensatu.classList.remove('box');
      elemendua.classList.remove('box')
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Perbarui posisi scroll terakhir
  }, false);
}

// Memanggil fungsi saat dokumen siap
document.addEventListener('DOMContentLoaded', toggleClassOnScroll);