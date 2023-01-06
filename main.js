const clima = () => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=20.665261&lon=-103.394207&appid=616629f9acdc3b22b8b09553e632e5da&units=metric", {method: "GET"})
    .then(response => response.json())
    .then(temp => global(temp))
}
function global (result){
const grafica = document.getElementById("myChart")
const data = {
    labels: result.list.map(temp => dayjs(temp.dt_txt).format('DD/MM/YYYY')),
    datasets: [{
      label: 'Temperatura en Guadalajara',
      data: result.list.map(temp => temp.main.temp_min),
    }]
  };
  const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
  new Chart(grafica, config)
      .catch(error =>{
          console.log("El pais no existe");
      })
    }
    clima();
