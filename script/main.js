const slideList = ['../../img/header.jpg', '../../img/header2.jpg', '../../img/header3.jpg']

const headerImg = document.querySelector('.header');
const dots = [...document.querySelectorAll('.switch-box')];
const time = 3000;
let active = 0;

function changeSwitches() {
  const activeSwitch = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeSwitch].classList.remove('active');
  dots[active].classList.add('active');
}

function changeImage() {
  active++;
  if (active === slideList.length) active = 0;
  headerImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${slideList[active]});`
  changeSwitches();
}

// setInterval(changeImage, time);


function showMenu() {
  document.querySelector('.menu-js').style.transform = 'translate(0)';
  document.querySelector('.menu-js').style.position = 'sticky';
  document.querySelector('.menu-js').style.overflow = 'hidden';

}

function hideMenu() {
  document.querySelector('.menu-js').style.transform = 'translate(100%)';
  document.querySelector('.menu-js').style.position = 'absolute';

}

document.querySelector('.btn-hamburger--open').addEventListener('click', showMenu);
document.querySelector('.btn-hamburger--close').addEventListener('click', hideMenu);

// hideEntry();