
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
    "policies": {
      "age": "Todas las edades",
      "refund": "Reembolso hasta 48h antes"
    },
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
    "policies": {
      "age": "18+",
      "refund": "No reembolsable"
    },
    "description": "Un festival de música urbana con artistas internacionales y nacionales."
  }

];

function mostrarEventos(lista) {
  lista.forEach(evento => {
    console.log(`
📌 ${evento.title}
📍 ${evento.city} - ${evento.venue}
📅 ${new Date(evento.datetime).toLocaleString()}
💲 Desde: ${evento.priceFrom} ${evento.currency}
🔥 Popularidad: ${evento.popularity}
-----------------------------`);
  });
}


function filtrarPorCategoria(categoria) {
  return eventos.filter(e => e.category === categoria);
}


function filtrarPorCiudad(ciudad) {
  return eventos.filter(e => e.city.toLowerCase() === ciudad.toLowerCase());
}


function ordenarPorPopularidad(desc = true) {
  return [...eventos].sort((a, b) => 
    desc ? b.popularity - a.popularity : a.popularity - b.popularity
  );
}


function buscarEvento(texto) {
  return eventos.filter(e => 
    e.title.toLowerCase().includes(texto.toLowerCase())
  );
}

console.log("🎉 TODOS LOS EVENTOS:");
mostrarEventos(eventos);

console.log("🎵 EVENTOS DE MÚSICA:");
mostrarEventos(filtrarPorCategoria("musica"));

console.log("📍 EVENTOS EN LIMA:");
mostrarEventos(filtrarPorCiudad("Lima"));

console.log("🔥 MÁS POPULARES:");
mostrarEventos(ordenarPorPopularidad());

console.log("🔎 BÚSQUEDA 'festival':");
mostrarEventos(buscarEvento("festival"));


// ==========================
// OPCIONAL: CARGAR JSON EXTERNO
// ==========================

// Si tienes el archivo script.json en tu proyecto:
/*
fetch('script.json')
  .then(res => res.json())
  .then(data => {
    console.log("Datos cargados desde JSON:");
    mostrarEventos(data);
  })
  .catch(err => console.error("Error cargando JSON:", err));
*/
