let myChart = null; // Variável global para armazenar a instância do gráfico

// Função para filtrar os dados conforme a quantidade selecionada
function filterDataByQuantity(data, quantity) {
    return {
        timestamps: data.timestamps.slice(0, quantity),
        temperaturas: data.temperaturas.slice(0, quantity),
        umidades: data.umidades.slice(0, quantity),
        pressoes: data.pressoes.slice(0, quantity),
        luxs: data.luxs.slice(0, quantity)
    };
}

// Função para plotar o gráfico
function plotChart(quantity = 100) {
    console.log("plotChart!!!!!");

    // Recupera os dados completos
    const data = getDataArrays();
    console.log(data);

    // Filtra os dados com base na quantidade selecionada
    const filteredData = filterDataByQuantity(data, quantity);
    console.log(filteredData);

    const ctx = document.querySelector('#my-Chart');

    // Verifica se já existe um gráfico. Se sim, destrói o gráfico anterior.
    if (myChart !== null) {
        myChart.destroy();
    }

    // Cria o gráfico
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: filteredData.timestamps,
            datasets: [
                {
                    label: 'Umidade',
                    data: filteredData.umidades,
                    borderColor: 'rgb(34, 116, 156, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
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

// Função para lidar com a seleção da quantidade de dados
function handleDataQuantitySelection() {
    const quantityInput = document.getElementById('data-quantity'); // Seletor de quantidade de dados

    const quantity = parseInt(quantityInput.value);

    // Chama a função de plotagem passando a quantidade de dados selecionada
    plotChart(quantity);
}

// Exemplo de como integrar com a interface de usuário (HTML)
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
        .then(() => {
            getDataArrays();
            plotChart(100); // Exibe os primeiros 100 dados por padrão
        });

    // Adiciona um ouvinte para o evento de mudança no campo de quantidade de dados
    document.getElementById('data-quantity').addEventListener('change', handleDataQuantitySelection);
});

// Expondo a função "plotChart" ao escopo global
window.plotChart = plotChart;
window.handleDataQuantitySelection = handleDataQuantitySelection;
