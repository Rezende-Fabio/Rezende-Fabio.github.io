/* Abre e fecha menu */

const menu = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
    menu.classList.contains("fa-bars")
     ? menu.classList.replace("fa-bars","fa-xmark")
     : menu.classList.replace("fa-xmark","fa-bars");
    body.classList.toggle("menu-nav-active");
});