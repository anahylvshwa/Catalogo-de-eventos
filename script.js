// ==========================
// DATA COMPLETA
// ==========================
const eventos = [
  {
    "id": "evt-0002",
    "title": "Concierto Sinfónico de Verano",
    "category": "musica",
    "artists": ["Orquesta Filarmónica Nacional"],
    "city": "Bogotá",
    "venue": "Teatro Mayor",
    "datetime": "2025-12-05T19:30:00-05:00",
    "priceFrom": 120.00,
    "currency": "COP",
    "stock": 850,
    "soldOut": false,
    "popularity": 87,
    "images": ["image1.jpg"],
    "description": "Un repertorio de música clásica con obras de Beethoven y Mozart."
  },
  {
    "id": "evt-0003",
    "title": "Festival Urbano 2025",
    "category": "festival",
    "artists": ["Rapero X", "DJ Latina", "Banda Flow"],
    "city": "Lima",
    "venue": "Estadio Nacional",
    "datetime": "2025-11-20T18:00:00-05:00",
    "priceFrom": 150.00,
    "currency": "PEN",
    "stock": 30000,
    "soldOut": false,
    "popularity": 95,
    "images": ["image2.jpg"],
    "description": "Un festival de música urbana con artistas internacionales y nacionales."
  },
  {
    "id": "evt-0004",
    "title": "Stand-Up Comedy Night",
    "category": "standup",
    "artists": ["Comediante A", "Comediante B"],
    "city": "Buenos Aires",
    "venue": "Teatro Vorterix",
    "datetime": "2025-10-18T21:00:00-03:00",
    "priceFrom": 45.00,
    "currency": "ARS",
    "stock": 400,
    "soldOut": false,
    "popularity": 78,
    "images": ["image3.jpg"],
    "description": "Una noche de comedia con risas garantizadas."
  },
  {
    "id": "evt-0005",
    "title": "Obra de Teatro: La Casa de Bernarda Alba",
    "category": "teatro",
    "artists": ["Compañía Nacional de Teatro"],
    "city": "Ciudad de México",
    "venue": "Teatro de la Ciudad",
    "datetime": "2025-09-15T20:00:00-06:00",
    "priceFrom": 60.00,
    "currency": "MXN",
    "stock": 600,
    "soldOut": false,
    "popularity": 82,
    "images": ["image4.jpg"],
    "description": "Adaptación moderna de la clásica obra de Lorca."
  },
  {
    "id": "evt-0006",
    "title": "Maratón Rock al Parque",
    "category": "musica",
    "artists": ["Banda Rockera 1", "Banda Rockera 2"],
    "city": "Bogotá",
    "venue": "Parque Simón Bolívar",
    "datetime": "2025-11-10T14:00:00-05:00",
    "priceFrom": 0.00,
    "currency": "COP",
    "stock": 50000,
    "soldOut": false,
    "popularity": 98,
    "images": ["image5.jpg"],
    "description": "El festival gratuito más grande de rock en Latinoamérica."
  },
  {
    "id": "evt-0007",
    "title": "Ballet Clásico: El Lago de los Cisnes",
    "category": "teatro",
    "artists": ["Compañía Nacional de Ballet"],
    "city": "Santiago de Chile",
    "venue": "Teatro Municipal",
    "datetime": "2025-12-12T19:00:00-04:00",
    "priceFrom": 200.00,
    "currency": "CLP",
    "stock": 1200,
    "soldOut": false,
    "popularity": 90,
    "images": ["image6.jpg"],
    "description": "Una de las obras maestras del ballet clásico."
  },
  {
    "id": "evt-0008",
    "title": "Conferencia de Tecnología Futuro 2025",
    "category": "otros",
    "artists": ["Ponente Internacional", "Startups locales"],
    "city": "Quito",
    "venue": "Centro de Convenciones",
    "datetime": "2025-08-20T09:00:00-05:00",
    "priceFrom": 100.00,
    "currency": "USD",
    "stock": 2500,
    "soldOut": false,
    "popularity": 85,
    "images": ["image7.jpg"],
    "description": "Una cumbre sobre innovación tecnológica y futuro digital."
  },
  {
    "id": "evt-0009",
    "title": "Festival de Jazz en la Costa",
    "category": "musica",
    "artists": ["Saxofonista A", "Banda B"],
    "city": "Cartagena",
    "venue": "Plaza Principal",
    "datetime": "2025-07-15T20:00:00-05:00",
    "priceFrom": 75.00,
    "currency": "COP",
    "stock": 2000,
    "soldOut": false,
    "popularity": 70,
    "images": ["image8.jpg"],
    "description": "Un festival de jazz frente al mar Caribe."
  },
  {
    "id": "evt-0010",
    "title": "Cine al Aire Libre: Ciclo de Clásicos",
    "category": "otros",
    "artists": ["CineClub Urbano"],
    "city": "Medellín",
    "venue": "Parque de los Deseos",
    "datetime": "2025-09-22T19:00:00-05:00",
    "priceFrom": 0.00,
    "currency": "COP",
    "stock": 1500,
    "soldOut": false,
    "popularity": 65,
    "images": ["image9.jpg"],
    "description": "Proyección gratuita de películas clásicas bajo las estrellas."
  }
];

// ==========================
// DOM
// ==========================
const grid = document.querySelector(".catalog-grid");
const modal = document.getElementById("movieModal");
const modalImg = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");

// ==========================
// RENDER
// ==========================
function renderEventos(lista) {
  grid.innerHTML = "";

  lista.forEach(evento => {
    const card = document.createElement("div");
    card.classList.add("catalog-item");

    card.innerHTML = `
      <img src="${evento.images[0] || 'https://via.placeholder.com/300x200'}">
      <p>${evento.title}</p>
      <small>${evento.city} • ${evento.venue}</small>
    `;

    card.addEventListener("click", () => {
      modalImg.src = evento.images[0] || 'https://via.placeholder.com/300x200';
      modalDesc.textContent = `
${evento.title}
📍 ${evento.city} - ${evento.venue}
📅 ${new Date(evento.datetime).toLocaleString()}
💲 ${evento.priceFrom} ${evento.currency}
🔥 Popularidad: ${evento.popularity}

${evento.description}
      `;
      modal.classList.remove("hidden");
    });

    grid.appendChild(card);
  });
}

// ==========================
// MODAL
// ==========================
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// ==========================
// FUNCIONES EXTRA (opcionales)
// ==========================
function filtrarPorCiudad(ciudad) {
  return eventos.filter(e => e.city.toLowerCase() === ciudad.toLowerCase());
}

function filtrarPorCategoria(cat) {
  return eventos.filter(e => e.category === cat);
}

function ordenarPorPopularidad() {
  return [...eventos].sort((a, b) => b.popularity - a.popularity);
}

// ==========================
// INIT
// ==========================
renderEventos(eventos);

// PRUEBAS (puedes activar)
// renderEventos(filtrarPorCiudad("Lima"));
// renderEventos(filtrarPorCategoria("musica"));
// renderEventos(ordenarPorPopularidad());
