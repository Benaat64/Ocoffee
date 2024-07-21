document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    function toggleNav() {
        nav.classList.toggle('show');
        burgerMenu.classList.toggle('active');
    }
    burgerMenu.addEventListener('click', toggleNav);

    function handleResize() {
        if (window.innerWidth >= 768) { 
            nav.classList.remove('show');
            burgerMenu.classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResize);
});
