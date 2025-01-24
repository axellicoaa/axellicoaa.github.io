// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contrasteButton = document.getElementById('modo-contraste');
    const aumentarTextoButton = document.getElementById('aumentar-texto');
    const disminuirTextoButton = document.getElementById('disminuir-texto');
    const selectorIdioma = document.getElementById('selector-idioma');
    const contenidoDinamico = document.getElementById('contenido-dinamico');

    // Modo Alto Contraste
    contrasteButton.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // Cambiar tamaño de texto
    aumentarTextoButton.addEventListener('click', () => {
        document.body.style.fontSize = '120%';
    });

    disminuirTextoButton.addEventListener('click', () => {
        document.body.style.fontSize = '100%';
    });

    // Traducción dinámica
    selectorIdioma.addEventListener('change', (e) => {
        const idioma = e.target.value;
        fetch('/sitio-accesible/json/lang.json')
            .then((response) => response.json())
            .then((data) => {
                const traducciones = data[idioma];
                contenidoDinamico.querySelector('h2').textContent = traducciones.titulo;
                contenidoDinamico.querySelector('p').textContent = traducciones.mensaje;
            });
    });
});
