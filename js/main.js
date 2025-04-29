document.addEventListener('DOMContentLoaded', () => {
    // Elementos del formulario flotante y navegación
    const contactToggle = document.getElementById('contactToggle');
    const contactForm = document.querySelector('.contact-form');
    const contactLink = document.getElementById('contactLink');
    const footerContactLink = document.getElementById('footerContactLink');
    const closeForm = document.getElementById('closeForm');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    // Verificar si los elementos existen
    console.log('contactToggle:', contactToggle);
    console.log('contactForm:', contactForm);
    console.log('contactLink:', contactLink);
    console.log('footerContactLink:', footerContactLink);
    console.log('closeForm:', closeForm);

    // Abrir/cerrar formulario flotante
    const toggleForm = () => {
        if (contactForm) {
            contactForm.classList.toggle('active');
            console.log('Formulario toggled:', contactForm.classList.contains('active') ? 'Visible' : 'Oculto');
        } else {
            console.error('contactForm no encontrado');
        }
    };

    if (contactToggle) {
        contactToggle.addEventListener('click', toggleForm);
        console.log('Evento click agregado a contactToggle');
    }
    if (contactLink) {
        contactLink.addEventListener('click', toggleForm);
        console.log('Evento click agregado a contactLink');
    }
    if (footerContactLink) {
        footerContactLink.addEventListener('click', toggleForm);
        console.log('Evento click agregado a footerContactLink');
    }
    if (closeForm) {
        closeForm.addEventListener('click', toggleForm);
        console.log('Evento click agregado a closeForm');
    }

    // Manejar menú móvil
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Animación de las tarjetas al hacer scroll
    const featureCards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });

    featureCards.forEach(card => observer.observe(card));

    // Asegurar que los enlaces de navegación sean suaves
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});