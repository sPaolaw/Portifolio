// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            if (!link.hasAttribute('href') || link.getAttribute('href').startsWith('#')) {
                return; 
            }  
            event.preventDefault();
            window.open(link.getAttribute('href'), '_blank');
        });
    });
});
