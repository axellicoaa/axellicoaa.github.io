// Seleccionar los elementos header y footer
const header = document.querySelector("header");
const footer = document.querySelector("footer");

// Generar el contenido del header
header.innerHTML = `
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <span class="fs-4">Simple header</span>
  </a>
  <ul class="nav nav-pills">
    <li class="nav-item"><a href="index.html" class="nav-link" data-page="home">Inicio</a></li>
    <li class="nav-item"><a href="features.html" class="nav-link" data-page="features">Features</a></li>
    <li class="nav-item"><a href="Vision.html" class="nav-link" data-page="pricing">Vision</a></li>
    <li class="nav-item"><a href="faqs.html" class="nav-link" data-page="faqs">FAQs</a></li>
    <li class="nav-item"><a href="about.html" class="nav-link" data-page="about">About</a></li>
  </ul>
   </header>
`;

// Generar el contenido del footer
footer.innerHTML = `
    <footer class="text-center py-4 border-top">
    <p class="mb-0">&copy; 2024 Esslasa. All Rights Reserved.</p>
  </footer>
`;
