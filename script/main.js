const menu = document.querySelector('.menu');
const headerHamburger = document.querySelector('.header-hamburger');
const menuHamburger = document.querySelector('.menu-hamburger');
// const menuHamburgerActive = document.querySelector('.btn-hamburger .active');

function showMenu() {
  setTimeout(function () {
    menu.style.opacity = '1';
  }, 200);

  setTimeout(function () {
    menu.style.display = 'flex';
    menu.style.position = 'fixed';
    menu.style.overflow = 'hidden';
  }, 100);

  // menu.classList.add('menuActive');
}


function hideMenu() {
  setTimeout(function () {
    menu.style.opacity = '0';
    menu.style.position = 'absolute';
  }, 100);

  setTimeout(function () {
    menu.style.display = 'none';
  }, 300);
}


$('.nav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
    $('.nav').css('position', 'fixed');
    $('.hamburger').css('position', 'fixed');
  }

  if (this.hash === '#about') {
    $('.nav__item:nth-child(4)').css({
      background: '#c7c5c5dc'
    });
    $('.nav__item:nth-child(4) a').css('color', 'black');

    $('.nav__item:nth-child(3)').css({
      background: 'none',
    });
    $('.nav__item:nth-child(3) a').css('color', 'black');
    $('.nav__item:nth-child(2) a').css('color', 'black');
    $('.nav__item:nth-child(1) a').css('color', 'black');
    $('.nav__item:nth-child(1) a:hover').css('color', 'black');
  } else if (this.hash === '#workshop') {
    $('.nav__item:nth-child(3)').css({
      background: '#c7c5c5dc'
    });
    $('.nav__item:nth-child(3) a').css('color', 'black');

    $('.nav__item:nth-child(4)').css({
      background: '#ffffffe1'
    });
    $('.nav__item:nth-child(4) a').css('color', '#c7c5c5dc');
  }
});



// document.querySelector('.btn-hamburger').addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('test');
//   this.classList.toggle('active');
// })

// document.querySelector('.hamburger').addEventListener('click', showMenu);
// document.querySelector('.menu-hamburger').addEventListener('click', hideMenu);

headerHamburger.addEventListener('click', showMenu);
menuHamburger.addEventListener('click', hideMenu);
// menuHamburgerActive.addEventListener('click', hideMenu);