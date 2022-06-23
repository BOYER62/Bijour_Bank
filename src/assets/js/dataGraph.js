// <block:setup:1>
let datapoints = [];
let labels = [];

refrechGraph();

navHeader[0].addEventListener('click',function(){
  tout();
  testChart();
});

navHeader[1].addEventListener('click',function(){
  credit();
  testChart();
});

navHeader[2].addEventListener('click',function(){
  debit();
  testChart();
});

function refrechGraph(){
  datapoints = [];
  labels = [];
  filter.forEach(operation => datapoints.push(operation.money));
  const DATA_COUNT = datapoints.length + 2;
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
  console.log(labels);
}
const data = {
  labels: labels,
  datasets: [
    {
      label: "Compte",
      data: datapoints,
      borderColor: "purple",
      //   fill: true,
      cubicInterpolationMode: "monotone",
    },
  ],
};
// </block:setup>

// <block:config:0>
const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      //   title: {
      //     display: true,
      //     text: "Chart.js Line Chart - Cubic interpolation mode",
      //   },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};

/*Le contexte du canevas HTML */
context = document.getElementById("myChart").getContext("2d");
/* Création du graphique */
chart = new Chart(context, config);

/* Générer des données aléatoires */
function generateData() {
  randomTemperature = (Math.random() * Math.floor(50)).toFixed(2); // Deux chiffres après la virgule
  addTemperature(new Date().toLocaleTimeString(), randomTemperature);
}

function addTemperature(time, temperature) {
  /* Ajoute la valeur en X */
  config.data.labels.push(time);

  /* Ajoute la valeur */
  config.data.datasets[0].data.push(temperature);

  /* Rafraichir le graphique */
  chart.update();
}
};
