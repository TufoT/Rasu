const navbar = document.querySelector('.nav');

let top = navbar.offsetTop;

function sticky() {
  if (window.scrollY >= top) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', sticky);