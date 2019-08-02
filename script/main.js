const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnLine = document.querySelectorAll('.btn-line');
const menuNav = document.querySelector('.menu-nav');
const menuNavLinks = document.querySelectorAll('.menu-nav__link');
const menuLogo = document.querySelector('.menu-logo');
const menuSocials = document.querySelector('.menu-social-media');
const headerHeading = document.querySelector('.header__heading');
const logo = document.querySelector('.logo');
const scroll = document.querySelector('.scroll');
const goBack = document.querySelector('.go-back');
const constTab = [menu, menuNav, menuLogo, menuSocials, headerHeading, logo, scroll];

const fromTopAbout = document.querySelector('.about').offsetTop;
const fromTopWorkshop = document.querySelector('.workshop').offsetTop;
const fromTopOffer = document.querySelector('.offer').offsetTop;
const fromTopContact = document.querySelector('.contact').offsetTop;


function goToSection() {
  if (this.textContent === 'we are') {
    window.scrollTo({
      top: fromTopAbout,
      behavior: "smooth",
    });
    setTimeout(show, 100);
    // show(); 
  } else if (this.textContent === 'workshop') {
    window.scrollTo({
      top: fromTopWorkshop,
      behavior: "smooth",
    });
    show();
  } else if (this.textContent === 'price') {
    window.scrollTo({
      top: fromTopOffer,
      behavior: "smooth",
    });
    show();
  } else if (this.textContent === 'contact') {
    window.scrollTo({
      top: fromTopContact,
      behavior: "smooth",
    });
    show();
  };
}


function show() {
  // e.preventDefault();
  menuBtn.classList.toggle('close');
  constTab.forEach(el => el.classList.toggle('show'));
  document.body.classList.toggle('show');
}



function sticky() {
  const heightScroll = window.scrollY;

  if (heightScroll > (fromTopAbout - 5)) {
    menuBtn.style.position = 'fixed';
    goBack.style.position = 'fixed';
    goBack.style.visibility = 'visible';
  } else {
    menuBtn.style.position = 'absolute';
    goBack.style.visibility = 'hidden';
  }
}

window.addEventListener('scroll', sticky);
menuBtn.addEventListener('click', show);
menuNavLinks.forEach(el => el.addEventListener('click', goToSection));