// Configuración inicial
const coordenadas = [10.270987979301923, -66.73302867312312]; // Coordenadas de la ubicación
const zoomInicial = 13; // Nivel de zoom inicial
const configCapa = {
    atribucion: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    urlPlantilla: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    subdominios: 'abc'
};

// Inicializar el mapa
const map = L.map('map').setView(coordenadas, zoomInicial);

// Añadir capa de tiles (mapa base)
L.tileLayer(configCapa.urlPlantilla, {
    attribution: configCapa.atribucion,
    subdomains: configCapa.subdominios
}).addTo(map);

// Añadir marcador
L.marker(coordenadas)
    .addTo(map)
    .bindPopup('Esta es la ubicación')
    .openPopup();

// Añadir control de escala (opcional)
L.control.scale({ imperial: false }).addTo(map);
