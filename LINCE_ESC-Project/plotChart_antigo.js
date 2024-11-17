// import { getDataArrays } from "./fetchData.js";
// import { Chart } from 'chart.js/auto';

function teste1() {
    console.log("testando 1 ...")
}

// Função para plotar o gráfico
function plotChart() {
    //const { temperaturaDado, umidadeDado, pressaoDado, luxDado, timestamps } = getDataArrays();
    //const { temperaturaDado, umidadeDado, pressaoDado, luxDado, timestamps } = DataArrays;
    console.log("plotChart!!!!!");

    const data = getDataArrays();
    console.log(data)

    const temperaturaDado = data.temperaturas;
    const umidadeDado = data.umidades;
    const pressaoDado = data.pressoes;
    const luxDado = data.luxs;
    const timestamps = data.timestamps;

    console.log(temperaturaDado);
    console.log(umidadeDado);
    console.log(pressaoDado);
    console.log(luxDado);
    console.log(timestamps);

    const ctx = document.querySelector('#my-Chart');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [
                {
                    label: 'Temperatura',
                    data: temperaturaDado,
                    borderColor: 'rgb(210, 72, 72, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                },
                {
                    label: 'Umidade',
                    data: umidadeDado,
                    borderColor: 'rgb(34, 116, 156, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                },
                {
                    label: 'Pressão',
                    data: pressaoDado,
                    borderColor: 'rgb(78, 212, 78, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
                {
                    label: 'Lux',
                    data: luxDado,
                    borderColor: 'rgb(210, 210, 0, 1)',
                    backgroundColor: 'rgb(210, 210, 0, 0.2)',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Timestamp'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valores'
                    }
                }
            }
        }
    });
}

// document.addEventListener("DOMContentLoaded", plotChart);
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
        .then(() => {
            getDataArrays();
        });
});

// document.addEventListener("DOMContentLoaded", () => {
//     fetchData()
//         .then(() => {
//             const data = getDataArrays();
//             console.log("Dados para o gráfico:", data);  // Verifique os dados
//             const temperaturaDado = data.temperaturas;
//             const umidadeDado = data.umidades;
//             const pressaoDado = data.pressoes;
//             const luxDado = data.luxs;
//             const timestamps = data.timestamps;

//             //plotChart(temperaturaDado, umidadeDado, pressaoDado, luxDado, timestamps);
//         })
//         .catch((error) => {
//             console.error("Ocorreu um erro:", error);
//         });
// });

function teste2() {
    console.log("testando 2 ...")
}

// Expondo a função "fetchData" ao escopo global
window.plotChart = plotChart;
window.teste1 = teste1;
window.teste2 = teste2;
//window.myChart = myChart;