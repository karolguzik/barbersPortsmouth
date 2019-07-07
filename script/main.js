const slideList = ['img/header.jpg', 'img/header2.jpg', 'img/header3.jpg']

const headerSlider = document.querySelector('.header__slider');
const dots = [...document.querySelectorAll('.switch-box')];
const time = 4000;
let active = 0;

function changeSwitches() {
  const activeSwitch = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeSwitch].classList.remove('active');
  dots[active].classList.add('active');
}

function changeImage() {
  active++;
  if (active === slideList.length) active = 0;
  headerSlider.src = slideList[active];
  changeSwitches();
}

// setInterval(changeImage, time);


function showMenu() {
  setTimeout(function () {
    document.querySelector('.nav-js').style.display = 'none';
    document.querySelector('.switch-js').style.display = 'none';
    document.querySelector('.header-hamburger').style.display = 'none';
  }, 200);

  setTimeout(function () {
    document.querySelector('.menu-js').style.display = 'flex';
    document.querySelector('.menu-js').style.opacity = '.8';
    document.querySelector('.menu-js').style.position = 'fixed';
    document.querySelector('.menu-js').style.overflow = 'hidden';
  }, 200);

}


function hideMenu() {
  setTimeout(function () {
    document.querySelector('.menu-js').style.opacity = '0';
    document.querySelector('.menu-js').style.position = 'absolute';
  }, 100);

  setTimeout(function () {
    document.querySelector('.nav-js').style.display = 'block';
    document.querySelector('.switch-js').style.display = 'block';
    document.querySelector('.header-hamburger').style.display = 'block';
  }, 400);

}

document.querySelector('.header-hamburger').addEventListener('click', showMenu);
document.querySelector('.menu-hamburger').addEventListener('click', hideMenu);

// hideEntry();