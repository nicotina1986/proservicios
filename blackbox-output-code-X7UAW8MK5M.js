// Buscador interactivo
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        window.location.href = 'search.html?query=' + this.value;
    }
});

document.querySelector('.search-btn').addEventListener('click', function() {
    const query = document.querySelector('.search-input').value;
    window.location.href = 'search.html?query=' + query;
});

// Animaciones hover
document.querySelectorAll('.service-card, .category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});