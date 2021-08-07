// Function for full-screen image
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav__menu');
    const menuCloseItem = document.querySelector('.nav__menu-close');
    const menuLinks = document.querySelectorAll('.menu__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav__menu_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav__menu_active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav__menu_active');
            });
        }
    }
}());


