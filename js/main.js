// Datos de servicios de ejemplo
const servicios = [
    {
        id: 1,
        titulo: "Cerrajero 24hs Urgente",
        precio: "$3.500",
        categoria: "cerrajeria",
        imagen: "🔓",
        rating: 4.9,
        reviews: 127,
        ubicacion: "CABA - Palermo",
        profesional: "Juan Pérez"
    },
    {
        id: 2,
        titulo: "Plomero matriculado",
        precio: "$4.200",
        categoria: "plomeria",
        imagen: "🔧",
        rating: 4.8,
        reviews: 89,
        ubicacion: "GBA - Lanús",
        profesional: "Carlos Gómez"
    },
    {
        id: 3,
        titulo: "Electricista certificado",
        precio: "$5.800",
        categoria: "electricidad",
        imagen: "⚡",
        rating: 5.0,
        reviews: 156,
        ubicacion: "CABA - Recoleta",
        profesional: "María López"
    },
    {
        id: 4,
        titulo: "Gasista matriculado",
        precio: "$6.500",
        categoria: "gas",
        imagen: "🔥",
        rating: 4.7,
        reviews: 203,
        ubicacion: "GBA - La Plata",
        profesional: "Roberto Díaz"
    },
    {
        id: 5,
        titulo: "Jardinero profesional",
        precio: "$2.800",
        categoria: "jardineria",
        imagen: "🌿",
        rating: 4.9,
        reviews: 67,
        ubicacion: "CABA - Belgrano",
        profesional: "Ana Martínez"
    },
    {
        id: 6,
        titulo: "Pintor especializado",
        precio: "$4.900",
        categoria: "pintura",
        imagen: "🎨",
        rating: 4.8,
        reviews: 94,
        ubicacion: "GBA - Quilmes",
        profesional: "Luis Fernández"
    }
];

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    cargarServiciosDestacados();
    agregarEventListeners();
    mostrarWhatsAppMobile();
});

// Cargar servicios destacados en home
function cargarServiciosDestacados() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    servicios.slice(0, 6).forEach(servicio => {
        grid.innerHTML += crearCardServicio(servicio);
    });
}

// Crear tarjeta de servicio
function crearCardServicio(servicio) {
    return `
        <div class="service-card" onclick="verDetalle(${servicio.id})">
            <div class="service-image">${servicio.imagen}</div>
            <div class="service-content">
                <h3 class="service-title">${servicio.titulo}</h3>
                <div class="service-price">${servicio.precio}</div>
                <div class="service-rating">
                    <div class="stars">${'★'.repeat(Math.floor(servicio.rating))}${'☆'.repeat(5-Math.floor(servicio.rating))}</div>
                    <span class="rating-text">(${servicio.reviews} reseñas)</span>
                </div>
                <div class="service-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${servicio.ubicacion}</span>
                </div>
                <button class="btn-primary">Ver detalle</button>
            </div>
        </div>
    `;
}

// Event listeners principales
function agregarEventListeners() {
    // Buscador
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value;
            window.location.href = `resultados.html?q=${encodeURIComponent(query)}`;
        });
    }

    // Categorías
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoria = this.dataset.category;
            window.location.href = `resultados.html?categoria=${categoria}`;
        });
    });

    // Botones de header
    document.querySelector('.publish-btn')?.addEventListener('click', () => {
        alert('¡Funcionalidad para publicar servicios próximamente!');
    });

    document.querySelector('.btn-login')?.addEventListener('click', () => {
        alert('Redirigiendo al login...');
    });

    document.querySelector('.btn-register')?.addEventListener('click', () => {
        alert('Redirigiendo al registro...');
    });

    // Botones del banner
    document.querySelectorAll('.btn-large')?.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'resultados.html';
        });
    });
}

// Ver detalle de servicio
function verDetalle(id) {
    window.location.href = `detalle.html?id=${id}`;
}

// WhatsApp responsive
function mostrarWhatsAppMobile() {
    const whatsapp = document.querySelector('.whatsapp-float');
    if (whatsapp && window.innerWidth <= 768) {
        whatsapp.style.right = '20px';
        whatsapp.style.bottom = '20px';
    }
}

// Smooth scroll y animaciones
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.service-card, .category-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
