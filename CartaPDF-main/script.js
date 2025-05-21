// Descargar la carta al hacer clic en el corazón
document.querySelector('.heart').addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'carta.pdf', true); // Asegúrate que 'carta.pdf' esté en la misma carpeta
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (xhr.status === 200) {
      const blob = xhr.response;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'FelizPrimerMes.pdf'; // Nombre con el que se descarga
      link.click();
      window.URL.revokeObjectURL(link.href);
    } else {
      console.error('No se pudo descargar el archivo.');
    }
  };
  xhr.send();
});

// Cuenta regresiva hasta las 23:59:59 del día actual
var x = setInterval(function () {
  var now = new Date();

  // Crear una fecha para hoy a las 23:59:59
  var endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  var distance = endOfDay - now;

  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar solo si aún no terminó el día
  if (distance > 0) {
    document.getElementById("countdown").textContent =
      `Nueva carta en: ${hours} hora${hours !== 1 ? 's' : ''} ` +
      `${minutes} minuto${minutes !== 1 ? 's' : ''} ` +
      `${seconds} segundo${seconds !== 1 ? 's' : ''}`;
  } else {
    clearInterval(x);
    document.getElementById("countdown").textContent = "¡Nueva carta disponible!";
  }
}, 1000);
