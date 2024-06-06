const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav')
const btn = document.querySelector('.btn-all')
const container = document.querySelector('#all')

burgerMenu.addEventListener('click',(evt) => {
    nav.classList.toggle('on');
})

btn.addEventListener('click', (evt) => {
    container.classList.toggle('hidden');
    btn.classList.toggle('hidden');
});

