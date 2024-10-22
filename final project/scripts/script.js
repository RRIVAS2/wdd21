//Footer code
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = new Date().toLocaleDateString();


//Wayfinding code
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
