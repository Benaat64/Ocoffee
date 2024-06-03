const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav')

burgerMenu.addEventListener('click',(evt) => {
    nav.classList.toggle('on');
})