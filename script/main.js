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
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');
const navItem = document.querySelectorAll('.nav__item');
const constTab = [menu, menuNav, menuLogo, menuSocials, headerHeading, logo, scroll, nav];



const fromTopAbout = document.querySelector('.about').offsetTop;
const fromTopWorkshop = document.querySelector('.workshop').offsetTop;
const fromTopOffer = document.querySelector('.offer').offsetTop;
const fromTopContact = document.querySelector('.contact').offsetTop;

navLink.forEach(el => el.addEventListener('click', function () {
  if (el.textContent === 'we are') {
    window.scrollTo({
      top: fromTopAbout,
      behavior: 'smooth',
    });
    nav.style.position = 'fixed';
  } else if (el.textContent === 'workshop') {
    window.scrollTo({
      top: fromTopWorkshop,
      behavior: 'smooth',
    });
    nav.style.position = 'fixed';
  }


}));


function show(e) {
  e.preventDefault();
  menuBtn.classList.toggle('close');
  constTab.forEach(el => el.classList.toggle('show'));
  document.body.classList.toggle('show');
}



function sticky() {
  const heightScroll = window.scrollY;

  if (heightScroll < fromTopAbout) {
    menuBtn.style.position = 'absolute';
    nav.style.position = 'absolute';
    menuBtnLine.forEach(el => el.style.backgroundColor = '#c7c5c5dc');
    navLink.forEach(el => el.style.color = '#c7c5c5dc');
    navLink.forEach(el => el.style.color = '#c7c5c5dc');
    navItem.forEach(el => el.style.background = 'none');
  } else if (heightScroll > fromTopAbout && heightScroll < fromTopWorkshop) {
    menuBtn.style.position = 'fixed';
    nav.style.position = 'fixed';
    menuBtnLine.forEach(el => el.style.backgroundColor = 'black');
    navLink.forEach(el => el.style.color = 'black');
    navItem[3].style.backgroundColor = '#c7c5c5dc';
    navItem[2].style.background = 'none';
  } else if (heightScroll > fromTopWorkshop && heightScroll < fromTopOffer) {
    menuBtnLine.forEach(el => el.style.backgroundColor = '#c7c5c5dc');
    navLink.forEach(el => el.style.color = '#c7c5c5dc');
    navItem[3].style.background = 'none';
    navItem[2].style.backgroundColor = '#c7c5c5dc';
    navLink[2].style.color = 'black';
    navItem[1].style.background = 'none';
  } else if (heightScroll > fromTopOffer && heightScroll < fromTopContact) {
    menuBtnLine.forEach(el => el.style.backgroundColor = 'black');
    navLink.forEach(el => el.style.color = 'black');
    navItem[2].style.background = 'none';
    navItem[1].style.backgroundColor = '#c7c5c5dc';
    navItem[0].style.background = 'none';
  } else if (heightScroll > fromTopContact) {
    menuBtnLine.forEach(el => el.style.backgroundColor = '#c7c5c5dc');
    navLink.forEach(el => el.style.color = '#c7c5c5dc');
    navItem[1].style.background = 'none';
    navItem[1].style.color = 'black';
    navItem[0].style.backgroundColor = '#c7c5c5dc';
    navLink[0].style.color = 'black';
  } else {
    menuBtn.style.position = 'absolute';
    nav.style.position = 'absolute';
  }
}

window.addEventListener('scroll', sticky);
menuBtn.addEventListener('click', show);
menuNavLinks.forEach(el => el.addEventListener('click', show));