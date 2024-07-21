document.addEventListener('DOMContentLoaded', function() {
const btn = document.querySelector('.btn-all');
const container = document.querySelector('#all');

function toggleCatalogue() {
    container.classList.toggle('hidden');
    btn.classList.toggle('hidden');
}

btn.addEventListener('click', toggleCatalogue);

});