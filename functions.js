//funcion llama al clima de un lugar con la latitud y longitud
const clima = (lat, lon, ciudad, canva) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=616629f9acdc3b22b8b09553e632e5da&units=metric`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((temp) => global(temp, ciudad, canva));
    // .then((data) => console.log(data.main.feels_like));
  };

  //funcion que genera la grafica del clima
  function global(result, ciudad, canva) {
    console.log(result.dt_txt);
    const grafica = document.getElementById(canva);
    const data = {
      labels: result.list.map((temp) => dayjs(temp.dt_txt).format("DD/MM/YYYY")),
      fontColor: "white",
      datasets: [
        {
          label: `Temperatura de ${ciudad}`,
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
  //funcion llama a las cifras del lugar casado en latitud y longitud
  const climaCifras = (lat, lon, place) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=616629f9acdc3b22b8b09553e632e5da&units=metric`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((temp) => enviarDatos(temp, place));
  };
  
  //funcion muestra a las cifras del lugar en el canva indicado
  
  function enviarDatos(result, place) {
    document.getElementById(`temperatura${place}`).innerHTML =
      `${result.current.temp} °C`;
    document.getElementById(`viento${place}`).innerHTML =
    `${result.current.wind_speed} km/h`;
    document.getElementById(`humedad${place}`).innerHTML =
    `${result.current.humidity} %`;
    document.getElementById(`sensaTermica${place}`).innerHTML =
    `${result.current.feels_like} °C`;
  }
export {clima, global, climaCifras, enviarDatos}