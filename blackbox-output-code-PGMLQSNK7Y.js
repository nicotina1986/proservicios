// Copia este JS completo
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        alert('Buscando: ' + this.value);
    }
});

document.querySelector('.search-btn').addEventListener('click', function() {
    alert('¡Buscando profesionales!');
});

document.querySelectorAll('.service-card, .category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});