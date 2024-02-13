let countNoClicks = 0;
let hearts = [];
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('click', () => {
    countNoClicks++;
    noBtn.style.transform = `scale(${1 - (countNoClicks * 0.1)})`;
    yesBtn.style.transform = `scale(${1 + (countNoClicks * 0.1)})`;
    if (countNoClicks >= 3) {
        noBtn.style.display = 'none';
    }
});

yesBtn.addEventListener('click', () => {
    // Eliminar el mensaje anterior
    var previousMessage = document.querySelector(".message");
    if (previousMessage) {
        previousMessage.remove();
    }

    // Crear el mensaje
    var message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = `
        <p>Entonces tenemos una cita 🥰</p>
        <p>Día: Jueves 15 de Febrero</p>
        <p>Lugar: Un Cine</p>
        <p>No faltes, Te Amo 🥰</p>
    `;

    // Mostrar el mensaje
    document.querySelector(".box").appendChild(message);

    // Generar corazones
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💘';
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(heart);
        hearts.push(heart);
    }

    // Animar corazones
    function animateHearts() {
        hearts.forEach((heart, index) => {
            const currentPosition = parseFloat(heart.style.top) || 0;
            const newPosition = currentPosition + 1; // Ajuste de la velocidad de la lluvia
            heart.style.top = newPosition + 'px';

            if (newPosition >= window.innerHeight) {
                heart.remove();
                hearts.splice(index, 1);
            }
        });

        if (hearts.length > 0) {
            requestAnimationFrame(animateHearts);
        }
    }

    animateHearts();
});

document.getElementById("noBtn").addEventListener("click", function() {
    var previousMessage = document.querySelector(".message");
    if (previousMessage) {
        previousMessage.remove();
    }
    var message = document.createElement("div");
    message.classList.add("message");
    if (countNoClicks === 1) {
        message.textContent = "¿Estás segura?";
    } else if (countNoClicks === 2) {
        message.textContent = "Piénsalo bien";
    } else if (countNoClicks === 3) {
        message.textContent = "No tienes escapatoria, ya dale al sí.";
    } else {
        var finalMessage = document.querySelector(".final-message");
        if (finalMessage) {
            finalMessage.remove();
        }
        message.classList.add("final-message");
        message.innerHTML = `
            <p>Entonces tenemos una cita 🥰</p>
            <p>Día: Jueves 15 de Febrero</p>
            <p>Lugar: Un Cine</p>
            <p>No faltes, Te Amo</p>
        `;
    }
    document.querySelector(".box").appendChild(message);
});
