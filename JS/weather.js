// Función para obtener el clima actual y el pronóstico
async function obtenerClima(ciudad) {
    const claveApi = 'd63d4edc1c614b938ea81113230112'; // Usa tu propia clave API
    const urlClima = `https://api.weatherapi.com/v1/forecast.json?key=${claveApi}&q=${ciudad}&aqi=no`;

    try {
        const respuesta = await fetch(urlClima);
        const datosClima = await respuesta.json();
        mostrarClimaActual(datosClima);
        mostrarPronostico(datosClima);
    } catch (error) {
        console.error('Error al obtener el clima:', error);
    }
}

// Función para mostrar el clima actual
function mostrarClimaActual({ current, location }) {
    const contenedorClimaActual = document.getElementById('currentWeather');
    const { name, country } = location;
    const { condition: { text, icon }, temp_c, humidity, wind_kph, precip_in } = current;
    const plantillaClimaActual = `
    <h2>${name}, ${country}</h2>
    <p>${text}</p>
    <div class="datos-clima-actual">
        <div class="temperatura-actual">
            <img class="icono-clima" src="${icon}" alt="${text}">
            <div>${temp_c}°<img class="icono-celsius" src="./images/celsius.png" alt="grados"></div>
        </div>
        <ul>
            <li>Precipitaciones: ${precip_in}%</li>
            <li>Humedad: ${humidity}%</li>
            <li>Viento: ${wind_kph} km/h</li>
        </ul>
    </div>
    `;
    contenedorClimaActual.innerHTML = plantillaClimaActual;
}

// Función para mostrar el pronóstico del clima
function mostrarPronostico({ forecast }) {
    const contenedorPronostico = document.getElementById('forecastWeather');
    contenedorPronostico.innerHTML = ''; // Limpiar contenido anterior
    const pronosticoHora = forecast.forecastday[0].hour;
    pronosticoHora.forEach(hora => {
        const { condition: { text, icon }, time, temp_c } = hora;
        const formatoHora = time.split(" ")[1];
        const plantillaPronostico = `
        <li class="temperatura-hora">
            <span>${formatoHora}</span>
            <img class="icono-clima" src="${icon}" alt="${text}">
            <p>${temp_c} °C</p>
        </li>
        `;
        contenedorPronostico.innerHTML += plantillaPronostico;
    });
}

// Solicitar el clima para una ciudad específica
obtenerClima('madrid');