const clima = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=20.665261&lon=-103.394207&appid=616629f9acdc3b22b8b09553e632e5da&units=metric",
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((temp) => global(temp));
  // .then((data) => console.log(data.main.feels_like));
};
function global(result) {
  const grafica = document.getElementById("myChart");
  const data = {
    labels: result.list.map((temp) => dayjs(temp.dt_txt).format("DD/MM/YYYY")),
    fontColor: "white",
    datasets: [
      {
        label: "Temperatura Guadalajara",
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
    console.log("El pais no existe");
  });
}

//Creación grafica segunda ciudad//
const climaDos = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=4.570868&lon=-74.297333&appid=616629f9acdc3b22b8b09553e632e5da&units=metric",
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((temp) => globalDos(temp));
};
function globalDos(result) {
  const grafica = document.getElementById("myChartDos");
  const data = {
    labels: result.list.map((temp) => dayjs(temp.dt_txt).format("DD/MM/YYYY")),
    fontColor: "white",
    datasets: [
      {
        label: "Temperatura Colombia",
        borderColor: "#eac50f",
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
    console.log("El pais no existe");
  });
}

clima();
climaDos();
Datos();

//falta enviar los datos reales estas lineas claramente no van acá creo que van dentro de clima()
function Datos() {
  document.getElementById("temperatura").innerHTML = "°C";
  document.getElementById("viento").innerHTML = "km/h";
  document.getElementById("humedad").innerHTML = "%";
  document.getElementById("sensaTermica").innerHTML = "°C";
  document.getElementById("temperaturaDos").innerHTML = "°C";
  document.getElementById("vientoDos").innerHTML = "km/h";
  document.getElementById("humedadDos").innerHTML = "%";
  document.getElementById("sensaTermicaDos").innerHTML = "°C";
}
