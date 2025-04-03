/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Añade un evento de clic para alternar las clases
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');    // Cambia el ícono (agrega/remueve 'bx-x')
    navbar.classList.toggle('active');    // Muestra/oculta la barra de navegación
};

/*==================== Desplazarse por las secciones Enlace activo ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // Mueve esta línea fuera del bucle forEach para optimizar
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Corrige 'activate' a 'active'
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    /*==================== Eliminar el icono de alternancia y la barra de navegación al hacer clic en el enlace de la barra de navegación (desplazarse) ====================*/
    menuIcon.classList.remove('bx-x');    // Cambia el ícono (agrega/remueve 'bx-x')
    navbar.classList.remove('active');    // Muestra/oculta la barra de navegación


};



/*==================== scroll reveal ====================*/
ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration: 2000,
    delay:200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'rigth' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings:['Estudiante Universitario', 'De La', 'UPLA',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});