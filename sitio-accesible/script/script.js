document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('modo-contraste');
    button.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // Configura i18next
    i18next.init({
        lng: 'es', // Idioma inicial
        debug: true,
        resources: {
            es: {
                translation: {
                    title: "Sitio Web Accesible",
                    "header.title": "Bienvenidos al Sitio Accesible",
                    "nav.home": "Inicio",
                    "nav.about": "Acerca",
                    "nav.contact": "Contacto",
                    "main.content": "Contenido Principal",
                    "main.description": "Esta página está diseñada para ser accesible a todos los usuarios.",
                    "main.contrast": "Activar Modo de Alto Contraste",
                    "footer.translate": "Traducir",
                    "footer.contact": "Contacto: soporte@accesible.com"
                }
            },
            en: {
                translation: {
                    title: "Accessible Website",
                    "header.title": "Welcome to the Accessible Site",
                    "nav.home": "Home",
                    "nav.about": "About",
                    "nav.contact": "Contact",
                    "main.content": "Main Content",
                    "main.description": "This page is designed to be accessible to all users.",
                    "main.contrast": "Activate High Contrast Mode",
                    "footer.translate": "Translate",
                    "footer.contact": "Contact: soporte@accesible.com"
                }
            }
        }
    }, (err, t) => {
        if (err) return console.error(err);
        updateContent(); // Inicializa el contenido traducido
    });

    const traduccion = document.getElementById('traduccion');
    traduccion.addEventListener('click', () => {
        const newLang = i18next.language === 'es' ? 'en' : 'es';
        i18next.changeLanguage(newLang, updateContent);
    });

    // Función para actualizar el contenido traducido
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18next.t(key);
        });
    }
});





// Obtener los botones de aumentar y disminuir
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

// Obtener el body para cambiar el tamaño de la fuente
const body = document.querySelector('body');

// Función para aumentar el tamaño de la fuente
plusButton.addEventListener('click', () => {
    let currentFontSize = window.getComputedStyle(body).fontSize;
    currentFontSize = parseFloat(currentFontSize); // Convertir a número
    body.style.fontSize = (currentFontSize + 2) + 'px'; // Aumentar tamaño
});

// Función para disminuir el tamaño de la fuente
minusButton.addEventListener('click', () => {
    let currentFontSize = window.getComputedStyle(body).fontSize;
    currentFontSize = parseFloat(currentFontSize); // Convertir a número
    body.style.fontSize = (currentFontSize - 2) + 'px'; // Disminuir tamaño
});


    