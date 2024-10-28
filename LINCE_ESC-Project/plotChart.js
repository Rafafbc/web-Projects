import { getDataArrays } from "./fetchData.js";
import Chart from 'chart.js/auto';

// Função para plotar o gráfico
function plotChart() {
    const { temperaturaDado, umidadeDado, pressaoDado, luxDado, timestamps } = getDataArrays();

    const ctx = document.getElementById('my-Chart').getContext('2d');
    
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [
                {
                    label: 'Temperatura',
                    data: temperaturaDado,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                },
                {
                    label: 'Umidade',
                    data: umidadeDado,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                },
                {
                    label: 'Pressão',
                    data: pressaoDado,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
                {
                    label: 'Luz',
                    data: luxDado,
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
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

document.addEventListener("DOMContentLoaded", plotChart())

// Expondo a função "fetchData" ao escopo global
window.plotChart = plotChart;
window.myChart = myChart;