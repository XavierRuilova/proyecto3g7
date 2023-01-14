/*gudalajara lat 20.665261  lon -103.394207*/
/*medellin lat 6.230833  lon -75.590553*/
/*Guayaquil lat -2.203816  lon -79.897453*/

//CAPTURA DE ELEMENTOS
let temp1 = document.getElementById("temperatura");
let wind1 = document.getElementById("viento");
let hum1 = document.getElementById("humedad");
let sens1 = document.getElementById("sensaTermica");
let temp2 = document.getElementById("temperatura2");
let wind2 = document.getElementById("viento2");
let hum2 = document.getElementById("humedad2");
let feels2 = document.getElementById("sensaTermica2");

// FUNCION GENERAL PARA PEDIR EL CLIMA
const clima = (lat, lon, pais, seccion) => {
  let url=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=616629f9acdc3b22b8b09553e632e5da&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((temp) => {

      console.log(temp.temp)
      drawChart(temp, pais, seccion);
    });
    // .then((data) => console.log(data.main.feels_like));
    // .then((data) => console.log(data));
};


// FUNCION GENERAL PARA CARGAR INFORMACION

function drawChart(result, pais, seccion) {
  const grafica = document.getElementById(seccion);
  const data = {
    labels: result.list.map((temp) => dayjs(temp.dt_txt).format("DD/MM/YYYY")),
    fontColor: "white",
    datasets: [
      {
        label: "Temperatura de "+ pais,
        borderColor: "#06c1fa",
        data: result.list.map((temp) => temp.main.temp),
      },
    ],
  };
  const config = {
    type: "line",

    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  new Chart(grafica, config).catch((error) => {
    console.log("Pais no registrado");
  });
}

clima(20.665261, -103.394207, "Guadalajara", "myChart1");
clima(6.230833, -75.590553, "Medellin", "myChart2");



// "temp":12.58,    OK
// "feels_like":10.49,  OK
// "temp_min":12.58,
// "temp_max":12.58,
// "pressure":1016,


// "sea_level":1016,
// "grnd_level":841,
// "humidity":23,"temp_kf":0},  OK
// "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],
// "clouds":{"all":99},
// "wind":{"speed":0.85,"deg":141,"gust":1.21}, OK
// "visibility":10000,
// "pop":0,
// "sys":{"pod":"d"},
// "dt_txt":"2023-01-18 15:00:00"} OK